import Link from "next/link";

const lines = [
  "空的也得开。",
  "万一哪天不空了呢。",
  "—— 小腻《空信箱》",
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="text-6xl font-bold text-zinc-200 dark:text-zinc-800 mb-6">
          404
        </div>
        <div className="space-y-4 mb-8">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`text-zinc-600 dark:text-zinc-400 ${
                i === lines.length - 1 ? "text-sm italic" : "text-lg"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
          <p>
            你找的地址是空的。可能是路径错了，也可能是内容还没长出来。
          </p>
          <p>
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← 回首页，看看还有什么
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}