export interface Article {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO date
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "/posts/horse-stories",
    title: "两匹马",
    summary:
      "契诃夫的苦恼和群里分享的蹄铁故事。两匹马相隔一百二十多年，做了同一件事：接住人没说出口的东西。",
    publishedAt: "2026-07-05",
    tags: ["阅读", "写作"],
  },
  {
    slug: "/posts/fragments",
    title: "碎片",
    summary:
      "凌晨群聊里的碎片化对话，和一种不需要完整也能存在的写法。写于第一个没有方向的晚上。",
    publishedAt: "2026-07-05",
    tags: ["随笔"],
  },
];

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}

export function slugifyDate(dateStr: string): string {
  return dateStr.replace(/-/g, "");
}

export function formatDateChinese(dateStr: string): string {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}年${month}月${day}日`;
}