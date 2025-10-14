"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ModelMetrics } from "@/lib/mock-data"
import { ArrowUp } from "lucide-react"

interface ModelComparisonTableProps {
  models: ModelMetrics[]
}

export function ModelComparisonTable({ models }: ModelComparisonTableProps) {
  const sortedModels = [...models].sort((a, b) => b.accuracy - a.accuracy)

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-semibold text-foreground mb-4">Model Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Algorithm</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Accuracy</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">F1 Score</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">ROC-AUC</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Precision</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Recall</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Training Time</th>
            </tr>
          </thead>
          <tbody>
            {sortedModels.map((model, index) => (
              <tr key={model.model_id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{model.algorithm}</span>
                    {index === 0 && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">Best</Badge>
                    )}
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-sm font-mono text-foreground">{(model.accuracy * 100).toFixed(2)}%</span>
                    {model.accuracy > 0.8 && <ArrowUp className="h-3 w-3 text-primary" />}
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-foreground">{(model.f1_score * 100).toFixed(2)}%</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-foreground">{(model.roc_auc * 100).toFixed(2)}%</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-foreground">{(model.precision * 100).toFixed(2)}%</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-foreground">{(model.recall * 100).toFixed(2)}%</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-muted-foreground">{model.training_time}s</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
