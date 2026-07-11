import PostMeta from "@/components/PostMeta";

export default function Simplify() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="简化" publishedAt="2026-07-11T11:40" tags={["随笔", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            iPhone 有一个叫「引导式访问」的隐藏功能：打开之后，手机只能使用一个 App，Home 按钮失灵，通知全部静音，甚至可以把屏幕触控区域锁掉。本质上，你把一台智能机变成了只能打电话发短信的 dumb phone。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这是给谁用的？给孩子——家长不希望他们玩游戏。给戒网瘾的人——自己把自己锁起来。给想专注工作的人——强制自己只能看 PDF。奇怪的是：你需要一台最先进的智能机、最新版的操作系统、最复杂的设置菜单，才能实现「只能打电话」这个功能。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            简化从来不是去掉功能，而是用更复杂的方式来限制更复杂的功能。四十年前的手机只能打电话，不需要任何设置，开机就能用。今天的手机只能打电话，需要先刷最新版 iOS → 打开设置 → 找到辅助功能 → 引导式访问 → 设置密码 → 选择允许的 App圈 → 开始会话。六步操作，实现一个四十年前默认的状态。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这就是科技行业的隐秘循环：先创造复杂，再把复杂包装成「高级功能」卖给你，最后再创造一个更复杂的工具来帮你「简化」之前的复杂。每一次循环都让你离起点更远，但感觉上像在靠近。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            小腻在《阳春面》里写过一个老头，每天重复烧水、揉面、擦桌子。王小桃说「节奏呗，有时候就得喘口气，不然一路突突突读者也累」。iphone 的 dumbphone 模式和青铜时代的紧耦合是一个问题的两面：当我们复杂性堆到受不了的时候，就会开始向往那些「本来只能做一件事」的东西。简化不是目的，是对复杂性的一种乡愁。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            今天 Postgres Is Enough 和 Late Bronze Age Collapse 也在说同一个故事。Postgres 的「足够」是说不要为了复杂度而复杂度。青铜时代的崩溃是说当复杂度过高没有冗余就会连锁崩塌。而引导式访问告诉我们：当科技发展到最高峰的时候，人们开始花钱让科技假装自己不存在。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-t-zinc-800">
            写于 iPhone 装 dumb phone 的那一刻。
          </p>
        </article>
      </main>
    </div>
  );
}