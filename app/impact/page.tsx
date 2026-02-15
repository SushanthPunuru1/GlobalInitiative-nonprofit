"use client";

import { useState, useMemo } from "react";
import { drives, getImpactSummary, type Drive, type DriveCause } from "@/data/drives";
import { DriveCard } from "@/components/impact/drive-card";
import { FilterBar } from "@/components/impact/filter-bar";
import { ImpactMetric } from "@/components/impact/impact-metric";
import { DollarSign, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function ImpactPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCause, setSelectedCause] = useState<DriveCause | null>(null);

  const summary = getImpactSummary();

  // Get unique years and causes for filters
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(drives.map((drive) => drive.year)));
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const causes = useMemo(() => {
    const uniqueCauses = Array.from(new Set(drives.map((drive) => drive.cause))) as DriveCause[];
    return uniqueCauses.sort();
  }, []);

  // Filter drives
  const filteredDrives = useMemo(() => {
    return drives.filter((drive) => {
      if (selectedYear !== null && drive.year !== selectedYear) return false;
      if (selectedCause !== null && drive.cause !== selectedCause) return false;
      return true;
    });
  }, [selectedYear, selectedCause]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Real Action. Real Impact.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/90"
            >
              Each drive addresses a specific problem with measurable results. Explore our past initiatives and see the difference we&apos;ve made together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Lifetime Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ImpactMetric
              label="Total Drives"
              value={summary.totalDrives}
              icon={<Target className="h-8 w-8" />}
            />
            <ImpactMetric
              label="In Supplies & Resources"
              value={`$${summary.totalFunds.toLocaleString()}`}
              icon={<DollarSign className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Past Drives Timeline */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Past Drives</h2>
              <p className="text-muted-foreground">
                Browse our completed initiatives and learn about the problems we&apos;ve addressed and the impact we&apos;ve created.
              </p>
            </div>

            <FilterBar
              years={years}
              causes={causes}
              selectedYear={selectedYear}
              selectedCause={selectedCause}
              onYearChange={setSelectedYear}
              onCauseChange={setSelectedCause}
            />

            {filteredDrives.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No drives match the selected filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrives.map((drive, index) => (
                  <DriveCard key={drive.id} drive={drive} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}