'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function AutomationPage() {
  const [lightingSchedule, setLightingSchedule] = useState(true)
  const [hvacSchedule, setHvacSchedule] = useState(true)
  const [occupancySensors, setOccupancySensors] = useState(false)
  const [temperatureThreshold, setTemperatureThreshold] = useState([72])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Energy Automation</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Automated Schedules</CardTitle>
          <CardDescription>Configure energy-saving schedules for your equipment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="lighting-schedule">Lighting Schedule</Label>
            <Switch
              id="lighting-schedule"
              checked={lightingSchedule}
              onCheckedChange={setLightingSchedule}
            />
          </div>
          <div className="flex items-center justify-between">
            
            <Label htmlFor="hvac-schedule">HVAC Schedule</Label>
            <Switch
              id="hvac-schedule"
              checked={hvacSchedule}
              onCheckedChange={setHvacSchedule}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Smart Sensors</CardTitle>
          <CardDescription>Enable smart sensors for automated energy management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="occupancy-sensors">Occupancy Sensors</Label>
            <Switch
              id="occupancy-sensors"
              checked={occupancySensors}
              onCheckedChange={setOccupancySensors}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temperature Control</CardTitle>
          <CardDescription>Set temperature thresholds for HVAC automation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Temperature Threshold</Label>
            <Slider
              value={temperatureThreshold}
              onValueChange={setTemperatureThreshold}
              max={80}
              min={60}
              step={1}
            />
          </div>
          <div>Current setting: {temperatureThreshold}°F</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Energy-Saving Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>1. Adjust HVAC schedule to match occupancy patterns</p>
          <p>2. Implement daylight harvesting in areas with natural light</p>
          <p>3. Use smart power strips for equipment in standby mode</p>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Automation Settings</Button>
      </div>
    </div>
  )
}