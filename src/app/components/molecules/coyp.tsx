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
    if (racha > 3)
      return "https://pm1.aminoapps.com/6189/c061442570296dea0c1b15165d028c6df2cf1cd0_hq.jpg"; // 🔥 Épica
    if (racha >= 2)
      return "https://img.pokemondb.net/artwork/large/ivysaur.jpg"; // 🌱 En crecimiento
      return "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg"; // ✨ Empezando
    };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6 rounded-3xl shadow-2xl max-w-xl mx-auto border border-gray-200">

      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🐾 Tu racha</h1>

      {/* Texto explicativo */}
      <div className="text-center text-sm text-gray-600 mb-4 max-w-md">
        <p>
          Este es tu compañero de progreso. A medida que completas tareas,
          tu mascota evoluciona y gana nuevas formas. El avance se calcula
          según la cantidad de tareas completadas y su dificultad.
        </p>
        <p className="mt-2 font-medium">
          ¡Completa tareas y haz que tu mascota crezca contigo! 🚀
        </p>
      </div>

      {/* Imagen dinámica */}
      <img
        src={getImageByRacha()}
        alt="Mascota actual"
        className="w-42 h-42 object-contain mb-4 transition-transform duration-300 hover:scale-105"

      />

      {/* Barra de progreso */}
      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden mb-4">
        <div
          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full transition-all duration-500"
          style={{ width: `${progresoTotal}%` }}
        ></div>
      </div>

      <p className="text-lg text-gray-700 font-semibold">
         esto llevas de racha!!
      </p>

      {/* Crecimiento de la mascota */}
      <div className="w-full bg-white rounded-2xl shadow p-4 mb-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Haz evolucionar tu mascota</h2>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>✅ completa tus tareas <span className="text-green-500 font-semibold">+1</span> punto</li>
          <li>✅ si la tarea clasifica como difícil seran <span className="text-green-500 font-semibold">2</span> puntos extra!!</li>
          <li>✅ entre más tareas completadas obtienes <span className="text-blue-500 font-semibold">+</span> puntos y mas mascotas!</li>
        </ul>
      </div>
    </div>
  );
};

export default Coyp;
