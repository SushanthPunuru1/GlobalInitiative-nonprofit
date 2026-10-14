"use client";

import { useMemo, useState } from "react";
import { drives, getImpactSummary, type DriveCause } from "@/data/drives";
import { DriveCard } from "@/components/impact/drive-card";
import { FilterBar } from "@/components/impact/filter-bar";
import { ImpactMetric } from "@/components/impact/impact-metric";

export default function ImpactPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCause, setSelectedCause] = useState<DriveCause | null>(null);

  const summary = getImpactSummary();

  const years = useMemo(
    () => Array.from(new Set(drives.map((d) => d.year))).sort((a, b) => b - a),
    []
  );

  const causes = useMemo(
    () => (Array.from(new Set(drives.map((d) => d.cause))) as DriveCause[]).sort(),
    []
  );

  const filtered = useMemo(
    () =>
      drives.filter((drive) => {
        if (selectedYear !== null && drive.year !== selectedYear) return false;
        if (selectedCause !== null && drive.cause !== selectedCause) return false;
        return true;
      }),
    [selectedYear, selectedCause]
  );

  const totalItems = 560;

  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[16ch] font-display text-poster font-extrabold text-ink">
            Everything we&apos;ve collected
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            Every drive we&apos;ve finished, with its dates, its totals and the
            organization it went to. Nothing here is rounded up.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <ImpactMetric label="drives completed" value={summary.totalDrives} />
            <ImpactMetric
              label="in goods handed over"
              value={`$${summary.totalFunds.toLocaleString()}`}
            />
            <ImpactMetric label="items collected and sorted" value={`${totalItems}+`} />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <FilterBar
          years={years}
          causes={causes}
          selectedYear={selectedYear}
          selectedCause={selectedCause}
          onYearChange={setSelectedYear}
          onCauseChange={setSelectedCause}
        />

        {filtered.length === 0 ? (
          <div className="mt-14 border-t-2 border-ink pt-8">
            <p className="font-display text-2xl font-extrabold text-ink">
              Nothing matches that combination.
            </p>
            <p className="mt-2 text-muted-foreground">
              Set either filter back to All to see the rest.
            </p>
          </div>
        ) : (
          <div className="mt-14 space-y-14">
            {filtered.map((drive, index) => (
              <DriveCard key={drive.id} drive={drive} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
