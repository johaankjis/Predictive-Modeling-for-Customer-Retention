import { NextResponse } from "next/server"
import { getModelMetrics } from "@/lib/mock-data"

export async function GET() {
  const metrics = getModelMetrics()

  // Get latest metrics for each algorithm
  const latestMetrics = metrics
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .reduce(
      (acc, metric) => {
        if (!acc.find((m) => m.algorithm === metric.algorithm)) {
          acc.push(metric)
        }
        return acc
      },
      [] as typeof metrics,
    )

  return NextResponse.json({
    models: latestMetrics,
    history: metrics,
  })
}
