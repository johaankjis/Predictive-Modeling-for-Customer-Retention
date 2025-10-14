"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import type { RetentionCohort } from "@/lib/mock-data"

interface RetentionTrendChartProps {
  cohorts: RetentionCohort[]
}

export function RetentionTrendChart({ cohorts }: RetentionTrendChartProps) {
  const chartData = cohorts
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .map((cohort) => ({
      date: new Date(cohort.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      retention: (cohort.retention_rate * 100).toFixed(1),
      drift: (cohort.drift_score * 100).toFixed(1),
    }))

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">Retention & Drift Trends</h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDrift" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Area
            type="monotone"
            dataKey="retention"
            stroke="hsl(var(--chart-1))"
            fillOpacity={1}
            fill="url(#colorRetention)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="drift"
            stroke="hsl(var(--destructive))"
            fillOpacity={1}
            fill="url(#colorDrift)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Retention Rate (%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Model Drift (%)</span>
        </div>
      </div>
    </Card>
  )
}
