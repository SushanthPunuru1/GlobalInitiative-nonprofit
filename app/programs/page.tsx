"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Leaf, Shield, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function ProgramsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Supporting students and schools with resources, tutoring, and educational opportunities to bridge learning gaps and create pathways to success.",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      examples: [
        "Backpack & Books Initiative",
        "Virtual Tutoring Program",
        "Tech Access for Students",
      ],
    },
    {
      icon: Heart,
      title: "Health",
      description: "Improving access to healthcare services, screenings, and health education in underserved communities to promote wellness and prevention.",
      color: "bg-red-100 text-red-800 border-red-200",
      examples: [
        "Community Health Screening Days",
        "Health Education Workshops",
        "Mental Health Support Programs",
      ],
    },
    {
      icon: Leaf,
      title: "Environment",
      description: "Protecting our planet through cleanup initiatives, conservation efforts, and environmental education to create a sustainable future.",
      color: "bg-green-100 text-green-800 border-green-200",
      examples: [
        "Coastal Cleanup Events",
        "Community Garden Projects",
        "Environmental Education Programs",
      ],
    },
    {
      icon: Shield,
      title: "Relief",
      description: "Responding to emergencies and natural disasters with immediate aid, supplies, and support for affected communities.",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      examples: [
        "Hurricane Relief Funds",
        "Winter Warmth Drives",
        "Emergency Supply Distribution",
      ],
    },
    {
      icon: Users,
      title: "Community",
      description: "Building stronger communities through local initiatives, partnerships, and programs that address unique neighborhood needs.",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      examples: [
        "Community Garden Projects",
        "Local Food Security Programs",
        "Neighborhood Improvement Initiatives",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Programs</h1>
            <p className="text-xl text-muted-foreground">
              We address challenges across five key areas, creating targeted, measurable impact in each.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <program.icon className="h-8 w-8 text-primary" />
                      <Badge variant="outline" className={program.color}>
                        {program.title}
                      </Badge>
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Example Initiatives:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">How We Work</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">1. Identify the Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      We work with communities and partners to identify specific, measurable challenges that need addressing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Develop Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Through research, community input, and collaboration with local organizations, we design targeted solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Execute with Transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      We share our process, challenges, and learnings as we work toward our goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. Measure Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Every program includes clear metrics and outcomes that we track and report publicly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Get Involved</h2>
            <p className="text-muted-foreground">
              Interested in supporting one of our programs or starting a new initiative? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/impact">View Past Drives</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}