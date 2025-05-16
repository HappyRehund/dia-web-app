import { getGlucoseStatus, getBloodPressureStatus, getCholesterolStatus, getUricAcidStatus } from "@/lib/helpers/health-monitoring";
import { Button } from "@/components/ui/button";
import CreateDailyMonitoringDialog from "./CreateDailyMonitoringDialog";
import { Calendar1, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Heart, TrendingUp, ActivityIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DailyMonitoring } from "@/generated/prisma";
import { formatDate } from "@/lib/helpers/date2utc";

interface HealthMonitoringProps {
  monitoringData: DailyMonitoring[];
}

export default function HealthMonitoring({ monitoringData }: HealthMonitoringProps) {
  const latestMonitoring = monitoringData.length > 0 ? monitoringData[0] : null;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <CreateDailyMonitoringDialog 
          trigger={
            <Button className="bg-secondary">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Record
            </Button>
          } 
        />
      </div>

      {latestMonitoring ? (
        <>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-1">
              {formatDate(latestMonitoring.date)}
              <span><Calendar1 /></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-secondary">
                <CardHeader className="pb-2 rounded-tr-xl rounded-tl-xl">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Droplet className="mr-2 h-4 w-4" />
                    Glucose Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{latestMonitoring.glucoseLevel} mg/dL</div>
                  <p className={cn("text-sm mt-1", getGlucoseStatus(latestMonitoring.glucoseLevel).color)}>
                    {getGlucoseStatus(latestMonitoring.glucoseLevel).status}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardHeader className="pb-2 rounded-tr-xl rounded-tl-xl">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Blood Pressure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{latestMonitoring.bloodPressure} mmHg</div>
                  <p className={cn("text-sm mt-1", getBloodPressureStatus(latestMonitoring.bloodPressure).color)}>
                    {getBloodPressureStatus(latestMonitoring.bloodPressure).status}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardHeader className="pb-2 rounded-tr-xl rounded-tl-xl">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Cholesterol
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{latestMonitoring.cholesterol} mg/dL</div>
                  <p className={cn("text-sm mt-1", getCholesterolStatus(latestMonitoring.cholesterol).color)}>
                    {getCholesterolStatus(latestMonitoring.cholesterol).status}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardHeader className="pb-2 rounded-tr-xl rounded-tl-xl">
                  <CardTitle className="text-sm font-medium flex items-center">
                    <ActivityIcon className="mr-2 h-4 w-4" />
                    Uric Acid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{latestMonitoring.uricAcid} mg/dL</div>
                  <p className={cn("text-sm mt-1", getUricAcidStatus(latestMonitoring.uricAcid).color)}>
                    {getUricAcidStatus(latestMonitoring.uricAcid).status}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">History</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Glucose Level</th>
                    <th className="p-3 text-left">Blood Pressure</th>
                    <th className="p-3 text-left">Cholesterol</th>
                    <th className="p-3 text-left">Uric Acid</th>
                  </tr>
                </thead>
                <tbody>
                  {monitoringData.map((item) => (
                    <tr key={item.id} className="border-b border-border">
                      <td className="p-3">{formatDate(item.date)}</td>
                      <td className="p-3">
                        <span className={cn("font-medium", getGlucoseStatus(item.glucoseLevel).color)}>
                          {item.glucoseLevel} mg/dL
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={cn("font-medium", getBloodPressureStatus(item.bloodPressure).color)}>
                          {item.bloodPressure} mmHg
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={cn("font-medium", getCholesterolStatus(item.cholesterol).color)}>
                          {item.cholesterol} mg/dL
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={cn("font-medium", getUricAcidStatus(item.uricAcid).color)}>
                          {item.uricAcid} mg/dL
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-2">No monitoring data yet</h3>
          <p className="text-muted-foreground mb-4">Start tracking your health by adding your first monitoring record.</p>
          <CreateDailyMonitoringDialog
            trigger={
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add First Record
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
}