import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get involved | The Global Initiative",
  description:
    "Four ways to help a drive: bring something in, give your time, introduce us to an organization, or fund the next one.",
};

const ways = [
  {
    title: "Bring something in",
    body: "The simplest one. When a drive is open, clear out what you aren't using and get it to us. Clean and usable is the only bar.",
    detail: "Email us and we'll tell you where and when to drop it off.",
    href: "/contact",
    action: "Arrange a drop-off",
  },
  {
    title: "Give a few hours",
    body: "Sorting by size, boxing, loading, delivering. A drive takes one long afternoon at the end, and that afternoon is where it's won or lost.",
    detail: "No experience, no commitment beyond the day you show up for.",
    href: "/contact",
    action: "Get on the list",
  },
  {
    title: "Introduce us to an organization",
    body: "This is the one we need most. If you know a nonprofit, shelter, clinic or school that could use a few hundred of something, tell us what they need.",
    detail: "A name and a contact is enough. We'll take it from there.",
    href: "/contact",
    action: "Send us a name",
  },
  {
    title: "Fund the next one",
    body: "Money covers the parts of a drive nobody donates: boxes, bags, printing, gas to make the delivery.",
    detail: "Small amounts go a long way at this size.",
    href: "/donate",
    action: "Donate",
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[14ch] font-display text-poster font-extrabold text-ink">
            Four ways to help
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            None of them require a commitment longer than a day, and the one we
            need most costs nothing at all.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {ways.map((way) => (
            <article key={way.title} className="border-t-2 border-ink pt-6">
              <h2 className="font-display text-headline font-extrabold text-ink">
                {way.title}
              </h2>
              <p className="mt-4 max-w-reading leading-relaxed text-muted-foreground">
                {way.body}
              </p>
              <p className="mt-3 max-w-reading text-sm text-muted-foreground">
                {way.detail}
              </p>
              <Button asChild variant="outline" size="sm" className="mt-6">
                <Link href={way.href}>{way.action}</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-ink bg-marigold">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="max-w-[20ch] font-display text-banner font-extrabold text-ink">
            Want to run a drive at your own school?
          </h2>
          <p className="mt-6 max-w-reading leading-relaxed text-ink/80">
            We&apos;ll give you everything we use — the collection plan, the
            sorting system, the spreadsheet we track totals in, and an honest
            account of what went wrong both times. Take it and run your own.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Ask us for the playbook</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
