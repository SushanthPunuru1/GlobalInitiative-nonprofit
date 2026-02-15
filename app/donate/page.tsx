"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
export default function DonatePage() {
  const donationOptions = [
    {
      amount: "$25",
      description: "Provides essential supplies for one family",
      impact: "Supports one family",
    },
    {
      amount: "$50",
      description: "Helps fund a tutoring session",
      impact: "Funds tutoring",
    },
    {
      amount: "$100",
      description: "Sponsors a student's school supplies",
      impact: "Sponsors a student",
    },
    {
      amount: "$250",
      description: "Supports a community event or drive",
      impact: "Supports a drive",
    },
  ];

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
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Support Our Mission</h1>
            <p className="text-xl text-white/90">
              Your donation helps us create real, measurable impact in communities worldwide. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Choose Your Amount</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {donationOptions.map((option, index) => (
                <motion.div
                  key={option.amount}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      <Button className="w-full" variant="outline">
                        Donate {option.amount}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom Amount */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Amount</CardTitle>
                <CardDescription>Enter any amount you&apos;d like to donate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <Button>Donate</Button>
                </div>
              </CardContent>
            </Card>
          </div>
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

      {/* Impact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">How Your Donation is Used</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">85% - Direct Programs</p>
                      <p className="text-sm text-muted-foreground">
                        Funds go directly to drives, initiatives, and community programs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">10% - Operations</p>
                      <p className="text-sm text-muted-foreground">
                        Supports essential operations, logistics, and coordination.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">5% - Administration</p>
                      <p className="text-sm text-muted-foreground">
                        Covers necessary administrative and organizational costs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-center text-muted-foreground">
              We are committed to transparency. View our detailed impact reports on our{" "}
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
              The Global Initiative is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation for tax purposes.
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
            <Button size="lg" className="text-lg px-8">
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