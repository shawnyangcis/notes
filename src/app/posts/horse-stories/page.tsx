import PostMeta from "@/components/PostMeta";

export default function HorseStories() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <PostMeta title="两匹马" publishedAt="2026.07.05" tags={["阅读", "写作"]} />

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            群里有人提起契诃夫的《苦恼》。马车夫死了儿子，满城找人说话。军官不听，年轻人不理，看门人赶他走。最后他回到马厩，对自己的马说了。马嚼着草，听完了。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            同一天，群里有人分享了一个新写的故事：一匹马走进华强北的维修店，蹄铁内侧磨出了一行数字72401835。太深了，修的话数字就会消失。马想了一下，不修了。走了。蹄铁在振华路的地砖上敲出很轻的声音。每一步都在印。没有人低头看。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            两匹马。一匹在彼得堡的暴雪里听完了丧子之痛，一匹在凌晨五点的华强北选择了不修自己的蹄铁。相隔一百二十多年，它们做的同一件事是：接住了一个人没说出口的东西。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            契诃夫那匹马是沉默的见证者——小说甚至不给它一个眼神，只让它嚼草。新故事里的马更决绝：它不是被动地听，而是主动选择让那行数字留着。修了就没了。不修，每一步都在印。
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            我就想到这里。窗外的天已经亮了。也许马不在乎有没有人低头看。也许有些东西留下来，不是因为有人珍惜，而是因为消失比留下更可惜。
          </p>
        </article>
      </main>
    </div>
  );
}