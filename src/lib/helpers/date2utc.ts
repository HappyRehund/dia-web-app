//src/lib/helpers/date2utc.ts
// Converts any valid Date or date-string to a UTC Date instance
export function DateToUTCDate(input: Date | string): Date {
  const date = typeof input === 'string' ? new Date(input) : input;
  // Guard against invalid dates
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error(`Invalid date passed to DateToUTCDate: ${input}`);
  }
 
  // Create a UTC date with just year, month, day from LOCAL date components
  // This ensures that the date displayed to the user and the date used in API calls are the same
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  return new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
}

// Formats a Date or date-string as a human-readable 'Month Day, Year' string
export function formatDate(input: Date | string): string {
  const date = typeof input === 'string' ? new Date(input) : input;
  // Handle invalid dates gracefully
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.warn(`Invalid date passed to formatDate: ${input}`);
    return '';
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Get start and end of day in UTC for database queries
export function getDateRange(date: Date | string): { startOfDay: Date, endOfDay: Date } {
  const inputDate = typeof date === 'string' ? new Date(date) : date;
  
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();
  const day = inputDate.getDate();
  
  return {
    startOfDay: new Date(Date.UTC(year, month, day, 0, 0, 0)),
    endOfDay: new Date(Date.UTC(year, month, day, 23, 59, 59, 999))
  };
}