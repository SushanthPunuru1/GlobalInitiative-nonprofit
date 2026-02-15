import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-primary/[0.03]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Logo size={48} variant="default" showText layout="responsive" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Changing the world. One problem at a time. A student-led nonprofit creating real, measurable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
              <li><Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info.the.global.initiative@gmail.com" className="hover:text-primary transition-colors">info.the.global.initiative@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-semibold">IG</span>
                <a href="https://www.instagram.com/theglobal_initiative/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@theglobal_initiative</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 The Global Initiative. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
