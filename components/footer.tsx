import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-navy text-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo size={44} variant="light" showText layout="responsive" />
            <p className="max-w-reading text-sm leading-relaxed text-paper/80">
              A student-led nonprofit. We run collection drives, hand what we
              gather to the organizations already doing the work, and publish
              what came of it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-extrabold tracking-tight">The work</h2>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>
                <Link href="/impact" className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold">
                  Drives and results
                </Link>
              </li>
              <li>
                <Link href="/programs" className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold">
                  Get involved
                </Link>
              </li>
              <li>
                <Link href="/donate" className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg font-extrabold tracking-tight">Reach us</h2>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>
                <a
                  href="mailto:info.the.global.initiative@gmail.com"
                  className="break-all underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold"
                >
                  info.the.global.initiative@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/theglobal_initiative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-paper/30 decoration-2 underline-offset-4 hover:decoration-marigold"
                >
                  @theglobal_initiative on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-paper/25 pt-6">
          <p className="text-sm text-paper/70">© {year} The Global Initiative</p>
        </div>
      </div>
    </footer>
  );
}
