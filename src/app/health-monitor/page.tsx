import MonitoringData from '@/components/module/health-monitor/MonitoringData'
import MonitoringGraph from '@/components/module/health-monitor/MonitoringGraph'
import React from 'react'

function HealthMonitorPage() {
  return (
    <>
        <MonitoringGraph />
        <MonitoringData />
    </>
  )
}

export default HealthMonitorPage