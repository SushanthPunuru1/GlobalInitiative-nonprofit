import Link from "next/link";
import Image from "next/image";
import { causeInk } from "@/components/ui/badge";
import type { Drive } from "@/data/drives";

interface DriveCardProps {
  drive: Drive;
  index?: number;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/*
  A drive is listed as a full-width entry, not a card in a grid. Two drives in
  a three-column grid looks like a page waiting for content; two drives as
  large entries looks like a record of what was actually done.
*/
export function DriveCard({ drive, index = 0 }: DriveCardProps) {
  const start = formatDate(drive.startDate);
  const end = formatDate(drive.endDate);
  const cover = drive.photos[0];

  return (
    <article className="border-t-2 border-ink pt-8">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-sm border-2 border-ink px-2 py-0.5 text-xs font-semibold tracking-tight ${
                causeInk[drive.cause] ?? "bg-paper text-ink"
              }`}
            >
              {drive.cause}
            </span>
            <span className="tabular text-sm text-muted-foreground">
              {start} – {end}
            </span>
            <span className="text-sm text-muted-foreground">{drive.location}</span>
          </div>

          <h3 className="mt-4 font-display text-headline font-extrabold text-ink">
            <Link
              href={`/impact/${drive.slug}`}
              className="underline decoration-marigold decoration-4 underline-offset-[6px] hover:decoration-navy"
            >
              {drive.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
            {drive.summary}
          </p>

          {/*
            The tally. Figures are the point of this site, so they get the
            display face and a rule above them rather than a box around them.
          */}
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {drive.impactMetrics.map((metric) => (
              <div key={metric.label} className="border-t-2 border-ink pt-2">
                <dt className="text-xs font-medium text-muted-foreground">{metric.label}</dt>
                <dd className="tabular font-display text-2xl font-extrabold text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {cover && (
          <div className={index % 2 === 0 ? "pinned" : "pinned-alt"}>
            <div className="relative h-40 w-full overflow-hidden rounded-sm border-2 border-ink bg-paper-deep shadow-print md:h-44 md:w-64">
              <Image
                src={cover}
                alt={`${drive.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
