"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from "recharts"
import type { ModelMetrics } from "@/lib/mock-data"

interface ModelPerformanceChartProps {
  data: ModelMetrics[]
  metric: "accuracy" | "f1_score" | "roc_auc"
}

export function ModelPerformanceChart({ data, metric }: ModelPerformanceChartProps) {
  const algorithms = Array.from(new Set(data.map((d) => d.algorithm)))

  const chartData = data
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .reduce(
      (acc, curr) => {
        const date = new Date(curr.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" })
        const existing = acc.find((item) => item.date === date)

        if (existing) {
          existing[curr.algorithm] = (curr[metric] * 100).toFixed(2)
        } else {
          acc.push({
            date,
            [curr.algorithm]: (curr[metric] * 100).toFixed(2),
          })
        }

        return acc
      },
      [] as Array<Record<string, string>>,
    )

  const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"]

  const metricLabels = {
    accuracy: "Accuracy",
    f1_score: "F1 Score",
    roc_auc: "ROC-AUC",
  }

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">{metricLabels[metric]} Over Time</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
          {algorithms.map((algorithm, index) => (
            <Line
              key={algorithm}
              type="monotone"
              dataKey={algorithm}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ fill: colors[index % colors.length], r: 3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
