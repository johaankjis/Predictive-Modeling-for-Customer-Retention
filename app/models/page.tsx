import { ModelPerformanceChart } from "@/components/model-performance-chart"
import { ModelComparisonTable } from "@/components/model-comparison-table"
import { MetricCard } from "@/components/metric-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Target, Zap, Clock } from "lucide-react"
import Link from "next/link"

async function getModelData() {
  const response = await fetch(`http://localhost:3000/api/models`, { cache: "no-store" })
  const data = await response.json()
  return data
}

export default async function ModelsPage() {
  const { models, history } = await getModelData()

  const bestModel = models.reduce((best: any, current: any) => (current.accuracy > best.accuracy ? current : best))

  const avgAccuracy = models.reduce((sum: number, m: any) => sum + m.accuracy, 0) / models.length
  const avgF1 = models.reduce((sum: number, m: any) => sum + m.f1_score, 0) / models.length
  const avgTrainingTime = models.reduce((sum: number, m: any) => sum + m.training_time, 0) / models.length

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
                <h1 className="text-2xl font-bold text-foreground">Model Registry</h1>
                <p className="text-sm text-muted-foreground">Performance metrics and model comparison</p>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Deploy Best Model</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Best Model Accuracy"
            value={`${(bestModel.accuracy * 100).toFixed(2)}%`}
            change="+18% vs baseline"
            changeType="positive"
            icon={Target}
            description={bestModel.algorithm}
          />

          <MetricCard
            title="Average F1 Score"
            value={`${(avgF1 * 100).toFixed(2)}%`}
            change="+12% improvement"
            changeType="positive"
            icon={TrendingUp}
          />

          <MetricCard
            title="Avg Training Time"
            value={`${Math.round(avgTrainingTime)}s`}
            change="-40% reduction"
            changeType="positive"
            icon={Clock}
            description="Using Spark MLlib"
          />

          <MetricCard
            title="Models Trained"
            value={models.length.toString()}
            icon={Zap}
            description="Across 4 algorithms"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ModelPerformanceChart data={history} metric="accuracy" />
          <ModelPerformanceChart data={history} metric="f1_score" />
        </div>

        <div className="mb-8">
          <ModelPerformanceChart data={history} metric="roc_auc" />
        </div>

        <ModelComparisonTable models={models} />
      </main>
    </div>
  )
}
