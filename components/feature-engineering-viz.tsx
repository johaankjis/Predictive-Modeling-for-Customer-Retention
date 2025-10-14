"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  { name: "customer_age", type: "numeric", importance: 0.15 },
  { name: "tenure_months", type: "numeric", importance: 0.28 },
  { name: "engagement_score", type: "numeric", importance: 0.35 },
  { name: "transaction_volume", type: "numeric", importance: 0.22 },
  { name: "location_encoded", type: "categorical", importance: 0.08 },
  { name: "total_spent", type: "numeric", importance: 0.18 },
  { name: "days_since_activity", type: "derived", importance: 0.25 },
  { name: "avg_transaction_value", type: "derived", importance: 0.19 },
]

export function FeatureEngineeringViz() {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">Feature Engineering</h3>

      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-foreground">{feature.name}</span>
                <Badge variant="outline" className="text-xs">
                  {feature.type}
                </Badge>
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                {(feature.importance * 100).toFixed(0)}%
              </span>
            </div>

            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                style={{ width: `${feature.importance * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">PCA Applied:</span> Reduced dimensionality from 8 to 5
          principal components, retaining 95% variance
        </p>
      </div>
    </Card>
  )
}
