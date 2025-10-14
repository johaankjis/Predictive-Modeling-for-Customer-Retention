export interface Customer {
  customer_id: string
  age: number
  location: string
  tenure_months: number
  engagement_score: number
  transaction_volume: number
  churned: 0 | 1
  churn_risk: "low" | "medium" | "high"
  last_activity: string
  total_spent: number
}

export interface ModelMetrics {
  model_id: string
  algorithm: string
  accuracy: number
  f1_score: number
  roc_auc: number
  training_time: number
  timestamp: string
  precision: number
  recall: number
}

export interface RetentionCohort {
  cohort_id: string
  customer_ids: string[]
  retention_rate: number
  drift_score: number
  timestamp: string
  cohort_name: string
  size: number
}

const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
]

function generateCustomerId(): string {
  return `CUST-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
}

function getChurnRisk(engagementScore: number, tenureMonths: number): "low" | "medium" | "high" {
  const riskScore = 100 - engagementScore + (60 - Math.min(tenureMonths, 60))
  if (riskScore < 60) return "low"
  if (riskScore < 100) return "medium"
  return "high"
}

export function generateCustomers(count = 100000): Customer[] {
  const customers: Customer[] = []

  for (let i = 0; i < count; i++) {
    const age = Math.floor(Math.random() * 50) + 18
    const tenure_months = Math.floor(Math.random() * 72)
    const engagement_score = Math.floor(Math.random() * 100)
    const transaction_volume = Math.floor(Math.random() * 500) + 10
    const total_spent = transaction_volume * (Math.random() * 200 + 50)

    // Churn logic: lower engagement + shorter tenure = higher churn probability
    const churnProbability = ((100 - engagement_score) / 100) * 0.7 + (1 - tenure_months / 72) * 0.3
    const churned = Math.random() < churnProbability ? 1 : 0

    customers.push({
      customer_id: generateCustomerId(),
      age,
      location: locations[Math.floor(Math.random() * locations.length)],
      tenure_months,
      engagement_score,
      transaction_volume,
      churned: churned as 0 | 1,
      churn_risk: getChurnRisk(engagement_score, tenure_months),
      last_activity: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      total_spent: Math.round(total_spent * 100) / 100,
    })
  }

  return customers
}

export function generateModelMetrics(): ModelMetrics[] {
  const algorithms = ["Logistic Regression", "Decision Tree", "Random Forest", "Gradient Boosting"]
  const metrics: ModelMetrics[] = []

  // Generate historical metrics for the past 30 days
  for (let day = 30; day >= 0; day--) {
    algorithms.forEach((algorithm, index) => {
      const baseAccuracy = 0.75 + index * 0.03
      const baseF1 = 0.68 + index * 0.03
      const baseROC = 0.82 + index * 0.02

      metrics.push({
        model_id: `MODEL-${algorithm.replace(/\s/g, "-").toUpperCase()}-${day}`,
        algorithm,
        accuracy: Math.min(0.95, baseAccuracy + (Math.random() * 0.05 - 0.025)),
        f1_score: Math.min(0.92, baseF1 + (Math.random() * 0.05 - 0.025)),
        roc_auc: Math.min(0.98, baseROC + (Math.random() * 0.04 - 0.02)),
        precision: Math.min(0.95, 0.72 + index * 0.03 + (Math.random() * 0.05 - 0.025)),
        recall: Math.min(0.95, 0.7 + index * 0.03 + (Math.random() * 0.05 - 0.025)),
        training_time: Math.floor(Math.random() * 300) + 60,
        timestamp: new Date(Date.now() - day * 24 * 60 * 60 * 1000).toISOString(),
      })
    })
  }

  return metrics
}

export function generateRetentionCohorts(): RetentionCohort[] {
  const cohorts: RetentionCohort[] = []
  const cohortNames = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "High Value", "At Risk", "New Users", "Power Users"]

  cohortNames.forEach((name, index) => {
    const size = Math.floor(Math.random() * 5000) + 1000
    const customerIds = Array.from({ length: size }, () => generateCustomerId())

    cohorts.push({
      cohort_id: `COHORT-${index + 1}`,
      customer_ids: customerIds,
      retention_rate: Math.random() * 0.4 + 0.6,
      drift_score: Math.random() * 0.3,
      timestamp: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      cohort_name: name,
      size,
    })
  })

  return cohorts
}

// In-memory storage for demo purposes
let customersCache: Customer[] | null = null
let modelMetricsCache: ModelMetrics[] | null = null
let retentionCohortsCache: RetentionCohort[] | null = null

export function getCustomers(): Customer[] {
  if (!customersCache) {
    customersCache = generateCustomers(100000)
  }
  return customersCache
}

export function getModelMetrics(): ModelMetrics[] {
  if (!modelMetricsCache) {
    modelMetricsCache = generateModelMetrics()
  }
  return modelMetricsCache
}

export function getRetentionCohorts(): RetentionCohort[] {
  if (!retentionCohortsCache) {
    retentionCohortsCache = generateRetentionCohorts()
  }
  return retentionCohortsCache
}
