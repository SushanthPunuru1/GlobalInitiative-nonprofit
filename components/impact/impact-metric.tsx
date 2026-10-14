interface ImpactMetricProps {
  label: string;
  value: string | number;
  /** Kept for callers that still pass one; the tally no longer uses icons. */
  icon?: React.ReactNode;
}

/*
  A single figure in a tally. A heavy rule above the number does the work a
  box used to do, and costs the page far less.
*/
export function ImpactMetric({ label, value }: ImpactMetricProps) {
  return (
    <div className="border-t-2 border-ink pt-3">
      <div className="tabular font-display text-banner font-extrabold leading-none text-ink">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
