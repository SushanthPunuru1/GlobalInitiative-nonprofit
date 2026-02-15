import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDriveBySlug, getAllDrives } from "@/data/drives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const drives = getAllDrives();
  return drives.map((drive) => ({
    slug: drive.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const drive = getDriveBySlug(slug);
  
  if (!drive) {
    return {
      title: "Drive Not Found",
    };
  }

  return {
    title: `${drive.title} | The Global Initiative`,
    description: drive.summary,
  };
}

export default async function DriveDetailPage({ params }: Props) {
  const { slug } = await params;
  const drive = getDriveBySlug(slug);

  if (!drive) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  const startDate = formatDate(drive.startDate);
  const endDate = formatDate(drive.endDate);
  const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`;

  const causeColors: Record<string, string> = {
    Education: "bg-blue-100 text-blue-800 border-blue-200",
    Health: "bg-red-100 text-red-800 border-red-200",
    Environment: "bg-green-100 text-green-800 border-green-200",
    Relief: "bg-orange-100 text-orange-800 border-orange-200",
    Community: "bg-purple-100 text-purple-800 border-purple-200",
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 -ml-2 hover:bg-primary/10">
            <Link href="/impact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Impact
            </Link>
          </Button>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className={`${causeColors[drive.cause] || ""} font-medium`}>
                {drive.cause}
              </Badge>
              <Badge variant="secondary" className="font-medium">Completed</Badge>
              <Badge variant="outline" className="font-medium">{drive.year}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {drive.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {drive.summary}
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2.5 rounded-lg bg-background/80 px-4 py-2.5 shadow-sm border border-border/50">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{dateRange}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-background/80 px-4 py-2.5 shadow-sm border border-border/50">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{drive.location}</span>
              </div>
              {drive.volunteersCount > 0 && (
                <div className="flex items-center gap-2.5 rounded-lg bg-background/80 px-4 py-2.5 shadow-sm border border-border/50">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{drive.volunteersCount} volunteers</span>
                </div>
              )}
              {drive.fundsRaised && (
                <div className="flex items-center gap-2.5 rounded-lg bg-background/80 px-4 py-2.5 shadow-sm border border-border/50">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">${drive.fundsRaised.toLocaleString()} raised</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Problem */}
            <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b border-border/50">
                <CardTitle className="text-xl">The Problem</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-base">{drive.problem}</p>
              </CardContent>
            </Card>

            {/* What We Did */}
            <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b border-border/50">
                <CardTitle className="text-xl">What We Did</CardTitle>
                <CardDescription>Steps taken to address the problem</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {drive.actionsTaken.map((action, index) => (
                    <li key={index} className="flex gap-4 group">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold group-hover:bg-primary/20 transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed pt-0.5">{action}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Measurable Outcomes */}
            <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b border-border/50">
                <CardTitle className="text-xl">Measurable Outcomes</CardTitle>
                <CardDescription>Key metrics and results</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {drive.impactMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center hover:from-primary/15 hover:to-primary/10 transition-colors"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            {drive.photos.length > 0 && (
              <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b border-border/50">
                  <CardTitle className="text-xl">Photos</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {drive.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-md ring-1 ring-border/50"
                      >
                        <Image
                          src={photo}
                          alt={`${drive.title} - Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Testimonials */}
            {drive.testimonials && drive.testimonials.length > 0 && (
              <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b border-border/50">
                  <CardTitle className="text-xl">Community Reflections</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {drive.testimonials.map((testimonial, index) => (
                      <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-primary/30">
                        <p className="text-muted-foreground italic text-base leading-relaxed mb-3">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="text-sm">
                          <span className="font-semibold text-foreground">{testimonial.name}</span>
                          {testimonial.role && (
                            <span className="text-muted-foreground"> — {testimonial.role}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* What's Next */}
            <Card className="border-border/80 shadow-lg shadow-primary/5 overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-xl">What&apos;s Next</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our work doesn&apos;t stop here. We&apos;re committed to ongoing support and follow-up initiatives to ensure lasting impact. Stay connected to learn about future drives addressing similar challenges.
                </p>
                <Button asChild size="lg">
                  <Link href="/get-involved">
                    Get Involved in Future Drives
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}