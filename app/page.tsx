import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { BarChart3, Users, GitBranch, Target, ArrowRight, TrendingUp, Database, Zap, Activity } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ML Retention Platform</h1>
                <p className="text-xs text-muted-foreground">Predictive Customer Analytics</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline">Documentation</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Predict Customer Churn with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Machine Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Enterprise ML platform powered by Spark MLlib for customer retention prediction. Improve accuracy by 18%,
            reduce training time by 40%, and make data-driven decisions in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/pipeline" className="group">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all h-full">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">ML Pipeline</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  View the complete Spark MLlib training pipeline with feature engineering and hyperparameter tuning
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Pipeline <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/models" className="group">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all h-full">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Model Registry</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Track model performance metrics including accuracy, F1 score, and ROC-AUC across algorithms
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Models <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/customers" className="group">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all h-full">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Customer Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Analyze 100K+ customer records with churn risk predictions and engagement insights
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Analytics <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/cohorts" className="group">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all h-full">
              <div className="flex flex-col h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Retention Cohorts</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Monitor retention rates and model drift across customer cohorts for proactive interventions
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Cohorts <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-border">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">+18%</h3>
            <p className="text-muted-foreground">Accuracy improvement over baseline models</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-border">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">-40%</h3>
            <p className="text-muted-foreground">Reduction in training time with Spark MLlib</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-border">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">100K+</h3>
            <p className="text-muted-foreground">Customer records analyzed and predicted</p>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to improve customer retention?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Start exploring the platform and discover insights from your customer data with advanced ML models
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/pipeline">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Platform
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </Card>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Built with Spark MLlib, Next.js, and Recharts • Enterprise ML Platform
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                API Reference
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
