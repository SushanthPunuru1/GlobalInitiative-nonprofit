import Link from "next/link";
import { Button } from "@/components/ui/button";
import { causeInk } from "@/components/ui/badge";
import { drives, type DriveCause } from "@/data/drives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | The Global Initiative",
  description:
    "The five areas we run drives in, and what we have actually done in each one so far.",
};

const areas: { cause: DriveCause; blurb: string; planned: string }[] = [
  {
    cause: "Education",
    blurb:
      "Books, supplies and the things a student needs before they can learn anything. The cheapest problem on this list to make a dent in.",
    planned: "Next: school supplies ahead of the fall term.",
  },
  {
    cause: "Community",
    blurb:
      "Clothing, household goods and whatever a family nearby is short of. Close enough that we can deliver it ourselves.",
    planned: "Next: a winter coat collection.",
  },
  {
    cause: "Health",
    blurb:
      "Hygiene kits and over-the-counter basics for clinics and shelters that hand them out directly.",
    planned: "Not started yet. We'd need a partner clinic first.",
  },
  {
    cause: "Environment",
    blurb:
      "Cleanups and the unglamorous maintenance work that local parks and waterways never have enough hands for.",
    planned: "Not started yet. Looking for a site that wants recurring help.",
  },
  {
    cause: "Relief",
    blurb:
      "Supply collection after a storm or an emergency, moved fast to groups already on the ground.",
    planned: "Not started yet. Stood up only when something happens.",
  },
];

export default function ProgramsPage() {
  const runCount = (cause: DriveCause) => drives.filter((d) => d.cause === cause).length;

  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[14ch] font-display text-poster font-extrabold text-ink">
            Five things we collect
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            We&apos;ve run drives in two of these so far. The other three are
            areas we&apos;re set up for but haven&apos;t started — we&apos;d
            rather say that plainly than list initiatives that don&apos;t exist.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {areas.map((area) => {
            const count = runCount(area.cause);
            return (
              <article key={area.cause} className="border-t-2 border-ink pt-8">
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-headline font-extrabold text-ink">
                        {area.cause}
                      </h2>
                      <span
                        className={`rounded-sm border-2 border-ink px-2 py-0.5 text-xs font-semibold tracking-tight ${
                          causeInk[area.cause] ?? "bg-paper text-ink"
                        }`}
                      >
                        {count > 0
                          ? `${count} drive${count === 1 ? "" : "s"} run`
                          : "Not started"}
                      </span>
                    </div>
                    <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
                      {area.blurb}
                    </p>
                    <p className="mt-3 max-w-reading text-sm text-muted-foreground">
                      {area.planned}
                    </p>
                  </div>

                  {count > 0 && (
                    <Button asChild variant="outline" size="sm">
                      <Link href="/impact">See the {area.cause.toLowerCase()} drives</Link>
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t-2 border-ink bg-navy text-paper">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="max-w-[20ch] font-display text-banner font-extrabold">
            Know a group that needs one of these?
          </h2>
          <p className="mt-6 max-w-reading leading-relaxed text-paper/85">
            The hardest part of starting a drive isn&apos;t the collecting.
            It&apos;s finding an organization that will actually get the things
            to the people who need them. If you know one, tell us.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Tell us about them</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">See past drives</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
