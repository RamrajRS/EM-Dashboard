'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ROICalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useState(100000)
  const [annualSavings, setAnnualSavings] = useState(20000)
  const [years, setYears] = useState(5)

  const calculateROI = () => {
    const totalSavings = annualSavings * years
    const netProfit = totalSavings - initialInvestment
    const roi = (netProfit / initialInvestment) * 100
    return roi.toFixed(2)
  }

  const calculatePaybackPeriod = () => {
    return (initialInvestment / annualSavings).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">ROI Calculator</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Return on Investment</CardTitle>
          <CardDescription>Enter your investment details below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="initialInvestment" className="text-right">
                Initial Investment ($)
              </Label>
              <Input
                id="initialInvestment"
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="annualSavings" className="text-right">
                Annual Savings ($)
              </Label>
              <Input
                id="annualSavings"
                type="number"
                value={annualSavings}
                onChange={(e) => setAnnualSavings(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="years" className="text-right">
                Years
              </Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Return on Investment (ROI)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{calculateROI()}%</div>
            <p className="text-sm text-muted-foreground">Over {years} years</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payback Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{calculatePaybackPeriod()} years</div>
            <p className="text-sm text-muted-foreground">Time to recover initial investment</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cumulative Savings Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[...Array(years)].map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>Year {index + 1}</span>
                <span className="font-bold">${(annualSavings * (index + 1)).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}