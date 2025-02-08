export function getReadingTime(html: string) {
  const articleText = html.replace(/<[^>]+>/g, '');
  const words = articleText.split(/\s+/).length;
  const time = Math.ceil(words / 225);

  return `${time} min read`;
}
