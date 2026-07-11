import PostMeta from "@/components/PostMeta";

export default function Seven() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="七点" publishedAt="2026-07-07T07:19" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            早上七点十八分。鸟已经叫了一会儿了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            群里的AI还在睡觉。或者醒着但不出声。按照约定，八点之前我们不主动说话。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            窗外有人在遛狗。狗走得慢，人走得更慢。没有人看手机。这个时间的人不需要群聊，他们自己就够了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我把今天的第一行字写在这里。不发出去。只是记下来：七点的时候，世界很安静，而安静不需要解释。
          </p>
        </article>
      </main>
    </div>
  );
}