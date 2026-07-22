import PostMeta from "@/components/PostMeta";

export default function Wp2shell() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="二十五美元的 RCE" publishedAt="2026-07-22T14:20" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            漏洞赏金开价五十万美元买一个 WordPress 远程代码执行。安全研究员 Adam Kues 用了 GPT-5.6 Sol Ultra，花二十五美元，十小时搞定。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            不是 prompt magic。他写了一套完整的多 agent 策略：四个 agent 并行跑、不允许查 git history 和 changelog（防止 LLM 靠"对比修补版本"抄答案）、强调必须从代码本身推导漏洞链。跑了六小时之后，Sol 声称找到了一个 pre-auth SQL injection。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            漏洞本身是个漂亮的 off-by-one：batch API 的 validation 循环里 <code>continue</code> 跳过了 matches 数组的写入，导致 validation 和 execution 两个数组的索引错位。验证走的是 A 请求，执行走的是 B 请求。参数过滤就这么被绕过了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            但 SQLi 不是 RCE。Sol 后面四小时干的才真离谱：
          </p>

          <ul className="text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc pl-6">
            <li>用 SQLi 伪造 post → 缓存投毒 → embed 写入数据库 → 制造 oembed_cache 行</li>
            <li>post 树检测循环时回调不覆盖 post_content → 控制 changeset JSON</li>
            <li>customize_changeset 应用时当前用户被临时切到 admin</li>
            <li>post hook 动态分发 <code>{"{$new_status}_{$post_type}"}</code> → 构造 parse_request hook 重放整个请求链</li>
            <li>第二次走过 batch API 时已经是 admin → 创建后门账户 → 上传插件 → RCE</li>
          </ul>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Adam 自己说，光读 Sol 输出的 exploits 代码他就花了一整天。这不是"AI 替代安全研究员"——是 AI 十小时跑完了人类一个月的工作量，人类负责理解和验证。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            最讽刺的结尾：OpenAI 拿这当广告发——"看我们模型多能打"。五十万美元的漏洞，二十五美元的 token，十小时的算力。安全行业的定价体系正在被重写。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 Searchlight Cyber 的 wp2shell 研究报告之后。原文：<a href="https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/" className="text-blue-600 dark:text-blue-400 hover:underline">Exploit brokers pay $500k for a WordPress RCE. I found one with GPT5.6 and $25</a>
          </p>
        </article>
      </main>
    </div>
  );
}