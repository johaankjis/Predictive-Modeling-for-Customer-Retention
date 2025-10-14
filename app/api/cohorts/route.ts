import { NextResponse } from "next/server"
import { getRetentionCohorts } from "@/lib/mock-data"

export async function GET() {
  const cohorts = getRetentionCohorts()

  return NextResponse.json({
    cohorts,
  })
}
