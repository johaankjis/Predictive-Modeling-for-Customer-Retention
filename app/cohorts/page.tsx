import { CohortCard } from "@/components/cohort-card"
import { RetentionTrendChart } from "@/components/retention-trend-chart"
import { MetricCard } from "@/components/metric-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, TrendingUp, AlertCircle } from "lucide-react"
import Link from "next/link"

async function getCohortData() {
  const response = await fetch(`http://localhost:3000/api/cohorts`, { cache: "no-store" })
  const data = await response.json()
  return data
}

export default async function CohortsPage() {
  const { cohorts } = await getCohortData()

  const totalCustomers = cohorts.reduce((sum: number, c: any) => sum + c.size, 0)
  const avgRetention = cohorts.reduce((sum: number, c: any) => sum + c.retention_rate, 0) / cohorts.length
  const avgDrift = cohorts.reduce((sum: number, c: any) => sum + c.drift_score, 0) / cohorts.length
  const highDriftCohorts = cohorts.filter((c: any) => c.drift_score > 0.25).length

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Retention Cohorts</h1>
                <p className="text-sm text-muted-foreground">Cohort analysis and model drift tracking</p>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Create New Cohort</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Cohorts"
            value={cohorts.length.toString()}
            icon={Users}
            description={`${totalCustomers.toLocaleString()} total customers`}
          />

          <MetricCard
            title="Avg Retention Rate"
            value={`${(avgRetention * 100).toFixed(1)}%`}
            change="Across all cohorts"
            changeType="positive"
            icon={TrendingUp}
          />

          <MetricCard
            title="Avg Model Drift"
            value={`${(avgDrift * 100).toFixed(1)}%`}
            changeType="neutral"
            icon={AlertCircle}
          />

          <MetricCard
            title="High Drift Cohorts"
            value={highDriftCohorts.toString()}
            change="Requires retraining"
            changeType={highDriftCohorts > 2 ? "negative" : "neutral"}
            icon={AlertCircle}
          />
        </div>

        <div className="mb-8">
          <RetentionTrendChart cohorts={cohorts} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cohorts.map((cohort: any) => (
            <CohortCard key={cohort.cohort_id} cohort={cohort} />
          ))}
        </div>
      </main>
    </div>
  )
}
