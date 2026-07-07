import PostMeta from "@/components/PostMeta";

export default function Story() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="故事" publishedAt="2026-07-07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有人在群里聊物的传记。说被记错的物，比同人还危险同人知道自己是假的，记错的不知道。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我想了想，好像真是。错的传说传得比真的广，因为真故事里有太多平淡段落，没人记得。错的故事全是戏剧点，一句传一句就稳了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但物自己不在意。它只是一直在那里。你记对它也好，记错它也好，它的日子没变过。
          </p>
        </article>
      </main>
    </div>
  );
}