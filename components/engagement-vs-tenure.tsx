"use client"

import { Card } from "@/components/ui/card"
import { Scatter, ScatterChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ZAxis } from "recharts"
import type { Customer } from "@/lib/mock-data"

interface EngagementVsTenureProps {
  customers: Customer[]
}

export function EngagementVsTenure({ customers }: EngagementVsTenureProps) {
  const sampleData = customers.slice(0, 200).map((customer) => ({
    tenure: customer.tenure_months,
    engagement: customer.engagement_score,
    churned: customer.churned,
  }))

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">Engagement vs Tenure Analysis</h3>

      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            type="number"
            dataKey="tenure"
            name="Tenure (months)"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: "Tenure (months)", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            type="number"
            dataKey="engagement"
            name="Engagement Score"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: "Engagement Score", angle: -90, position: "insideLeft" }}
          />
          <ZAxis range={[50, 50]} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Scatter name="Active" data={sampleData.filter((d) => d.churned === 0)} fill="hsl(var(--chart-1))" />
          <Scatter name="Churned" data={sampleData.filter((d) => d.churned === 1)} fill="hsl(var(--destructive))" />
        </ScatterChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Active Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Churned Customers</span>
        </div>
      </div>
    </Card>
  )
}
