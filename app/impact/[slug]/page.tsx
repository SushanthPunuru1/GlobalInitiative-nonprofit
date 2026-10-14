import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDriveBySlug, getAllDrives } from "@/data/drives";
import { Button } from "@/components/ui/button";
import { causeInk } from "@/components/ui/badge";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllDrives().map((drive) => ({ slug: drive.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const drive = getDriveBySlug(slug);

  if (!drive) return { title: "Drive not found" };

  return {
    title: `${drive.title} | The Global Initiative`,
    description: drive.summary,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function DriveDetailPage({ params }: Props) {
  const { slug } = await params;
  const drive = getDriveBySlug(slug);

  if (!drive) notFound();

  return (
    <div>
      {/* Masthead ------------------------------------------------------- */}
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-10 sm:px-6 sm:pb-16 lg:px-8">
          <Link
            href="/impact"
            className="text-sm font-semibold text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold"
          >
            All drives
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-sm border-2 border-ink px-2 py-0.5 text-xs font-semibold tracking-tight ${
                causeInk[drive.cause] ?? "bg-paper text-ink"
              }`}
            >
              {drive.cause}
            </span>
            <span className="rounded-sm border-2 border-ink bg-paper px-2 py-0.5 text-xs font-semibold tracking-tight text-ink">
              Finished
            </span>
          </div>

          <h1 className="mt-5 max-w-[16ch] font-display text-poster font-extrabold text-ink">
            {drive.title}
          </h1>

          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            {drive.summary}
          </p>

          <dl className="tabular mt-10 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Ran</dt>
              <dd className="mt-1 font-semibold text-ink">
                {formatDate(drive.startDate)} – {formatDate(drive.endDate)}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Where</dt>
              <dd className="mt-1 font-semibold text-ink">{drive.location}</dd>
            </div>
            {drive.volunteersCount > 0 && (
              <div>
                <dt className="text-muted-foreground">Volunteers</dt>
                <dd className="mt-1 font-semibold text-ink">{drive.volunteersCount}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* The tally ------------------------------------------------------ */}
      <section className="border-b-2 border-ink bg-marigold">
        <div className="container mx-auto grid grid-cols-1 gap-y-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {drive.impactMetrics.map((metric) => (
            <div key={metric.label}>
              <div className="tabular font-display text-4xl font-extrabold leading-none text-ink sm:text-5xl">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-ink/70">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why ---------------------------------------------------------- */}
        <section className="py-14 sm:py-16">
          <h2 className="font-display text-headline font-extrabold text-ink">
            Why we ran it
          </h2>
          <p className="mt-6 max-w-reading leading-relaxed text-muted-foreground">
            {drive.problem}
          </p>
        </section>

        {/* What we did -------------------------------------------------- */}
        <section className="border-t-2 border-ink py-14 sm:py-16">
          <h2 className="font-display text-headline font-extrabold text-ink">
            What we did
          </h2>
          <ol className="mt-8 max-w-3xl space-y-6">
            {drive.actionsTaken.map((action, index) => (
              <li key={index} className="flex gap-5">
                <span className="tabular shrink-0 font-display text-3xl font-extrabold leading-none text-marigold">
                  {index + 1}
                </span>
                <span className="max-w-reading pt-1 leading-relaxed text-muted-foreground">
                  {action}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Photos ------------------------------------------------------- */}
        {drive.photos.length > 0 && (
          <section className="border-t-2 border-ink py-14 sm:py-16">
            <h2 className="font-display text-headline font-extrabold text-ink">
              From the drive
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {drive.photos.map((photo, index) => (
                <div key={index} className={index % 2 === 0 ? "pinned" : "pinned-alt"}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-ink bg-paper-deep shadow-print">
                    <Image
                      src={photo}
                      alt={`${drive.title}, photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What the partner said ---------------------------------------- */}
        {drive.testimonials && drive.testimonials.length > 0 && (
          <section className="border-t-2 border-ink py-14 sm:py-16">
            {drive.testimonials.map((testimonial, index) => (
              <figure key={index} className="max-w-3xl">
                <blockquote className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  {testimonial.name}
                  {testimonial.role && <span> — {testimonial.role}</span>}
                </figcaption>
              </figure>
            ))}
          </section>
        )}
      </div>

      {/* Closing -------------------------------------------------------- */}
      <section className="border-t-2 border-ink bg-navy text-paper">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="max-w-[18ch] font-display text-banner font-extrabold">
            This one&apos;s finished. The next one isn&apos;t.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved">Help with the next drive</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">Back to all drives</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
