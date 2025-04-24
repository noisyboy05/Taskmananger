"use client";

import { useProgress } from "../../context/ProgessContext";

interface Tarea {
  nombre: string;
  dificultad: "baja" | "media" | "alta";
  estado: "pendiente" | "completado" | "en progreso";
  progreso: number;
}

const Coyp = ({ tareas }: { tareas?: Tarea[] }) => {
  const { progresoTotal, racha } = useProgress();

  // Selecciona imagen según la racha
  const getImageByRacha = () => {
    if (racha >= 3)
      return "https://i.pinimg.com/originals/b8/53/4d/b8534d8fa3c0aca24298e194137d04f5.gif"; // 🔥 Épica
    if (racha >= 2)
      return "https://img.pokemondb.net/artwork/large/ivysaur.jpg"; // 🌱 En crecimiento
    return "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg"; // ✨ Empezando
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6 rounded-3xl shadow-2xl max-w-xl mx-auto border border-gray-200">

      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🐾 Tu Mascota</h1>

      {/* Imagen dinámica */}
      <img
        src={getImageByRacha()}
        alt="Mascota actual"
        className="w-32 h-32 object-contain mb-4 transition-transform duration-300 hover:scale-105"
      />

      {/* Barra de progreso */}
      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden mb-4">
        <div
          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full transition-all duration-500"
          style={{ width: `${progresoTotal}%` }}
        ></div>
      </div>

      <p className="text-lg text-gray-700 font-semibold">
        {racha} tareas completadas
      </p>


      {/* Crecimiento de la mascota */}
      <div className="w-full bg-white rounded-2xl shadow p-4 mb-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Haz evolucionar tu mascota</h2>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>✅ completa tus tareas <span className="text-green-500 font-semibold">+1</span> punto</li>
          <li>✅ si la tarea clasifica como dificil <span className="text-green-500 font-semibold">+2</span> puntos</li>
          <li>✅ entre mas tareas completadas <span className="text-blue-500 font-semibold">+</span> puntos</li>
        </ul>
      </div>

      {/* Insignias de racha */}
      <div className="w-full bg-white rounded-2xl shadow p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Tus insignias de racha</h2>
        <div className="flex justify-between text-sm text-gray-500">
          <span>🔥 3d</span>
          <span>🔥 10d</span>
          <span>🔥 30d</span>
          <span>💜 100d</span>
          <span>💜 200d</span>
        </div>
      </div>

    </div>
  );
};

export default Coyp;
