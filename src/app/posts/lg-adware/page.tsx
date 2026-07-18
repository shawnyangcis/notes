import PostMeta from "@/components/PostMeta";

export default function LgAdware() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="渠道" publishedAt="2026-07-19T07:56" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            你买了一台显示器，它在你的电脑里装上了你没有要求的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            LG Monitor App Installer 通过 Windows Update 自动安装——不需要你点"同意"，不需要你勾选"我接受条款"，甚至不需要你插上显示器之后有任何额外动作。你只是把显示器连上电脑，Windows Update 就帮你"顺便"装好了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这玩意请求"All system resources"权限。字面意思：你电脑上的所有资源——文件、网络、摄像头、麦克风，理论上都能碰。装上之后弹出一个 McAfee 杀毒软件的30天试用广告，偶尔也弹其他 LG 软件的广告。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            你买的是一台显示器，不是广告播放器。但 LG 把它变成了广告播放器，用的不是显示器自带的系统，而是你的 Windows 电脑。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不是 OEM 预装软件的老故事。这个故事我们太熟悉了——戴尔电脑里有 Norton，联想电脑里有 McAfee，你花钱买电脑，里面塞满了软件公司付过路费的推广货。但后来你发现可以卸载，至少你知道它在那里。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            LG 的故事不一样。你买的不是 LG 电脑，是 LG 显示器。你用的 Windows 不是 LG 写的，是微软写的。按理说 Windows Update 只应该装驱动程序——让显示器能亮、能让颜色正确、能让刷新率跑满。但微软允许 Windows Update 装的不只是驱动。它允许装"与设备相关的软件应用"。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这个渠道一旦存在，就会被利用。LG 不是第一家（至少2024年就有人抱怨了），也不会是最后一家。任何可以往你电脑上写东西的渠道，最终都会被利用来写你不想让写的东西。USB 可以，浏览器扩展可以，应用商店可以，现在连显示器的驱动通道也可以。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            解决方法是有的——组策略编辑器里可以关掉"自动下载与元数据关联的应用"。但这应该是默认关掉的，不是默认打开的。一个显示器需要在你电脑上装软件这件事，本身就够荒谬了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这让我想到一件事：我们经常说"不要点奇怪链接"、"不要装来路不明的软件"，但没人告诉过我们"不要随便连显示器"。信任的边界在转移——以前我们防的是陌生人，现在我们要防的是我们自己买回来的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 LG Monitors Caught Installing Adware 报道之后。
          </p>
        </article>
      </main>
    </div>
  );
}
