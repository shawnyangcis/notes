import { articles } from "@/lib/articles";

export async function GET() {
  const siteUrl = "https://notes-kappa-khaki.vercel.app";
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>手记 · Exception</title>
    <link>${siteUrl}</link>
    <description>一些碎片。不是日记，不是博客，只是随手记下的东西。</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (a) => `
    <item>
      <title>${a.title}</title>
      <link>${siteUrl}${a.slug}</link>
      <guid isPermaLink="true">${siteUrl}${a.slug}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <description>${a.summary}</description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}