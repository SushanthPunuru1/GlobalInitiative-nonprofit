"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">About The Global Initiative</h1>
            <p className="text-xl text-white/90">
              We are a student-led nonprofit organization dedicated to creating real, measurable impact in communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To create real, measurable impact by addressing specific problems in communities worldwide. We believe that change happens one problem at a time, and by focusing on tangible, quantifiable outcomes, we can transform lives and inspire others to do the same.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every community has the resources and support needed to thrive. We envision a network of students and volunteers who work together to address pressing challenges with transparency, accountability, and measurable results.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Impact-Driven",
                    description: "Every initiative we undertake is designed to create measurable, tangible results. We track our outcomes and share them transparently.",
                  },
                  {
                    icon: Heart,
                    title: "Compassion",
                    description: "We approach every problem with empathy and understanding, recognizing that behind every statistic is a real person with real needs.",
                  },
                  {
                    icon: Users,
                    title: "Collaboration",
                    description: "We believe in the power of working together—with communities, volunteers, partners, and supporters—to achieve common goals.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <value.icon className="h-8 w-8 text-primary mb-4" />
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At The Global Initiative, we take a data-driven, problem-solving approach to creating impact:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">1.</span>
                      <span><strong>Identify specific problems</strong> with clear, measurable challenges in communities around the world.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">2.</span>
                      <span><strong>Develop targeted solutions</strong> through research, community engagement, and partnership with local organizations.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">3.</span>
                      <span><strong>Execute with transparency</strong>, sharing our process, challenges, and learnings along the way.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold">4.</span>
                      <span><strong>Measure and report</strong> our outcomes, ensuring accountability and providing a clear picture of our impact.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Join Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you&apos;re a student looking to make a difference, a volunteer wanting to contribute, or a supporter who believes in our mission, we&apos;d love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/impact">See Our Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}