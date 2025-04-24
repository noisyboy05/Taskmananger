"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProgressContextType {
  progresoTotal: number;
  setProgresoTotal: (progreso: number) => void;
  racha: number;
  setRacha: (racha: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progresoTotal, setProgresoTotal] = useState(0); // Progreso total de las tareas
  const [racha, setRacha] = useState(0); // Racha basada en el progreso

  return (
    <ProgressContext.Provider value={{ progresoTotal, setProgresoTotal, racha, setRacha }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress debe usarse dentro de ProgressProvider");
  }
  return context;
};