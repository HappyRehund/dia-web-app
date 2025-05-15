//src/hooks/useHealthMonitoring.ts
import { DailyMonitoring } from "@/generated/prisma";
import { useQuery } from "@tanstack/react-query";


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

export function useMonitoringHistory(limit = 7) {
    return useQuery({
        queryKey: ["monitoringHistory", limit],
        queryFn: () => fetchMonitoringHistory(limit)
    })
}

export function useUserProfile() {
    return useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchUserProfile
    })
}