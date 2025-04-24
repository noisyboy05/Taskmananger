"use client";

import { useState } from "react";
import { CheckCircle, Circle, PencilLine, Trash2, Undo2 } from "lucide-react";

interface Props {
  nombre: string;
  dificultad: "baja" | "media" | "alta";
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
  onComplete: () => void;
  onUndo: () => void;
  onEdit: (nuevosDatos: { nombre?: string; dificultad?: "baja" | "media" | "alta" }) => void;
  onDelete: () => void;
}

export const TaskCard = ({
  nombre,
  dificultad,
  estado,
  progreso,
  onComplete,
  onUndo,
  onEdit,
  onDelete,
}: Props) => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaDificultad, setNuevaDificultad] = useState(dificultad);

  const guardarCambios = () => {
    onEdit({ nombre: nuevoNombre, dificultad: nuevaDificultad });
    setModoEdicion(false);
  };

  const iconoEstado =
    estado === "completado" ? (
      <CheckCircle className="w-5 h-5 text-green-600 cursor-pointer" onClick={onUndo} />
    ) : (
      <Circle className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" onClick={onComplete} />
    );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-start">
          {iconoEstado}
          {modoEdicion ? (
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <label className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1">Contenido:</span>
                <input
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  className="border border-gray-300 text-sm px-2 py-1 rounded"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1">Categoría:</span>
                <select
                  value={nuevaDificultad}
                  onChange={(e) => setNuevaDificultad(e.target.value as any)}
                  className="border border-gray-300 text-sm px-2 py-1 rounded"
                >
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </label>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={guardarCambios}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  Guardar
                </button>

                {estado === "completado" && (
                  <button
                    onClick={() => {
                      onUndo();
                      setModoEdicion(false);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Undo2 className="w-4 h-4" /> Desmarcar
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <h3 className="text-base font-medium">{nombre}</h3>
              <p className="text-xs text-gray-500 capitalize">Dificultad: {dificultad}</p>
              <p className="text-xs text-gray-400">Estado: {estado}</p>
            </div>
          )}
        </div>

        {!modoEdicion && (
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setModoEdicion(true)}
              className="text-gray-400 hover:text-gray-600"
              title="Editar tarea"
            >
              <PencilLine className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="text-red-400 hover:text-red-600"
              title="Eliminar tarea"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Barra de progreso */}
      <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            progreso === 100 ? "bg-green-500" : "bg-yellow-500"
          }`}
          style={{ width: `${progreso}%` }}
        ></div>
      </div>

      {/* Porcentaje abajo */}
      <div className="text-right text-xs text-gray-400 mt-1">{progreso}%</div>
    </div>
  );
};
