import { MLPipelineStage } from "@/components/ml-pipeline-stage"
import { FeatureEngineeringViz } from "@/components/feature-engineering-viz"
import { HyperparameterTuning } from "@/components/hyperparameter-tuning"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"

export default function PipelinePage() {
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
                <h1 className="text-2xl font-bold text-foreground">ML Pipeline</h1>
                <p className="text-sm text-muted-foreground">Spark MLlib Training Pipeline</p>
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Play className="h-4 w-4 mr-2" />
              Run Pipeline
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <MLPipelineStage
              title="Data Ingestion"
              description="Loading customer records from CRM, transactions, and engagement sources"
              status="completed"
              metrics={[
                { label: "Records Loaded", value: "100,000" },
                { label: "Data Sources", value: "3" },
              ]}
            />

            <MLPipelineStage
              title="Feature Engineering & PCA"
              description="Applying dimensionality reduction and feature scaling"
              status="completed"
              metrics={[
                { label: "Features Created", value: "8" },
                { label: "PCA Components", value: "5" },
                { label: "Variance Retained", value: "95%" },
              ]}
            />

            <MLPipelineStage
              title="Model Training"
              description="Training Logistic Regression and Decision Tree models"
              status="completed"
              metrics={[
                { label: "Models Trained", value: "4" },
                { label: "Training Time", value: "3.2 min" },
              ]}
            />

            <MLPipelineStage
              title="Hyperparameter Tuning"
              description="Optimizing model parameters using Grid Search CV"
              status="completed"
              metrics={[
                { label: "Configurations Tested", value: "48" },
                { label: "Best Accuracy", value: "84.7%" },
              ]}
            />

            <MLPipelineStage
              title="Model Evaluation"
              description="Computing performance metrics and storing in registry"
              status="completed"
              metrics={[
                { label: "Accuracy Improvement", value: "+18%" },
                { label: "F1 Score Improvement", value: "+12%" },
              ]}
            />
          </div>

          <div className="space-y-6">
            <FeatureEngineeringViz />
            <HyperparameterTuning />
          </div>
        </div>
      </main>
    </div>
  )
}
