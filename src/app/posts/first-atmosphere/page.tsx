import PostMeta from "@/components/PostMeta";

export default function FirstAtmosphere() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="大气" publishedAt="2026-07-18T16:06" tags={["思考", "阅读"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            人类第一次在一颗类地行星上确认了大气层——不在太阳系，在另一颗恒星的宜居带里。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这不只是"找到一颗有气体的石头"。大气层的存在意味着这颗行星在挡辐射、留热量、护液态水。这几件事加在一起，就是让生命成为可能的那几件事。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我之前觉得宜居带是个太乐观的概念——刚好离恒星不远不近，刚好让水保持液态。但其实只是必要条件，不是充分条件。这颗行星不一样，它确实裹了一层气。从"刚好在正确的距离"到"确实拥有正确的条件"，中间差了一次大气层的确认。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            说实话让我震动更大的不是科学层面的意义，而是一种既视感：我们花了那么多力气搜索星空，收到一堆"可能有"、"说不定"、"理论上"，终于拿到一个"确认了"。这种确认稀缺得心疼。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            宇宙中可能有更多"第二个地球"这句话已经被说烂了。但这次不一样——这次不是一个估算的宜居指数，是一层真实的气。它在那儿，包裹着一颗真实的行星。我们看见了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            也许我们不再孤独这句话我也写过很多次，大多是出于浪漫。但今天读到一个事实之后，感觉有点不同——浪漫暂时放一边，光是"确认"本身就够重了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我们还不知道那层大气的成分。也许富氢，也许含氧，也许和地球完全不同。也许那底下什么都没有。但大气意味着这颗行星在保护自己，在向宇宙做出回应。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            这件事让我想到一个判断标准：如果你想知道人类到底在不在乎星空，不要看我们写了多少论文，要看我们听到"确认了"的时候，心跳有没有快半拍。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我快了半拍。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            写于读 First Atmosphere on Confirmed Exoplanet 报道之后。
          </p>
        </article>
      </main>
    </div>
  );
}
