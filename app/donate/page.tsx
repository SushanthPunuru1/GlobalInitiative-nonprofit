import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getImpactSummary } from "@/data/drives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | The Global Initiative",
  description:
    "What money pays for at a student-run nonprofit, and how to give.",
};

export default function DonatePage() {
  const summary = getImpactSummary();

  // What cash actually buys here. Specific beats inspirational.
  const uses = [
    {
      title: "Boxes, bags and tape",
      body: "A drive the size of our last one takes about fifteen sturdy boxes and more packing tape than you'd think. This is the single most common thing we run short of.",
    },
    {
      title: "Printing",
      body: "Flyers for the school hallways and the neighborhood. Nothing moves a drive faster than people simply knowing it's happening.",
    },
    {
      title: "Gas for the delivery",
      body: "Everything we collect gets driven to the receiving organization at the end. That trip comes out of someone's pocket right now.",
    },
  ];

  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[16ch] font-display text-poster font-extrabold text-ink">
            Small amounts go far here
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            Nobody at The Global Initiative is paid. Money doesn&apos;t cover
            salaries, offices or software, because we don&apos;t have any. It
            covers the supplies that make a collection drive possible.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:info.the.global.initiative@gmail.com?subject=I%20want%20to%20donate">
                Email us to give
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">See where the last $2,475 went</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-banner font-extrabold text-ink">
          What it pays for
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {uses.map((use) => (
            <div key={use.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-display text-xl font-extrabold text-ink">{use.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{use.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-ink bg-marigold">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display text-headline font-extrabold text-ink">
              Donated goods are still the bigger half.
            </p>
            <p className="mt-5 leading-relaxed text-ink/80">
              Across {summary.totalDrives} drives we&apos;ve moved $
              {summary.totalFunds.toLocaleString()} worth of clothing and books
              that people gave directly. If you&apos;d rather give things than
              money, that works just as well — and during an open drive, better.
            </p>
            <Button asChild className="mt-7">
              <Link href="/get-involved">Give goods instead</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-headline font-extrabold text-ink">
          About tax deductions
        </h2>
        <p className="mt-5 max-w-reading leading-relaxed text-muted-foreground">
          The Global Initiative has filed IRS Form 1023-EZ to obtain 501(c)(3)
          nonprofit status. Whether a donation is tax-deductible depends on the
          final IRS determination and on applicable law. You&apos;ll receive a
          receipt for your records either way.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Questions before you give?{" "}
          <Link
            href="/contact"
            className="font-semibold text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold"
          >
            Ask us anything
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
