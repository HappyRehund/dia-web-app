import { getMonitoringHistory } from "@/app/health-monitor/_actions/health";
import HealthMonitoring from "../health-monitor/HealthMonitoring";
import Container from "../Container";
import Heading from "../Heading";

export default async function MonitoringData() {
  // Get the latest 7 records
  const monitoringData = await getMonitoringHistory(7);
  
  return (
    <Container>
      <Heading>Health Dashboard</Heading>
      <HealthMonitoring monitoringData={monitoringData} />
    </Container>
  );
}