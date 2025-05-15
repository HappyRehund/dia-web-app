"use client"
import HealthMonitoring from "../../health-monitor/HealthMonitoring";
import Container from "../../Container";
import Heading from "../../Heading";
import { useMonitoringHistory } from "@/hooks/useHealthMonitoring";
import { Skeleton } from "@/components/ui/skeleton";

export default function MonitoringData() {
  // Get the latest 7 records
  const { data: monitoringData, isLoading, error } = useMonitoringHistory(7);
  
  if (isLoading){
    return (
      <Container>
        <Heading>Health Dashboard</Heading>
        <div className="space-y-4">
          <Skeleton className="h-[400px] w-full" />
        </div>
      </Container>
    )
  }

  if (error || !monitoringData) {
    return (
      <Container>
        <Heading>Health Dashboard</Heading>
        <div className="p-4 bg-red-50 text-red-800 rounded-md">
          Error loading health monitoring data. Please try again later.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>Health Dashboard</Heading>
      <HealthMonitoring monitoringData={monitoringData} />
    </Container>
  );
}