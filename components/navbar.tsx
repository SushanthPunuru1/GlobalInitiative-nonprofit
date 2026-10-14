"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/get-involved", label: "Get involved" },
    { href: "/contact", label: "Contact" },
  ];

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-ink bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo size={40} variant="default" showText hideTextOnMobile textSize="xl" />

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const current = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  /*
                    The active page is marked by a solid marigold bar beneath
                    the word — the same ink used for live figures elsewhere.
                  */
                  className={`relative text-sm font-semibold tracking-tight transition-colors ${
                    current ? "text-ink" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {link.label}
                  {current && (
                    <span className="absolute -bottom-1.5 left-0 h-[3px] w-full bg-marigold" />
                  )}
                </Link>
              );
            })}
            <Button asChild size="sm">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          <button
            className="md:hidden rounded-sm border-2 border-ink bg-paper p-1.5 shadow-print-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t-2 border-ink py-3">
            {navLinks.map((link) => {
              const current = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`flex items-center gap-3 px-1 py-2.5 font-display text-2xl font-extrabold tracking-tight ${
                    current ? "text-ink" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {current && <span className="h-5 w-2 bg-marigold" />}
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button asChild className="w-full">
                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  Donate
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
