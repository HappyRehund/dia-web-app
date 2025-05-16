import MonitoringData from '@/components/module/health-monitor/MonitoringData'
import MonitoringGraph from '@/components/module/health-monitor/MonitoringGraph'
import React from 'react'

export const runtime = 'edge'
function HealthMonitorPage() {
  return (
    <>
        <MonitoringGraph />
        <MonitoringData />
    </>
  )
}

export default HealthMonitorPage