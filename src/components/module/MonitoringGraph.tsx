import React from 'react'
import Container from '../Container'
import OrdersByDayChart from '../health-monitor/OrdersByDayChart'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

function MonitoringGraph() {
  return (
    <Container>
        <Card>
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <OrdersByDayChart />
            </CardContent>
        </Card>
    </Container>
  )
}

export default MonitoringGraph