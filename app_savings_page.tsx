'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const savingsData = [
  { month: 'Jan', actual: 5000, projected: 6000 },
  { month: 'Feb', actual: 5200, projected: 6100 },
  { month: 'Mar', actual: 5100, projected: 6200 },
  { month: 'Apr', actual: 4800, projected: 6300 },
  { month: 'May', actual: 4600, projected: 6400 },
  { month: 'Jun', actual: 4400, projected: 6500 },
]

export default function SavingsPage() {
  const totalSavings = savingsData.reduce((acc, curr) => acc + (curr.projected - curr.actual), 0)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Energy Savings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Savings This Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-green-600">${totalSavings.toLocaleString()}</div>
          <p className="text-sm text-muted-foreground">Difference between projected and actual energy costs</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Energy Costs</CardTitle>
          <CardDescription>Actual vs Projected</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#8884d8" name="Actual Cost" />
              <Bar dataKey="projected" fill="#82ca9d" name="Projected Cost" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Highest Savings Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June</div>
            <p className="text-xs text-muted-foreground">$2,100 saved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Monthly Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,450</div>
            <p className="text-xs text-muted-foreground">Based on the last 6 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Projected Annual Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,400</div>
            <p className="text-xs text-muted-foreground">If current trend continues</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}