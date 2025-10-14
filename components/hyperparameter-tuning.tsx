"use client"

import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tuningResults = [
  {
    algorithm: "Logistic Regression",
    params: { C: 1.0, penalty: "l2", solver: "lbfgs" },
    score: 0.847,
    best: true,
  },
  {
    algorithm: "Logistic Regression",
    params: { C: 0.1, penalty: "l2", solver: "lbfgs" },
    score: 0.832,
    best: false,
  },
  {
    algorithm: "Decision Tree",
    params: { max_depth: 10, min_samples_split: 20 },
    score: 0.823,
    best: true,
  },
  {
    algorithm: "Decision Tree",
    params: { max_depth: 15, min_samples_split: 10 },
    score: 0.809,
    best: false,
  },
]

export function HyperparameterTuning() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Hyperparameter Tuning Results</h3>
        <Badge className="bg-primary/20 text-primary border-primary/30">Grid Search CV</Badge>
      </div>

      <div className="space-y-3">
        {tuningResults.map((result, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-lg border transition-all",
              result.best ? "bg-primary/10 border-primary/30" : "bg-secondary/30 border-border",
            )}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{result.algorithm}</span>
                {result.best && (
                  <Badge variant="default" className="text-xs bg-primary text-primary-foreground">
                    Best
                  </Badge>
                )}
              </div>
              <span className="text-lg font-bold font-mono text-foreground">{(result.score * 100).toFixed(1)}%</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(result.params).map(([key, value]) => (
                <code key={key} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                  {key}={String(value)}
                </code>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
        <p className="text-xs text-muted-foreground">
          Training time reduced by <span className="font-semibold text-primary">40%</span> using Spark MLlib distributed
          computing
        </p>
      </div>
    </Card>
  )
}
