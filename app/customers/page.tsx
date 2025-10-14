import { ChurnRiskDistribution } from "@/components/churn-risk-distribution"
import { CustomerTable } from "@/components/customer-table"
import { EngagementVsTenure } from "@/components/engagement-vs-tenure"
import { MetricCard } from "@/components/metric-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, TrendingDown, DollarSign, Activity } from "lucide-react"
import Link from "next/link"

async function getCustomerData() {
  const [customersRes, statsRes] = await Promise.all([
    fetch(`http://localhost:3000/api/customers?limit=100`, { cache: "no-store" }),
    fetch(`http://localhost:3000/api/customers/stats`, { cache: "no-store" }),
  ])

  const customersData = await customersRes.json()
  const stats = await statsRes.json()

  return { ...customersData, stats }
}

export default async function CustomersPage() {
  const { customers, total, stats } = await getCustomerData()

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
                <h1 className="text-2xl font-bold text-foreground">Customer Analytics</h1>
                <p className="text-sm text-muted-foreground">Churn prediction and customer insights</p>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Export Report</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Customers"
            value={stats.totalCustomers.toLocaleString()}
            icon={Users}
            description="Active customer base"
          />

          <MetricCard
            title="Churn Rate"
            value={`${stats.churnRate}%`}
            change={`${stats.churnedCustomers.toLocaleString()} churned`}
            changeType="negative"
            icon={TrendingDown}
          />

          <MetricCard
            title="Total Revenue"
            value={`$${(stats.totalRevenue / 1000000).toFixed(2)}M`}
            icon={DollarSign}
            description="Lifetime customer value"
          />

          <MetricCard
            title="Avg Engagement"
            value={stats.avgEngagement.toFixed(1)}
            change={`${stats.avgTenure.toFixed(1)} months avg tenure`}
            changeType="neutral"
            icon={Activity}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChurnRiskDistribution data={stats.riskDistribution} />
          <EngagementVsTenure customers={customers} />
        </div>

        <CustomerTable customers={customers} total={total} />
      </main>
    </div>
  )
}
