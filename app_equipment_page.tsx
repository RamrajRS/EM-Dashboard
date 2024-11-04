'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const equipmentData = [
  { id: 1, name: 'HVAC Unit 1', type: 'HVAC', status: 'Active', consumption: 250 },
  { id: 2, name: 'Kitchen Oven', type: 'Kitchen', status: 'Active', consumption: 180 },
  { id: 3, name: 'Dining Area Lights', type: 'Lighting', status: 'Active', consumption: 50 },
  { id: 4, name: 'Walk-in Freezer', type: 'Refrigeration', status: 'Active', consumption: 300 },
  { id: 5, name: 'Dishwasher', type: 'Kitchen', status: 'Inactive', consumption: 0 },
]

const consumptionData = [
  { name: 'HVAC', value: 250 },
  { name: 'Kitchen', value: 180 },
  { name: 'Lighting', value: 50 },
  { name: 'Refrigeration', value: 300 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState(null)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Equipment Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Equipment List</CardTitle>
          <CardDescription>Overview of all energy-consuming equipment</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Consumption (kWh)</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentData.map((equipment) => (
                <TableRow key={equipment.id}>
                  <TableCell>{equipment.name}</TableCell>
                  <TableCell>{equipment.type}</TableCell>
                  <TableCell>
                    <Badge variant={equipment.status === 'Active' ? 'default' : 'secondary'}>
                      {equipment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{equipment.consumption}</TableCell>
                  <TableCell>
                    <Button variant="outline" onClick={() => setSelectedEquipment(equipment)}>
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Energy Consumption by Equipment Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={consumptionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {consumptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipment Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedEquipment ? (
              <div className="space-y-2">
                <p><strong>Name:</strong> {selectedEquipment.name}</p>
                <p><strong>Type:</strong> {selectedEquipment.type}</p>
                <p><strong>Status:</strong> {selectedEquipment.status}</p>
                <p><strong>Consumption:</strong> {selectedEquipment.consumption} kWh</p>
                <Button className="mt-4">Schedule Maintenance</Button>
              </div>
            ) : (
              <p>Select an equipment to view details</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}