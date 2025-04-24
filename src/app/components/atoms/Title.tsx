"use client";

export default function Title({ text }: { text: string }) {
  return <h2 className="text-xl font-bold">{text}</h2>;
}