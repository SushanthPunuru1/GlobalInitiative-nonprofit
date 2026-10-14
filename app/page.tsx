import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DriveCard } from "@/components/impact/drive-card";
import { currentDrive, drives, getImpactSummary } from "@/data/drives";

export default function HomePage() {
  const summary = getImpactSummary();
  const recent = drives.slice(0, 2);

  // How a drive actually runs here. It is a real sequence, so it is numbered.
  const steps = [
    {
      title: "Pick one problem",
      body: "Something specific enough to finish and close to home enough to deliver by hand. Not a cause — a problem, with an end.",
    },
    {
      title: "Collect",
      body: "Students, families and neighbors bring what they can spare. We sort it ourselves, by size or by reading level, so nothing arrives as a pile someone else has to deal with.",
    },
    {
      title: "Hand it over",
      body: "Everything goes to an organization already serving the families who need it. They know their people; we don't pretend to.",
    },
    {
      title: "Publish the numbers",
      body: "Every drive gets a page with the dates, the totals and where it all went. If a number is on this site, we can show you how we got it.",
    },
  ];

  return (
    <div>
      {/* Masthead ------------------------------------------------------- */}
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-16 sm:pb-16 sm:pt-24">
          <h1 className="rise max-w-[18ch] font-display text-poster font-extrabold text-ink">
            Changing the world. One problem at a time.
          </h1>

          <p
            className="rise mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            We&apos;re a student-led nonprofit. We run collection drives, hand
            what we gather to the organizations already doing the work, and
            publish exactly what came of it.
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "200ms" }}
          >
            <Button asChild size="lg">
              <Link href="/get-involved">Join a drive</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">See what we&apos;ve collected</Link>
            </Button>
          </div>
        </div>

        {/* The tally, set directly under the masthead on its own band. */}
        <div className="border-t-2 border-ink bg-marigold">
          <div className="container mx-auto grid grid-cols-1 divide-y-2 divide-ink/25 px-4 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0 sm:px-6 lg:px-8">
            <div className="py-6 sm:pr-8">
              <div className="tabular font-display text-5xl font-extrabold leading-none text-ink">
                {summary.totalDrives}
              </div>
              <div className="mt-2 text-sm text-ink/70">
                {summary.totalDrives === 1 ? "drive completed" : "drives completed"}
              </div>
            </div>
            <div className="py-6 sm:px-8">
              <div className="tabular font-display text-5xl font-extrabold leading-none text-ink">
                ${summary.totalFunds.toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-ink/70">in goods handed over</div>
            </div>
            <div className="py-6 sm:pl-8">
              <div className="tabular font-display text-5xl font-extrabold leading-none text-ink">
                560+
              </div>
              <div className="mt-2 text-sm text-ink/70">items collected and sorted</div>
            </div>
          </div>
        </div>
      </section>

      {/* A drive in progress, when there is one ------------------------- */}
      {currentDrive && (
        <section className="border-b-2 border-ink bg-paper-deep">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-headline font-extrabold text-ink">
                {currentDrive.title} is open now
              </h2>
              {currentDrive.description && (
                <p className="mt-3 max-w-reading leading-relaxed text-muted-foreground">
                  {currentDrive.description}
                </p>
              )}
              <div className="mt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="tabular font-display text-3xl font-extrabold text-ink">
                    {currentDrive.currentCount}
                    <span className="text-muted-foreground"> / {currentDrive.goal}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">{currentDrive.unit}</span>
                </div>
                <div className="mt-3 h-4 w-full border-2 border-ink bg-paper">
                  <div
                    className="h-full bg-navy"
                    style={{
                      width: `${Math.min(
                        100,
                        (currentDrive.currentCount / currentDrive.goal) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>
              <Button asChild className="mt-6">
                <Link href="/get-involved">Bring something in</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* The record ----------------------------------------------------- */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-banner font-extrabold text-ink">
          What we&apos;ve collected
        </h2>
        <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
          Two drives so far, both of them finished and accounted for. The full
          write-up of each one is a click away.
        </p>

        <div className="mt-12 space-y-12">
          {recent.map((drive, index) => (
            <DriveCard key={drive.id} drive={drive} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="outline">
            <Link href="/impact">Every drive, in full</Link>
          </Button>
        </div>
      </section>

      {/* How a drive runs ----------------------------------------------- */}
      <section className="border-y-2 border-ink bg-paper-deep">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-banner font-extrabold text-ink">
            How a drive runs
          </h2>

          <ol className="mt-12 grid gap-10 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="tabular shrink-0 font-display text-5xl font-extrabold leading-none text-marigold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-reading leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who runs it ---------------------------------------------------- */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="pinned">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-ink bg-paper-deep shadow-print-lg">
              <Image
                src="/photos/student-led.png"
                alt="Student volunteers sorting donations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-banner font-extrabold text-ink">
              Run by students
            </h2>
            <p className="mt-6 max-w-reading leading-relaxed text-muted-foreground">
              Nobody here is paid and nobody here is a professional. We&apos;re
              students who decided that waiting until we were qualified was a
              bad reason to do nothing.
            </p>
            <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
              That shapes what we take on. We don&apos;t promise to fix
              anything large. We promise to finish what we start, count it
              honestly, and put the receipts on this website.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">More about us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing -------------------------------------------------------- */}
      <section className="border-t-2 border-ink bg-navy text-paper">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="max-w-[14ch] font-display text-banner font-extrabold">
            The next drive needs people.
          </h2>
          <p className="mt-6 max-w-reading leading-relaxed text-paper/85">
            Collecting, sorting, driving boxes across town, telling your
            neighbors it&apos;s happening. All of it counts, and none of it
            takes special skills.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved">Volunteer</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
