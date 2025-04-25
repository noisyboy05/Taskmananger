"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/organisms/Slidebar/Sidebar";
import TaskList from "./components/molecules/TaskList";
import Coyp from "./components/molecules/coyp";

interface Tarea {
  nombre: string;
  dificultad: "baja" | "media" | "alta";
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
}

export default function Home() {
  const [view, setView] = useState("dashboard");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea: Tarea) => {
    setTareas((prev) => [...prev, tarea]);
  };

  const editarTarea = (
    index: number,
    nuevosDatos: Partial<Pick<Tarea, "nombre" | "dificultad" | "estado" | "progreso">>
  ) => {
    setTareas((prev) =>
      prev.map((tarea, i) => (i === index ? { ...tarea, ...nuevosDatos } : tarea))
    );
  };

  const eliminarTarea = (index: number) => {
    setTareas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-46 h-full flex flex-col bg-white items-center">
        {/* Logo */}
        <div className="h-24 flex items-center justify-center p-2">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
          </div>

        {/* Sidebar Items */}
        <Sidebar onSelect={setView} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full flex flex-col bg-gray-100 overflow-hidden">
        <div className="px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {view === "dashboard" ? "Panel de Tareas" : "Racha"}
          </h1>
        </div>
        <div className="flex-1 overflow-auto px-4 pb-4">
          {view === "dashboard" && (
            <TaskList
              tareas={tareas}
              setTareas={setTareas}
              agregarTarea={agregarTarea}
              editarTarea={editarTarea}
              eliminarTarea={eliminarTarea}
            />
          )}
          {view === "racha" && <Coyp tareas={tareas} />}
        </div>
      </main>
    </div>
  );
}
