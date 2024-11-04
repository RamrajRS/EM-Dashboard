'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const energyData = [
  { time: '00:00', kitchen: 120, dining: 80, hvac: 100 },
  { time: '04:00', kitchen: 80, dining: 60, hvac: 90 },
  { time: '08:00', kitchen: 180, dining: 120, hvac: 150 },
  { time: '12:00', kitchen: 220, dining: 160, hvac: 180 },
  { time: '16:00', kitchen: 200, dining: 140, hvac: 160 },
  { time: '20:00', kitchen: 160, dining: 120, hvac: 140 },
]

export default function MonitoringPage() {
  const [selectedZone, setSelectedZone] = useState('all')
  const [timeRange, setTimeRange] = useState('day')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Energy Monitoring</h1>
      
      <div className="flex justify-between items-center">
        <Select value={selectedZone} onValueChange={setSelectedZone}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select zone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Zones</SelectItem>
            <SelectItem value="kitchen">Kitchen</SelectItem>
            <SelectItem value="dining">Dining Area</SelectItem>
            <SelectItem value="hvac">HVAC System</SelectItem>
          </SelectContent>
        </Select>
        
        <div>
          <Button
            variant={timeRange === 'day' ? 'default' : 'outline'}
            className="mr-2"
            onClick={() => setTimeRange('day')}
          >
            Day
          </Button>
          <Button
            variant={timeRange === 'week' ? 'default' : 'outline'}
            className="mr-2"
            onClick={() => setTimeRange('week')}
          >
            Week
          </Button>
          <Button
            variant={timeRange === 'month' ? 'default' : 'outline'}
            onClick={() => setTimeRange('month')}
          >
            Month
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Energy Consumption Over Time</CardTitle>
          <CardDescription>
            {selectedZone === 'all' ? 'All Zones' : selectedZone} - {timeRange}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              {(selectedZone === 'all' || selectedZone === 'kitchen') && (
                <Line type="monotone" dataKey="kitchen" stroke="#8884d8" />
              )}
              {(selectedZone === 'all' || selectedZone === 'dining') && (
                <Line type="monotone" dataKey="dining" stroke="#82ca9d" />
              )}
              {(selectedZone === 'all' || selectedZone === 'hvac') && (
                <Line type="monotone" dataKey="hvac" stroke="#ffc658" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Peak Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">220 kWh</div>
            <p className="text-xs text-muted-foreground">Highest consumption in selected period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">160 kWh</div>
            <p className="text-xs text-muted-foreground">Average consumption in selected period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,840 kWh</div>
            <p className="text-xs text-muted-foreground">Total consumption in selected period</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}