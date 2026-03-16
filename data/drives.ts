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

export const currentDrive: CurrentDrive | null = {
  title: "Book Drive",
  cause: "Education",
  currentCount: 60,
  goal: 150,
  unit: "books",
  description: "Collecting books to support literacy and learning in our community.",
};