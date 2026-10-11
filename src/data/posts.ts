import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts are visible only in `npm run dev`.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
