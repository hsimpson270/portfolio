export function formatDate(date: Date, showYear: boolean): string {
  return Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: showYear ? 'numeric' : undefined,
  }).format(date);
}
