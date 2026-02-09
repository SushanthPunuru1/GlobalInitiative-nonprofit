# The Global Initiative Website

A modern, high-converting nonprofit website built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

The Global Initiative is a student-led nonprofit organization with the tagline: **"Changing the world. One problem at a time."**

This website prioritizes trust, transparency, and impact, showcasing real, measurable outcomes from community-driven initiatives.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **lucide-react** icons
- **framer-motion** for animations
- **SEO** via Next.js metadata

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

**Note:** The build may show errors related to framer-motion during static generation. This is a known compatibility issue between Next.js static generation and framer-motion. The site works perfectly in development mode (`npm run dev`) and when deployed with dynamic rendering enabled (default for most hosting platforms like Vercel, Netlify, etc.).

## Deploying the App

### Option 1: Vercel (recommended for Next.js)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and sign in with your Git provider.
3. Click **Add New** → **Project** and import this repository.
4. Vercel will auto-detect Next.js. Keep the defaults and click **Deploy**.
5. Your site will be live at a URL like `https://your-project.vercel.app`. Custom domains can be added in Project Settings.

From the project root:

```bash
npm run build   # optional: verify build locally first
```

No extra config is needed; Vercel runs `npm run build` and `npm start` for you.

### Option 2: Netlify

1. Push your code to a Git repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your repo. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (or leave as default; Netlify’s Next.js runtime will use it)
4. Deploy. For the Next.js runtime, Netlify may ask you to use **Netlify CLI** or the **Next.js runtime**; follow their prompts.

### Option 3: Build and run yourself (VPS, Docker, etc.)

1. On your server, clone the repo and install dependencies:
   ```bash
   git clone <your-repo-url>
   cd GlobalInitiative
   npm ci
   ```
2. Build and start:
   ```bash
   npm run build
   npm start
   ```
3. The app listens on port **3000** by default. Use a process manager (e.g. PM2) and a reverse proxy (e.g. Nginx) for production.

To use a different port:

```bash
PORT=8080 npm start
```

### Environment variables

If you add env vars (e.g. for analytics or API keys), set them in your hosting dashboard (Vercel: Project → Settings → Environment Variables; Netlify: Site → Build & deploy → Environment) or in your server environment. Do not commit secrets to the repo.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── donate/            # Donate page
│   ├── get-involved/      # Get Involved page
│   ├── impact/            # Impact page
│   │   └── [slug]/        # Dynamic drive detail pages
│   ├── programs/          # Programs page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── impact/           # Impact-specific components
│   │   ├── drive-card.tsx
│   │   ├── filter-bar.tsx
│   │   └── impact-metric.tsx
│   ├── ui/               # shadcn/ui components
│   ├── footer.tsx        # Footer component
│   └── navbar.tsx        # Navigation component
├── data/                 # Data files
│   └── drives.ts         # Drives data model
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions (cn helper)
```

## Key Features

### Impact Page (`/impact`)

The Impact page is the core feature of this website, showcasing:

- **Hero Section**: "Real Action. Real Impact." with explanation
- **Impact Summary**: Lifetime metrics (total drives, volunteers, funds raised, people impacted)
- **Past Drives Timeline**: Filterable grid of completed drives
  - Filter by Year
  - Filter by Cause (Education, Health, Environment, Relief, Community)
- **Drive Detail Pages**: Individual pages for each drive with:
  - Drive overview & story
  - The problem addressed
  - Actions taken
  - Measurable outcomes (metrics, numbers)
  - Photo gallery placeholders
  - Volunteer testimonials
  - "What's next" section
  - Share buttons

### Data Model

Drives are stored in `/data/drives.ts` with the following structure:

```typescript
interface Drive {
  id: string;
  slug: string;
  title: string;
  year: number;
  cause: DriveCause;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  problem: string;
  actionsTaken: string[];
  impactMetrics: ImpactMetric[];
  volunteersCount: number;
  fundsRaised?: number;
  photos: string[];
  testimonials?: Testimonial[];
}
```

## Adding New Drives

To add a new drive:

1. Open `/data/drives.ts`
2. Add a new drive object to the `drives` array
3. Follow the existing structure and ensure:
   - `slug` is unique and URL-friendly (e.g., "summer-meals-2024")
   - All required fields are filled
   - Impact metrics are specific and measurable
   - Content is honest, accountable, and avoids vague statements

Example:

```typescript
{
  id: "9",
  slug: "summer-meals-2024",
  title: "Summer Meals Program 2024",
  year: 2024,
  cause: "Community",
  location: "Atlanta, GA",
  startDate: "2024-06-01",
  endDate: "2024-08-31",
  summary: "Provided nutritious meals to children during summer break.",
  problem: "Many children rely on school meals...",
  actionsTaken: [
    "Partnered with local schools...",
    // ...
  ],
  impactMetrics: [
    { label: "Meals Served", value: 1200 },
    { label: "Children Served", value: 180 },
    // ...
  ],
  volunteersCount: 30,
  fundsRaised: 4500,
  photos: ["/photos/summer-meals-1.jpg"],
  testimonials: [
    {
      name: "Jane Doe",
      role: "Volunteer",
      quote: "Making a real difference..."
    }
  ]
}
```

The drive will automatically appear on the Impact page and be accessible at `/impact/summer-meals-2024`.

## Pages

- **Home** (`/`): Hero section, mission overview, stats
- **About** (`/about`): Mission, vision, values, approach
- **Programs** (`/programs`): Overview of program areas (Education, Health, Environment, Relief, Community)
- **Impact** (`/impact`): Past drives timeline and impact summary
- **Get Involved** (`/get-involved`): Ways to volunteer, donate, partner, or start a drive
- **Donate** (`/donate`): Donation options and information
- **Contact** (`/contact`): Contact form and information

## Design Principles

- **Trust**: Transparent, data-backed content
- **Credibility**: Professional yet energetic design
- **Accessibility**: Mobile-first, WCAG compliant
- **Performance**: Fast loading, optimized assets
- **Impact**: Quantified outcomes, no vague statements

## Customization

### Colors

Colors are defined in `app/globals.css` using CSS variables. The primary color is a vibrant blue (`--primary`).

### Components

All UI components follow the shadcn/ui pattern and can be customized via Tailwind classes or component variants.

### Typography

The site uses the Inter font family. You can change this in `app/layout.tsx`.

## SEO

Each page includes appropriate metadata via Next.js metadata API. Dynamic pages (drive detail pages) use `generateMetadata` for dynamic SEO.

## License

This project is private and proprietary to The Global Initiative.

## Support

For questions or issues, please contact the development team.