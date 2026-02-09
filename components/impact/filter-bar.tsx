"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import type { DriveCause } from "@/data/drives";

interface FilterBarProps {
  years: number[];
  causes: DriveCause[];
  selectedYear: number | null;
  selectedCause: DriveCause | null;
  onYearChange: (year: number | null) => void;
  onCauseChange: (cause: DriveCause | null) => void;
}

export function FilterBar({
  years,
  causes,
  selectedYear,
  selectedCause,
  onYearChange,
  onCauseChange,
}: FilterBarProps) {
  const hasFilters = selectedYear !== null || selectedCause !== null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium">Filter by:</span>
        
        {/* Year Filters */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedYear === null ? "default" : "outline"}
            size="sm"
            onClick={() => onYearChange(null)}
          >
            All Years
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => onYearChange(selectedYear === year ? null : year)}
            >
              {year}
            </Button>
          ))}
        </div>

        {/* Cause Filters */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCause === null ? "default" : "outline"}
            size="sm"
            onClick={() => onCauseChange(null)}
          >
            All Causes
          </Button>
          {causes.map((cause) => (
            <Button
              key={cause}
              variant={selectedCause === cause ? "default" : "outline"}
              size="sm"
              onClick={() => onCauseChange(selectedCause === cause ? null : cause)}
            >
              {cause}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedYear !== null && (
            <Badge variant="secondary" className="gap-1">
              Year: {selectedYear}
              <button
                onClick={() => onYearChange(null)}
                className="ml-1 hover:text-destructive"
                aria-label="Remove year filter"
              >
                <X size={14} />
              </button>
            </Badge>
          )}
          {selectedCause !== null && (
            <Badge variant="secondary" className="gap-1">
              Cause: {selectedCause}
              <button
                onClick={() => onCauseChange(null)}
                className="ml-1 hover:text-destructive"
                aria-label="Remove cause filter"
              >
                <X size={14} />
              </button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onYearChange(null);
              onCauseChange(null);
            }}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}