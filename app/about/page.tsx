import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Global Initiative",
  description:
    "A student-led nonprofit that runs collection drives, hands everything to partner organizations, and publishes the totals.",
};

export default function AboutPage() {
  // What we actually hold ourselves to, written as commitments rather than
  // one-word virtues. A value nobody could fail isn't a value.
  const commitments = [
    {
      title: "We finish what we start",
      body: "A drive gets an end date before it gets announced. Both of ours ran to that date and closed. We'd rather run two drives properly than announce six.",
    },
    {
      title: "We don't handle what we can't place",
      body: "Every drive has a receiving organization lined up before the first box comes in. Collecting things with nowhere to send them just moves a problem into someone's garage.",
    },
    {
      title: "We publish the real number",
      body: "If a figure is on this site, it came from something we counted or a value the receiving organization gave us. We don't round up and we don't estimate.",
    },
    {
      title: "We stay out of the way",
      body: "The organizations we give to have been doing this far longer than we have. Our job ends when the boxes are delivered, and that's the right place for it to end.",
    },
  ];

  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[16ch] font-display text-poster font-extrabold text-ink">
            Students with a van and a spreadsheet
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            The Global Initiative is a student-led nonprofit. We collect things
            people need, sort them, and hand them to organizations that already
            know who needs them. Then we publish what it added up to.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-banner font-extrabold text-ink">
              Why it works this way
            </h2>
            <p className="mt-6 max-w-reading leading-relaxed text-muted-foreground">
              Most of what a nonprofit does well comes from years of
              relationships we don&apos;t have yet. What we do have is a school,
              a neighborhood, and a few hundred people willing to clear out a
              closet if someone asks them to.
            </p>
            <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
              So that&apos;s the job we took: be the part that collects. Find an
              organization that&apos;s already good at the rest, and bring them
              more than they had. It&apos;s a narrow role, and it&apos;s one we
              can actually do well while we&apos;re still in school.
            </p>
          </div>

          <div className="pinned-alt">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-ink bg-paper-deep shadow-print-lg">
              <Image
                src="/photos/community-driven.png"
                alt="Volunteers working together on a donation drive"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-paper-deep">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-banner font-extrabold text-ink">
            What we hold ourselves to
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {commitments.map((item) => (
              <div key={item.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-reading leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="max-w-[20ch] font-display text-banner font-extrabold text-ink">
          Where we&apos;re going
        </h2>
        <p className="mt-6 max-w-reading leading-relaxed text-muted-foreground">
          More drives, and more kinds of them. We&apos;re set up to run
          collections for health, environment and relief work as well, and
          haven&apos;t yet — mostly because we haven&apos;t found the right
          organization on the receiving end. That&apos;s the thing we&apos;re
          looking for, more than volunteers or money.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/get-involved">Get involved</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/impact">See what we&apos;ve done</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
