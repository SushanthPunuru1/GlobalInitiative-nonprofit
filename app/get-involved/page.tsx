"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Mail, Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInvolvedPage() {
  const waysToGetInvolved = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers working on drives and initiatives in your area or virtually.",
      details: [
        "Participate in local drives and events",
        "Help with planning and coordination",
        "Contribute your skills and expertise",
        "Make a direct impact in communities",
      ],
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our initiatives financially. Every contribution helps us create real, measurable impact.",
      details: [
        "One-time or recurring donations",
        "Sponsor specific drives or programs",
        "Support general operations",
        "Tax-deductible contributions",
      ],
    },
    {
      icon: Mail,
      title: "Partner",
      description: "Are you an organization, school, or business? Partner with us to amplify our impact.",
      details: [
        "Organizational partnerships",
        "Corporate sponsorships",
        "School collaborations",
        "Community partnerships",
      ],
    },
    {
      icon: Calendar,
      title: "Start a Drive",
      description: "Have an idea for a new initiative? We can help you plan, execute, and measure impact.",
      details: [
        "Submit your drive proposal",
        "Get support with planning",
        "Access our network and resources",
        "Track and report your impact",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Get Involved</h1>
            <p className="text-xl text-white/90">
              Join us in creating real, measurable impact. Whether you want to volunteer, donate, partner, or start your own initiative—we&apos;d love to have you on board.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {waysToGetInvolved.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <way.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{way.title}</CardTitle>
                    <CardDescription>{way.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {way.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">How to Get Started</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Reach Out</h3>
                      <p className="text-sm text-muted-foreground">
                        Contact us through our contact form or email to let us know how you&apos;d like to get involved.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Learn More</h3>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll connect you with the right team member to discuss opportunities and answer your questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Take Action</h3>
                      <p className="text-sm text-muted-foreground">
                        Once you&apos;re ready, we&apos;ll help you get started with volunteering, donating, partnering, or launching your own initiative.
                      </p>
                    </div>
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
            <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground">
              Join us today and be part of creating real, measurable impact in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}