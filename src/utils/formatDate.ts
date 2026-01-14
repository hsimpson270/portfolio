export const formatDate = (date: Date, showYear: boolean) => {
  return Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: showYear ? 'numeric' : undefined,
  }).format(date);
};
