"use client";
import Image from "next/image";

interface SidebarProps {
  onSelect: (view: string) => void;
}

export default function Sidebar({ onSelect }: SidebarProps) {
  return (
    <aside className="w-40 h-screen flex flex-col justify-center items-center p-2">
      <ul className="space-y-4 w-full flex flex-col items-center">
        <li
          className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
          onClick={() => onSelect("dashboard")}
        >
          <Image src="/icons/dashboard.svg" alt="Dashboard" width={24} height={24} />
          <span className="text-xs font-bold text-gray-800 mb-2 text-center">Dashboard</span>
        </li>
        <li
          className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer"
          onClick={() => onSelect("racha")}
        >
          <Image src="/icons/racha.svg" alt="Racha" width={24} height={24} />
          <span className="text-xs font-bold text-gray-800 mb-2 text-center">Racha</span>
        </li>
      </ul>
    </aside>
  );
}