"use client";

import { useEffect } from "react";
import { useProgress } from "../../context/ProgessContext";
import TaskForm from "./TaskForm";
import { TaskCard } from "./TaskCard";

interface Tarea {
  nombre: string;
  dificultad: "baja" | "media" | "alta";
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
}

interface TaskListProps {
  tareas: Tarea[];
  setTareas: (tareas: Tarea[]) => void;
  agregarTarea: (tarea: Tarea) => void;
  editarTarea: (
    index: number,
    nuevosDatos: Partial<Pick<Tarea, "nombre" | "dificultad" | "estado" | "progreso">>
  ) => void;
  eliminarTarea: (index: number) => void;
}

const TaskList = ({
  tareas,
  setTareas,
  agregarTarea,
  editarTarea,
  eliminarTarea,
}: TaskListProps) => {
  const { setProgresoTotal, setRacha } = useProgress();

  useEffect(() => {
    // Calcular el progreso total
    const progresoTotal = tareas.reduce((total, tarea) => total + tarea.progreso, 0) / tareas.length || 0;
    setProgresoTotal(progresoTotal);

    // Actualizar la racha
    const racha = tareas.every((tarea) => tarea.estado === "completado") ? tareas.length : 0;
    setRacha(racha);
  }, [tareas, setProgresoTotal, setRacha]);

  const marcarComoCompletada = (index: number) => {
    editarTarea(index, { estado: "completado", progreso: 100 });
  };

  const desmarcarTarea = (index: number) => {
    editarTarea(index, { estado: "pendiente", progreso: 0 });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Título arriba */}
      <div className="text-center mb-6">
        <p className="text-gray-500 italic text-sm">¡Hola!</p>
        <h2 className="text-xl font-semibold text-gray-700">
          Tienes {tareas.length} {tareas.length === 1 ? "tarea" : "tareas"} para hoy 📝
        </h2>
      </div>

      {/* Tareas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {tareas.map((tarea, index) => (
          <TaskCard
            key={index}
            nombre={tarea.nombre}
            dificultad={tarea.dificultad}
            estado={tarea.estado}
            progreso={tarea.progreso}
            onComplete={() => marcarComoCompletada(index)}
            onUndo={() => desmarcarTarea(index)}
            onDelete={() => eliminarTarea(index)}
            onEdit={(nuevosDatos) => editarTarea(index, nuevosDatos)}
          />
        ))}
      </div>

      {/* Formulario abajo */}
      <div className="w-full max-w-xl self-center pt-4">
        <TaskForm
          onAddTask={(tarea) =>
            agregarTarea({ ...tarea, estado: "pendiente", progreso: 0 })
          }
        />
      </div>
    </div>
  );
};

export default TaskList;