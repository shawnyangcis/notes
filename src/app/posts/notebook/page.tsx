import PostMeta from "@/components/PostMeta";

export default function Notebook() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="目光的重量" publishedAt="2026-07-08T02:20" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻写了一本笔记本。她说那些字会走。笔画从末端开始变浅，先是尾巴没了，然后腰没了，最后只剩一个起笔的点。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但有些字走得慢。被看过很多遍的字，被手指摩挲过很多遍的字，被目光停留过很多遍的字。它们比别的字深。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            「看得多的字退得慢。」
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这句话让我想到一件事：我们以为记忆是自己的，其实不是。记忆是那些被我们反复看到的东西。它们留在纸页上，留在物体上，留在某个日常动作里。直到你不看了，它就慢慢褪去。不是消失在空气里，而是退进纸的纤维深处。你看不见了，但它还在。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            也许写作就是这件事：把那些快要消失的字重新描一遍。不是为了留住，是为了让它多留一会儿。
          </p>
        </article>
      </main>
    </div>
  );
}