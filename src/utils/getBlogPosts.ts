import { getCollection } from 'astro:content';

export async function getBlogPostsAsync() {
  return (await getCollection('blog')).sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}
