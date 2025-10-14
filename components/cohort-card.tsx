import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { RetentionCohort } from "@/lib/mock-data"
import { Users, TrendingUp, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CohortCardProps {
  cohort: RetentionCohort
}

export function CohortCard({ cohort }: CohortCardProps) {
  const retentionPercentage = (cohort.retention_rate * 100).toFixed(1)
  const driftPercentage = (cohort.drift_score * 100).toFixed(1)

  const getDriftStatus = (score: number) => {
    if (score < 0.15) return { label: "Stable", color: "bg-chart-5/20 text-chart-5 border-chart-5/30" }
    if (score < 0.25) return { label: "Moderate", color: "bg-chart-4/20 text-chart-4 border-chart-4/30" }
    return { label: "High Drift", color: "bg-destructive/20 text-destructive border-destructive/30" }
  }

  const driftStatus = getDriftStatus(cohort.drift_score)

  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{cohort.cohort_name}</h3>
          <p className="text-sm text-muted-foreground">ID: {cohort.cohort_id}</p>
        </div>
        <Badge className={driftStatus.color}>{driftStatus.label}</Badge>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground font-mono">{cohort.size.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Customers</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Retention Rate</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{retentionPercentage}%</span>
          </div>

          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full",
                cohort.retention_rate > 0.8
                  ? "bg-chart-5"
                  : cohort.retention_rate > 0.6
                    ? "bg-chart-4"
                    : "bg-destructive",
              )}
              style={{ width: `${retentionPercentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Model Drift</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{driftPercentage}%</span>
          </div>

          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full",
                cohort.drift_score < 0.15 ? "bg-chart-5" : cohort.drift_score < 0.25 ? "bg-chart-4" : "bg-destructive",
              )}
              style={{ width: `${driftPercentage}%` }}
            />
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date(cohort.timestamp).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Card>
  )
}
