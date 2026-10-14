import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="tabular font-display text-poster font-extrabold leading-none text-marigold">
        404
      </p>
      <h1 className="mt-6 max-w-[18ch] font-display text-banner font-extrabold text-ink">
        There&apos;s nothing at this address.
      </h1>
      <p className="mt-6 max-w-reading leading-relaxed text-muted-foreground">
        The page either moved or never existed. The drives are all still where
        you left them.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/impact">See the drives</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to the start</Link>
        </Button>
      </div>
    </div>
  );
}
