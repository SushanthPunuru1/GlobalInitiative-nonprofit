"use client";

import Link from "next/link";
import { currentDrive } from "@/data/drives";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-28 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80"
            alt="Community impact and helping hands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-lg"
            >
              <span className="block">Changing the world.</span>
              <span className="block mt-2 text-white/95">
                One problem at a time.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            >
              We create real, measurable impact in communities worldwide—one targeted initiative at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold shadow-xl text-base px-8 py-6">
                <Link href="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white bg-transparent hover:bg-white/10 font-semibold text-base px-8 py-6">
                <Link href="/impact">View Our Impact</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Target className="h-10 w-10 text-white/90" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold">1</div>
              <div className="text-sm font-medium text-white/90">Completed Drive</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-10 w-10 text-white/90" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold">$1,775</div>
              <div className="text-sm font-medium text-white/90">In Supplies & Resources</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Heart className="h-10 w-10 text-white/90" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold">500+</div>
              <div className="text-sm font-medium text-white/90">Clothing Items Donated</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Drive Progress */}
      {currentDrive && (
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Drive in Progress</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">{currentDrive.title}</h2>
                  </div>
                </div>
                {currentDrive.description && (
                  <p className="text-muted-foreground mb-6">{currentDrive.description}</p>
                )}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{currentDrive.currentCount} {currentDrive.unit} collected</span>
                    <span className="text-muted-foreground">Goal: {currentDrive.goal} {currentDrive.unit}</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, (currentDrive.currentCount / currentDrive.goal) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
                <Button asChild variant="outline" className="mt-6 w-full sm:w-auto">
                  <Link href="/get-involved">Help Us Reach Our Goal</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Impact Showcase */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Real Action. Real Impact.</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              See how we&apos;re creating measurable change in communities worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group shadow-xl"
            >
              <Image
                src="/photos/community-driven.png"
                alt="Community volunteers working together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Community-Driven</h3>
                <p className="text-white/90">Working directly with communities to address their needs</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group shadow-xl"
            >
              <Image
                src="/photos/student-led.png"
                alt="Students and young volunteers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Student-Led</h3>
                <p className="text-white/90">Empowering the next generation to create change</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
                  alt="Community coming together"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe change happens one problem at a time. By addressing specific, measurable challenges in communities around the world, we create real impact that transforms lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every initiative we undertake is designed to deliver measurable, tangible results. We track our outcomes and share them transparently—ensuring accountability and inspiring others to take action.
                </p>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90">
              Join us in creating real, measurable impact. Whether you want to volunteer, donate, or start your own initiative—we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold text-base px-8">
                <Link href="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white bg-transparent hover:bg-white/10 font-semibold">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
