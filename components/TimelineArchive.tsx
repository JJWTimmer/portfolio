"use client"

import { useState } from "react"
import TerminalFrame from "./TerminalFrame"
import SectionLabel from "./SectionLabel"

/**
 * hash_bookmark is deliberately OFF: TimelineJS rewrites window.location.hash as you
 * navigate, which hijacks the page's own #about / #skills anchors.
 */
const SRC =
  "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html" +
  "?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw" +
  "&font=Default&lang=en-24hr&start_at_end=true&initial_zoom=2&height=650"

export default function TimelineArchive() {
  const [open, setOpen] = useState(false)

  return (
    <TerminalFrame prompt="~/timeline $ open --archive">
      {open ? (
        <iframe
          src={SRC}
          title="Career timeline for Jasper Timmer"
          className="block w-full h-[650px] border-0 bg-white"
        />
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-6 px-7 pt-8 pb-9">
          <div className="max-w-[620px] flex flex-col gap-2.5">
            <SectionLabel index="04" title="Archive" accent="text-sky-400" />
            <p className="font-mono-geist text-[15px] leading-relaxed text-slate-400 text-pretty -mt-6">
              The long version — every project, role and milestone on an interactive timeline.
              Loads in place, hosted externally on TimelineJS.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="font-mono-geist text-[13px] tracking-wide text-slate-900 bg-sky-400 hover:bg-sky-300 rounded px-[22px] py-3.5 whitespace-nowrap transition-colors"
          >
            ▸ load timeline
          </button>
        </div>
      )}
    </TerminalFrame>
  )
}
