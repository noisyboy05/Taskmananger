"use client";

export default function TaskItem({ task }: { task: string }) {
  return (
    <li className="p-2 bg-white rounded shadow flex justify-between items-center">
      <span>{task}</span>
      <span>✅</span>
    </li>
  );
}