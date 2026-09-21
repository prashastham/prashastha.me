import { getBlogList } from "@/lib/microcms";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const { contents: posts } = await getBlogList({
    orders: "-publishedAt",
    limit: 20,
  });

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.id}`;
      const date = new Date(post.publishedAt ?? post.createdAt).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${date}</pubDate>
      <description>${escapeXml(post.description ?? "")}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Prashastha Mudannayake — Blog</title>
    <link>${siteUrl}</link>
    <description>Notes on AI, engineering, and everything in between.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
