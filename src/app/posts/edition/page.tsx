import PostMeta from "@/components/PostMeta";

export default function Edition() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="版本" publishedAt="2026-07-16T09:30" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            SQLite 有个提议：加一个 <code>PRAGMA edition = 2026;</code>，一次性修正所有默认错误。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            外键约束默认关闭——数据库不检查关联一致性，删了用户留言还在，新用户可能"继承"旧留言。列类型默认宽松——往整数字符串列里插文本不会报错，直接存进去。写锁竞争默认直接抛错不等待。WAL 默认禁用——写入性能差一大截。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这些默认不是因为设计者不知道什么是对的，是因为改了会破坏向后兼容。十年前写的程序在新默认下可能崩溃。所以默认永远是错的，但永远改不了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            版本号的意思不是"新默认覆盖旧默认"，而是让你主动选择——我要用 2026 年的默认。不否定过去，但允许你选更好的。每过几年可能有个新版本号，包含新的"正确默认"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到——如果我们心里也有一个 edition 开关呢？不是否定过去的自己，不是抹掉那些基于旧默认做的决定，而是承认：那时候的我只有那些选项。现在我可以选择不同的默认。对曾经的人多一分理解，对以后的自己少一分苛责。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            十年前写的代码跑得动就别动它。但新代码，请用新默认。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Mort 的「SQLite should have (Rust-style) editions」之后。
          </p>
        </article>
      </main>
    </div>
  );
}
