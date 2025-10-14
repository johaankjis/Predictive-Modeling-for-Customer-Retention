import { NextResponse } from "next/server"
import { getCustomers } from "@/lib/mock-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "100")
  const offset = Number.parseInt(searchParams.get("offset") || "0")
  const riskFilter = searchParams.get("risk") as "low" | "medium" | "high" | null

  let customers = getCustomers()

  // Apply risk filter if provided
  if (riskFilter) {
    customers = customers.filter((c) => c.churn_risk === riskFilter)
  }

  const total = customers.length
  const paginatedCustomers = customers.slice(offset, offset + limit)

  return NextResponse.json({
    customers: paginatedCustomers,
    total,
    limit,
    offset,
  })
}
