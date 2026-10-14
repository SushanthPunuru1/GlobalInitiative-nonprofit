import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The inks, named as inks so the code reads like the print shop.
        paper: "hsl(var(--paper))",
        "paper-deep": "hsl(var(--paper-deep))",
        ink: "hsl(var(--ink))",
        navy: "hsl(var(--navy))",
        marigold: "hsl(var(--marigold))",
        brick: "hsl(var(--brick))",
        moss: "hsl(var(--moss))",

        // Component token names, kept so the primitives still work.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-text)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // A poster scale: the display sizes jump hard, the text sizes don't.
        poster: ["clamp(3.25rem, 13vw, 8.5rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        banner: ["clamp(2.25rem, 7vw, 4.25rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        headline: ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        print: "5px 5px 0 0 hsl(var(--ink))",
        "print-sm": "3px 3px 0 0 hsl(var(--ink))",
        "print-lg": "8px 8px 0 0 hsl(var(--ink))",
        "print-navy": "5px 5px 0 0 hsl(var(--navy))",
      },
      maxWidth: {
        reading: "62ch",
      },
    },
  },
  plugins: [],
};
export default config;
