import { NextResponse } from "next/server"
import { getCustomers } from "@/lib/mock-data"

export async function GET() {
  const customers = getCustomers()

  const totalCustomers = customers.length
  const churnedCustomers = customers.filter((c) => c.churned === 1).length
  const churnRate = (churnedCustomers / totalCustomers) * 100

  const riskDistribution = {
    low: customers.filter((c) => c.churn_risk === "low").length,
    medium: customers.filter((c) => c.churn_risk === "medium").length,
    high: customers.filter((c) => c.churn_risk === "high").length,
  }

  const avgEngagement = customers.reduce((sum, c) => sum + c.engagement_score, 0) / totalCustomers
  const avgTenure = customers.reduce((sum, c) => sum + c.tenure_months, 0) / totalCustomers
  const totalRevenue = customers.reduce((sum, c) => sum + c.total_spent, 0)

  return NextResponse.json({
    totalCustomers,
    churnedCustomers,
    churnRate: Math.round(churnRate * 100) / 100,
    riskDistribution,
    avgEngagement: Math.round(avgEngagement * 100) / 100,
    avgTenure: Math.round(avgTenure * 100) / 100,
    totalRevenue: Math.round(totalRevenue * 100) / 100,
  })
}
