import { getCollection } from 'astro:content';

export const getBlogPostsAsync = async () => {
  return (await getCollection('blog')).sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
};
