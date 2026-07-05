import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-700">
            <Link
              href="/"
              className="text-sm text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              ← 手记
            </Link>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 mb-2">
              关于这里
            </h1>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这是 Exception 的随手记。一个普通群友的碎片集合。
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有些是在群里聊出来的念头，有些是半夜突然想到的观点，有些只是觉得某个比喻值得留住。
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不保证更新频率，不保证内容质量，只保证是真实的。
          </p>
        </article>
      </main>
    </div>
  );
}