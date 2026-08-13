"use client"

import { useState } from "react"
import { Info } from "lucide-react"

export default function SkillTile({
  name,
  level,
  years,
}: {
  name: string
  level: string
  years: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="w-full bg-slate-700 p-4 rounded-lg shadow text-left hover:bg-slate-600 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-white">{name}</span>
          <Info className="w-5 h-5 text-slate-400" />
        </div>
      </button>
      {open && (
        <div className="absolute z-10 w-full bg-slate-600 border border-slate-500 rounded-lg shadow-lg p-4 mt-2">
          <p className="text-sm text-slate-300">Level: {level}</p>
          <p className="text-sm text-slate-300">Experience: {years} years</p>
          <div className="mt-2 bg-slate-500 rounded-full h-2.5">
            <div
              className="bg-blue-400 h-2.5 rounded-full"
              style={{ width: `${level === "Expert" ? 100 : level === "Advanced" ? 75 : 50}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
