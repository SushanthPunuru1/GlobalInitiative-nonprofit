import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDriveBySlug, getAllDrives } from "@/data/drives";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign, ArrowLeft, Share2, CheckCircle2 } from "lucide-react";
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
      <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/impact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Impact
            </Link>
          </Button>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline" className={causeColors[drive.cause] || ""}>
                {drive.cause}
              </Badge>
              <Badge variant="secondary">Completed</Badge>
              <Badge variant="outline">{drive.year}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold">{drive.title}</h1>
            <p className="text-xl text-muted-foreground">{drive.summary}</p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{drive.location}</span>
              </div>
              {drive.volunteersCount > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{drive.volunteersCount} volunteers</span>
                </div>
              )}
              {drive.fundsRaised && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>${drive.fundsRaised.toLocaleString()} raised</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Problem */}
            <Card>
              <CardHeader>
                <CardTitle>The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{drive.problem}</p>
              </CardContent>
            </Card>

            {/* What We Did */}
            <Card>
              <CardHeader>
                <CardTitle>What We Did</CardTitle>
                <CardDescription>Steps taken to address the problem</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {drive.actionsTaken.map((action, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Measurable Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Measurable Outcomes</CardTitle>
                <CardDescription>Key metrics and results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {drive.impactMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg bg-muted/50 text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            {drive.photos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drive.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden bg-muted"
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
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer & Community Reflections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {drive.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <p className="text-muted-foreground italic mb-2">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="text-sm">
                          <span className="font-semibold">{testimonial.name}</span>
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
            <Card>
              <CardHeader>
                <CardTitle>What&apos;s Next</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our work doesn&apos;t stop here. We&apos;re committed to ongoing support and follow-up initiatives to ensure lasting impact. Stay connected to learn about future drives addressing similar challenges.
                </p>
                <Button asChild>
                  <Link href="/get-involved">
                    Get Involved in Future Drives
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Share Section */}
            <Card>
              <CardHeader>
                <CardTitle>Share This Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}