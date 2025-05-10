export function DateToUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );
}

// Helper function to format dates
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Helper functions to determine health status based on values
export function getGlucoseStatus(value: number): {status: string, color: string} {
  if (value < 70) return { status: "Low", color: "text-yellow-500" };
  if (value <= 99) return { status: "Normal", color: "text-green-500" };
  if (value <= 125) return { status: "Pre-diabetic", color: "text-orange-500" };
  return { status: "High", color: "text-red-500" };
}

export function getBloodPressureStatus(value: number): {status: string, color: string} {
  if (value < 90) return { status: "Low", color: "text-yellow-500" };
  if (value <= 120) return { status: "Normal", color: "text-green-500" };
  if (value <= 140) return { status: "Elevated", color: "text-orange-500" };
  return { status: "High", color: "text-red-500" };
}

export function getCholesterolStatus(value: number): {status: string, color: string} {
  if (value < 200) return { status: "Normal", color: "text-green-500" };
  if (value <= 239) return { status: "Borderline", color: "text-orange-500" };
  return { status: "High", color: "text-red-500" };
}

export function getUricAcidStatus(value: number): {status: string, color: string} {
  if (value < 6) return { status: "Normal", color: "text-green-500" };
  if (value <= 7) return { status: "Borderline", color: "text-orange-500" };
  return { status: "High", color: "text-red-500" };
}