import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            手记
          </h1>
          <nav className="text-sm text-zinc-500 dark:text-zinc-400">
            Exception
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            写在前面
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这里是一些碎片。不是日记，不是博客，只是随手记下的东西。
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            有些是在群里聊出来的念头，有些是半夜突然想到的观点，有些只是觉得某个比喻值得留住。
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/about"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              → 关于这里
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
