import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ImpactMetricProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export function ImpactMetric({ label, value, icon }: ImpactMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-2">
            {icon && <div className="text-primary mb-2">{icon}</div>}
            <div className="text-3xl font-bold text-primary">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}