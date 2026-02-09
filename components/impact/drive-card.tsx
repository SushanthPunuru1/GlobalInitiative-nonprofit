"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Drive } from "@/data/drives";

interface DriveCardProps {
  drive: Drive;
  index?: number;
}

const causeColors: Record<string, string> = {
  Education: "bg-blue-100 text-blue-800 border-blue-200",
  Health: "bg-red-100 text-red-800 border-red-200",
  Environment: "bg-green-100 text-green-800 border-green-200",
  Relief: "bg-orange-100 text-orange-800 border-orange-200",
  Community: "bg-purple-100 text-purple-800 border-purple-200",
};

export function DriveCard({ drive, index = 0 }: DriveCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const startDate = formatDate(drive.startDate);
  const endDate = formatDate(drive.endDate);
  const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="outline" className={causeColors[drive.cause] || ""}>
              {drive.cause}
            </Badge>
            <Badge variant="secondary">Completed</Badge>
          </div>
          <CardTitle className="text-xl">{drive.title}</CardTitle>
          <CardDescription>{drive.summary}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} />
              <span>{dateRange}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>{drive.location}</span>
            </div>
            {drive.volunteersCount > 0 && (
              <div className="flex items-center gap-1.5">
                <Users size={16} />
                <span>{drive.volunteersCount} volunteers</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Problem Addressed:</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{drive.problem}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t">
            {drive.impactMetrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-semibold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/impact/${drive.slug}`}>View Full Impact</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}