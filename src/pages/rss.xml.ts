import { getBlogPostsAsync } from '@/utils/getBlogPosts';
import rss from '@astrojs/rss';

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getBlogPostsAsync();

  return rss({
    title: "Hunter Simpson's Blog",
    description: 'A collection of my ramblings.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      pubDate: post.data.date,
    })),
  });
}
