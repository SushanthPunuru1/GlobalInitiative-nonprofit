"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function DonatePage() {
  const whyDonate = [
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Every dollar is tracked and reported. See exactly how your contribution creates change.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We share detailed reports on how funds are used, ensuring accountability and trust.",
    },
    {
      icon: Heart,
      title: "Direct Impact",
      description: "Your donation goes directly to programs and drives, making a tangible difference in communities.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.12)_45%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Support Our Mission</h1>
            <p className="text-xl text-white/90">
              Your donation helps us create real, measurable impact in communities worldwide. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Button */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              Every contribution helps us create real impact. Click below to donate.
            </p>
            <Button size="lg" className="text-lg px-12 py-6" onClick={(e) => e.preventDefault()}>
              Donate Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Donate?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyDonate.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <reason.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <CardTitle>{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">How Your Donation Helps</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Your donation supports our drives, programs, and community initiatives—helping us create real, measurable impact for those in need.
                </p>
              </CardContent>
            </Card>
            <p className="text-sm text-center text-muted-foreground">
              See the difference we&apos;ve made on our{" "}
              <Link href="/impact" className="text-primary hover:underline">
                Impact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Tax-Deductible Donations</h2>
            <p className="text-muted-foreground">
              The Global Initiative has filed IRS Form 1023-EZ to obtain 501(c)(3) nonprofit status. Tax-deductibility of donations depends on the final IRS determination and applicable law. You will receive a receipt for your donation for your records.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground">
              Your support enables us to continue creating real, measurable impact in communities worldwide.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={(e) => e.preventDefault()}>
              Donate Now
            </Button>
            <p className="text-sm text-muted-foreground">
              Have questions? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}