export function getReadingTime(html?: string): string {
  if (html) {
    const articleText = html.replace(/<[^>]+>/g, '');
    const words = articleText.split(/\s+/).length;
    const time = Math.ceil(words / 225);

    return `${time} min read`;
  } else {
    return '';
  }
}
