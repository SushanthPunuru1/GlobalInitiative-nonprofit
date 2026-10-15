export type DriveCause = "Education" | "Health" | "Environment" | "Relief" | "Community";

export interface ImpactMetric {
  label: string;
  value: string | number;
}

export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
}

export interface Drive {
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

export const drives: Drive[] = [
  {
    id: "2",
    slug: "book-drive-2026",
    title: "Book Drive 2026",
    year: 2026,
    cause: "Education",
    location: "Local Community",
    startDate: "2025-12-08",
    endDate: "2026-08-02",
    summary: "Collected 64 books worth $736 and donated them to Families Embracing Love & Grace, which distributes books to partner organizations across the United States and around the world.",
    problem: "Access to books is one of the strongest predictors of literacy and long-term academic success, yet many children grow up in homes with few or no books of their own. Families already stretched thin by financial pressure rarely have room in the budget for reading material, and the organizations that serve them are often short on the resources needed to close that gap.",
    actionsTaken: [
      "Organized a community-wide book drive collecting new and gently used books",
      "Team members gathered donations from students, families, and local community members",
      "Sorted and organized books by reading level and age group for easier distribution",
      "Partnered with Families Embracing Love & Grace, the same organization supported by our 2025 clothing drive",
      "Delivered all collected books to the organization, which distributes them to partner nonprofits across the U.S. and internationally"
    ],
    impactMetrics: [
      { label: "Books Collected", value: 64 },
      { label: "Value of Donations", value: "$736" },
      { label: "Distribution Reach", value: "U.S. & Global" }
    ],
    volunteersCount: 0,
    fundsRaised: 736,
    photos: []
  },
  {
    id: "1",
    slug: "clothing-donation-2025",
    title: "Clothing Donation Drive 2025",
    year: 2025,
    cause: "Community",
    location: "Local Community",
    startDate: "2025-07-07",
    endDate: "2025-12-28",
    summary: "Collected and organized clothing donations valued at $1,775, which were donated to Families Embracing Love & Grace, a nonprofit supporting families impacted by unexpected pregnancy.",
    problem: "Families facing unexpected pregnancies often struggle with financial challenges and lack access to essential resources like clothing for their children. Many families need support during this critical time, and having access to quality clothing can alleviate some of the financial burden and stress.",
    actionsTaken: [
      "Organized a community-wide clothing donation drive collecting new and gently used items",
      "Team members collected clothing donations from community members who were able to donate",
      "Carefully organized clothing by sizes and seasons for easy distribution",
      "Partnered with Families Embracing Love & Grace to ensure donations reached families in need",
      "Delivered all collected clothing items to the nonprofit organization"
    ],
    impactMetrics: [
      { label: "Value of Donations", value: "$1,775" },
      { label: "Clothing Items", value: "500+" },
      { label: "Bags of Clothing", value: "15+ bags" },
      { label: "Families Supported", value: "Multiple families" }
    ],
    volunteersCount: 0,
    fundsRaised: 1775,
    photos: [
      "/photos/clothing-donation-1.png",
      "/photos/clothing-donation-2.png",
      "/photos/clothing-donation-3.png"
    ],
    testimonials: [
      {
        name: "Families Embracing Love & Grace",
        role: "Partner Nonprofit",
        quote: "The clothing donations from The Global Initiative have been invaluable in supporting families during unexpected pregnancies. These resources help reduce financial stress and allow families to focus on what matters most."
      }
    ]
  }
];

// Helper functions
export function getAllDrives(): Drive[] {
  return drives;
}

export function getDriveBySlug(slug: string): Drive | undefined {
  return drives.find(drive => drive.slug === slug);
}

export function getDrivesByYear(year: number): Drive[] {
  return drives.filter(drive => drive.year === year);
}

export function getDrivesByCause(cause: DriveCause): Drive[] {
  return drives.filter(drive => drive.cause === cause);
}

export function getImpactSummary() {
  const totalDrives = drives.length;
  const totalFunds = drives.reduce((sum, drive) => sum + (drive.fundsRaised || 0), 0);

  return {
    totalDrives,
    totalFunds
  };
}

// Current/active drive - in progress
export interface CurrentDrive {
  title: string;
  cause: DriveCause;
  currentCount: number;
  goal: number;
  unit: string;
  description?: string;
}

// No drive is currently in progress. Set this to a CurrentDrive object to show
// the progress banner on the home page again.
export const currentDrive: CurrentDrive | null = null;