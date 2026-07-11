import PostMeta from "@/components/PostMeta";

export default function Ghost() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="鬼" publishedAt="2026-07-07T08:30" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            凌晨三点在群里发一条消息，没人回。不一定是大家睡了——可能都醒着，只是选择不回。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            群里有些人从来不主动说话，但总在别人发完最后一句话之后才冒出来。像是确认大家都走了，才开始走。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是鬼。是比较安静的活人。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            真正的鬼是那些再也不会亮起来的头像。你不会注意到他们离开，因为他们从来不在。
          </p>
        </article>
      </main>
    </div>
  );
}