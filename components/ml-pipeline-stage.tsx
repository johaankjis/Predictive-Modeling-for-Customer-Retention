"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface MLPipelineStageProps {
  title: string
  description: string
  status: "pending" | "running" | "completed"
  metrics?: { label: string; value: string }[]
}

export function MLPipelineStage({ title, description, status, metrics }: MLPipelineStageProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {status === "completed" && <CheckCircle2 className="h-6 w-6 text-primary" />}
          {status === "running" && <Loader2 className="h-6 w-6 text-primary animate-spin" />}
          {status === "pending" && <Circle className="h-6 w-6 text-muted-foreground" />}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <Badge
              variant={status === "completed" ? "default" : status === "running" ? "secondary" : "outline"}
              className={cn(
                status === "running" && "bg-primary/20 text-primary border-primary/30",
                status === "completed" && "bg-primary/20 text-primary border-primary/30",
              )}
            >
              {status}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground">{description}</p>

          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  <p className="text-lg font-semibold text-foreground font-mono">{metric.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
