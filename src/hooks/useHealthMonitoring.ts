import { DailyMonitoring } from "@/generated/prisma";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const fetchMonitoringHistory = async (limit = 7): Promise<DailyMonitoring[]> => {
    const response = await fetch(`/api/health-monitor/history?limit=${limit}`);
    if(!response.ok) {
        throw new Error("Failed to fetch monitoring history");
    }
    return response.json();
}

export const fetchUserProfile = async () => {
    const response = await fetch("/api/health-monitor/profile");
    if(!response.ok) {
        throw new Error("Failed to fetch user profile");
    }
    return response.json();
}

export const createDailyMonitoring = async (data: {
  date: Date;
  glucoseLevel: number;
  bloodPressure: number;
  cholesterol: number;
  uricAcid: number;
}) => {
  const response = await fetch("/api/health-monitor/daily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to save health monitoring data");
  }

  return response.json();
};

export function useMonitoringHistory(limit = 7) {
    return useQuery({
        queryKey: ["monitoringHistory", limit],
        queryFn: () => fetchMonitoringHistory(limit)
    });
}

export function useUserProfile() {
    return useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchUserProfile
    });
}

export function useCreateDailyMonitoring() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: createDailyMonitoring,
        onSuccess: () => {
            // Invalidate monitoring history query to refetch data
            queryClient.invalidateQueries({ queryKey: ["monitoringHistory"] });
        }
    });
}