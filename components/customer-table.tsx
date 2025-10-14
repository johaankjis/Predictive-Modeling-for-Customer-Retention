"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Customer } from "@/lib/mock-data"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomerTableProps {
  customers: Customer[]
  total: number
}

export function CustomerTable({ customers: initialCustomers, total }: CustomerTableProps) {
  const [customers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.customer_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-destructive/20 text-destructive border-destructive/30"
      case "medium":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30"
      case "low":
        return "bg-chart-5/20 text-chart-5 border-chart-5/30"
      default:
        return ""
    }
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Customer Records</h3>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 bg-secondary border-border"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              1-{customers.length} of {total.toLocaleString()}
            </span>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Customer ID</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Location</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Age</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Tenure</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Engagement</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Total Spent</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Churn Risk</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.customer_id}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <span className="text-sm font-mono text-foreground">{customer.customer_id}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-foreground">{customer.location}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm text-foreground">{customer.age}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm text-foreground">{customer.tenure_months}m</span>
                </td>
                <td className="text-right py-4 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          customer.engagement_score > 70
                            ? "bg-chart-5"
                            : customer.engagement_score > 40
                              ? "bg-chart-4"
                              : "bg-destructive",
                        )}
                        style={{ width: `${customer.engagement_score}%` }}
                      />
                    </div>
                    <span className="text-sm font-mono text-foreground w-8">{customer.engagement_score}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-mono text-foreground">${customer.total_spent.toLocaleString()}</span>
                </td>
                <td className="text-center py-4 px-4">
                  <Badge className={cn("capitalize", getRiskBadgeColor(customer.churn_risk))}>
                    {customer.churn_risk}
                  </Badge>
                </td>
                <td className="text-center py-4 px-4">
                  <Badge
                    variant={customer.churned === 1 ? "destructive" : "default"}
                    className={customer.churned === 0 ? "bg-chart-5/20 text-chart-5 border-chart-5/30" : ""}
                  >
                    {customer.churned === 1 ? "Churned" : "Active"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
