'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 49,
    features: [
      'Real-time energy monitoring',
      'Basic automation features',
      'Monthly reports',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'All Basic features',
      'Advanced automation',
      'Equipment-level insights',
      'Weekly reports',
      'Phone support',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'All Pro features',
      'Custom integrations',
      'Dedicated account manager',
      'On-site consultation',
      '24/7 priority support',
    ],
  },
]

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subscription Plans</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">${plan.price}</span> / month
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You are currently on the <strong>Pro</strong> plan.</p>
          <p>Next billing date: July 1, 2023</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Manage Subscription</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>If you have any questions about our subscription plans or need assistance, please don't hesitate to contact our support team.</p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Contact Support</Button>
        </CardFooter>
      </Card>
    </div>
  )
}