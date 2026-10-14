"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Size of the logo image (width and height) */
  size?: number;
  /** Show "The Global Initiative" text next to the logo */
  showText?: boolean;
  /** Use "light" text on dark backgrounds (hero), "default" on light backgrounds */
  variant?: "default" | "light";
  /** Wrap in a link to home */
  asLink?: boolean;
  /** Layout: horizontal, vertical, or responsive (col on mobile, row on larger) */
  layout?: "horizontal" | "vertical" | "responsive";
  /** Hide text on mobile (useful for navbar) */
  hideTextOnMobile?: boolean;
  /** Override text size: lg, xl, 2xl, 3xl */
  textSize?: "lg" | "xl" | "2xl" | "3xl";
}

export function Logo({
  className,
  size = 48,
  showText = true,
  variant = "default",
  asLink = true,
  layout = "horizontal",
  hideTextOnMobile = false,
  textSize,
}: LogoProps) {
  const layoutClass =
    layout === "vertical"
      ? "flex-col"
      : layout === "responsive"
        ? "flex-col sm:flex-row items-start sm:items-center"
        : "items-center";

  const content = (
    <>
      <Image
        src="/logo.png"
        alt="The Global Initiative"
        width={size}
        height={size}
        className={cn("shrink-0 object-contain", className)}
      />
      {showText && (
        <span
          className={cn(
            "font-display font-extrabold tracking-tight whitespace-nowrap",
            variant === "light" ? "text-paper" : "text-ink",
            textSize === "lg" && "text-lg",
            textSize === "xl" && "text-xl",
            textSize === "2xl" && "text-2xl sm:text-3xl",
            textSize === "3xl" && "text-3xl sm:text-4xl",
            !textSize && (size <= 40 ? "text-base" : size <= 56 ? "text-lg" : "text-xl"),
            hideTextOnMobile && "hidden sm:inline"
          )}
        >
          The Global Initiative
        </span>
      )}
    </>
  );

  const wrapperClass = cn(
    "flex gap-3 group hover:opacity-80 transition-opacity",
    layoutClass
  );

  if (asLink) {
    return (
      <Link href="/" className={cn(wrapperClass, "inline-flex")} aria-label="The Global Initiative - Home">
        {content}
      </Link>
    );
  }

  return <div className={cn(wrapperClass, "inline-flex")}>{content}</div>;
}
