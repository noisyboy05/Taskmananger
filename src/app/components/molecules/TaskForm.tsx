"use client";

import { useState } from "react";

interface TaskFormProps {
  onAddTask: (task: { nombre: string; dificultad: "baja" | "media" | "alta" }) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState<"baja" | "media" | "alta">("baja");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim() === "") return; // Evitar agregar tareas sin nombre
    onAddTask({ nombre, dificultad });
    setNombre(""); // Limpiar el campo después de agregar la tarea
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg max-w-md w-full mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-700">Agregar Nueva Tarea</h2>
  
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 font-bold transition duration-200"      />
  
      <select
        value={dificultad}
        onChange={(e) => setDificultad(e.target.value as "baja" | "media" | "alta")}
        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 font-bold transition duration-200"      >
        <option value="" disabled>
          Selecciona dificultad
        </option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
  
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-xl transition duration-200 shadow-sm"
      >
        Agregar Tarea
      </button>
    </form>
  );
}
export default TaskForm;