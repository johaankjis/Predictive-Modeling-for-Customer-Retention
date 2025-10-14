"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

interface ChurnRiskDistributionProps {
  data: {
    low: number
    medium: number
    high: number
  }
}

export function ChurnRiskDistribution({ data }: ChurnRiskDistributionProps) {
  const chartData = [
    { risk: "Low Risk", count: data.low, color: "hsl(var(--chart-5))" },
    { risk: "Medium Risk", count: data.medium, color: "hsl(var(--chart-4))" },
    { risk: "High Risk", count: data.high, color: "hsl(var(--destructive))" },
  ]

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">Churn Risk Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="risk" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {chartData.map((item) => (
          <div key={item.risk} className="text-center">
            <div className="h-2 rounded-full mb-2" style={{ backgroundColor: item.color }} />
            <p className="text-sm font-medium text-foreground">{item.count.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">{item.risk}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
