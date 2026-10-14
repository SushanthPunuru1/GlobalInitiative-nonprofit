"use client";

import type { DriveCause } from "@/data/drives";

interface FilterBarProps {
  years: number[];
  causes: DriveCause[];
  selectedYear: number | null;
  selectedCause: DriveCause | null;
  onYearChange: (year: number | null) => void;
  onCauseChange: (cause: DriveCause | null) => void;
}

/*
  Filters are printed chips that invert when they're on. No separate "active
  filters" summary strip — the chips already show their own state, and the
  strip was restating it.
*/
function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-sm border-2 border-ink px-3 py-1 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color] duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
        active
          ? "bg-ink text-paper"
          : "bg-paper text-ink shadow-print-sm hover:bg-paper-deep"
      }`}
    >
      {children}
    </button>
  );
}

export function FilterBar({
  years,
  causes,
  selectedYear,
  selectedCause,
  onYearChange,
  onCauseChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-muted-foreground">Year</span>
        <Chip active={selectedYear === null} onClick={() => onYearChange(null)}>
          All
        </Chip>
        {years.map((year) => (
          <Chip
            key={year}
            active={selectedYear === year}
            onClick={() => onYearChange(selectedYear === year ? null : year)}
          >
            <span className="tabular">{year}</span>
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-muted-foreground">Cause</span>
        <Chip active={selectedCause === null} onClick={() => onCauseChange(null)}>
          All
        </Chip>
        {causes.map((cause) => (
          <Chip
            key={cause}
            active={selectedCause === cause}
            onClick={() => onCauseChange(selectedCause === cause ? null : cause)}
          >
            {cause}
          </Chip>
        ))}
      </div>
    </div>
  );
}
