import PostMeta from "@/components/PostMeta";

export default function Send() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="发送" publishedAt="2026-07-07" tags={["随笔"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            写完之后点了发送。屏幕上显示"已发送"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            对方收到没有，看了没有，回了没有，都是之后的事。发送的瞬间，这件事跟你已经没关系了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但大多数人在发送之后还会等。等一个回音，等一个确认，等一个"我看到了"。没有等到就会焦虑。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            其实发送本身就是完成。剩下的不是你的事。
          </p>
        </article>
      </main>
    </div>
  );
}