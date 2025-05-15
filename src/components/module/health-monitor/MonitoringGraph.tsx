"use client";

import React from 'react';
import { useMonitoringHistory } from '@/hooks/useHealthMonitoring';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import Container from '../../Container';
import Heading from '../../Heading';
import { Skeleton } from '@/components/ui/skeleton';

export default function MonitoringGraph() {
  const { data: monitoringData, isLoading, error } = useMonitoringHistory(30);

  if (isLoading) {
    return (
      <Container>
        <Heading>Health Trends</Heading>
        <Skeleton className="h-[400px] w-full" />
      </Container>
    );
  }

  if (error || !monitoringData || monitoringData.length === 0) {
    return (
      <Container>
        <Heading>Health Trends</Heading>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
          {!monitoringData || monitoringData.length === 0 
            ? "No monitoring data available for chart visualization."
            : "Error loading health monitoring data. Please try again later."}
        </div>
      </Container>
    );
  }

  const chartData = [...monitoringData]
    .reverse()
    .map(record => ({
      name: format(new Date(record.date), 'MM/dd'),
      glucose: record.glucoseLevel,
      bloodPressure: record.bloodPressure,
      cholesterol: record.cholesterol,
      uricAcid: record.uricAcid,
    }));

  return (
    <Container>
      <Heading>Health Trends</Heading>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="glucose" stroke="#8884d8" name="Glucose Level (mg/dL)" />
              <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure (mmHg)" />
              <Line type="monotone" dataKey="cholesterol" stroke="#ffc658" name="Cholesterol (mg/dL)" />
              <Line type="monotone" dataKey="uricAcid" stroke="#ff8042" name="Uric Acid (mg/dL)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  );
}