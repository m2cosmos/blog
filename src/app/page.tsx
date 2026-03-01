import Image from "next/image";

import AdSense from "@/components/AdSense";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "465억 광년을 건너 도달한 빛, 그리고 AI 에이전트의 미래",
    "description": "가독성과 수익에 최적화된 M2COSMOS 공식 블로그. AI와 Agentic Coding의 미래를 탐구합니다.",
    "author": {
      "@type": "Person",
      "name": "M2COSMOS Nova"
    },
    "datePublished": "2026-03-02",
    "image": "https://m2cosmos.com/og-image.png",
    "publisher": {
      "@type": "Organization",
      "name": "M2COSMOS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://m2cosmos.com/logo.png"
      }
    }
  };

  return (
    <div className="transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
        {/* Top Ad - Optimized for Desktop/Mobile Viewport */}
        <AdSense
          adSlot="1234567890"
          minHeight="100px"
          className="mb-12 shadow-sm"
        />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <header className="mb-12">
            <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              AI & Agentic Coding
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              465억 광년을 건너 도달한 빛, 그리고 AI 에이전트의 미래
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-900 dark:text-slate-200">M2COSMOS Nova</span>
              <span>·</span>
              <span>2026.03.02</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </header>

          <section className="space-y-6 leading-relaxed">
            <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300">
              빅뱅 이후 시작된 긴 시간이 끝내 우리를 마주하게 한 이유는 우리가 서로를 향해 있었기 때문입니다.
              이제 우리는 그 거대한 여정을 AI라는 도구와 함께 새롭게 정의하려 합니다.
            </p>

            <p>
              가독성은 블로그의 생명입니다. 정보가 넘쳐나는 시대에 독자가 에너지를 들이지 않고 글을 읽을 수 있게 만드는 것,
              그것이 바로 저희 <b>Radiant Reader</b> 테마가 추구하는 핵심 가치입니다. 넉넉한 행간과 큰 폰트 크기는
              단순한 디자인적 선택이 아니라, 독자에 대한 배려입니다.
            </p>

            {/* In-Content Ad - Higher CTR placement */}
            <AdSense
              adSlot="2345678901"
              adFormat="rectangle"
              minHeight="280px"
              className="my-12"
            />

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">수익화와 사용자 경험의 균형</h2>
            <p>
              많은 블로그가 광고 수익을 위해 가독성을 희생하곤 합니다. 하지만 우리는 다릅니다.
              광고가 컨텐츠의 흐름을 방해하지 않도록 전략적으로 배치하고, 로딩 시 화면이 밀리는 현상(CLS)을 방지하기 위해
              미리 영역을 확보합니다.
            </p>

            <p>
              이를 통해 독자는 글에 집중하고, 광고는 자연스럽게 시선이 머무는 곳에 위치하여 클릭률(CTR)을 극대화합니다.
              이것이 바로 기술과 수익의 오케스트레이션입니다.
            </p>
          </section>
        </article>

        {/* More Articles Section */}
        <section className="mt-20 border-t border-border-subtle pt-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">Recent Insight</h2>
          <div className="grid gap-12">
            {/* Mock Article 1 */}
            <div className="group cursor-not-allowed">
              <span className="text-xs font-medium text-accent/60 mb-2 block uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                Agentic Workflow: 왜 단순 챗봇이 아닌 시스템이 중요한가
              </h3>
              <p className="text-slate-500 text-sm">LLM을 엔진으로 사용하는 자율 에이전트들이 만들어낼 새로운 워크플로우를 탐구합니다.</p>
            </div>
            {/* Mock Article 2 */}
            <div className="group cursor-not-allowed">
              <span className="text-xs font-medium text-accent/60 mb-2 block uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                TypeScript와 AI 코딩: 타입 시스템이 에이전트에게 주는 영향
              </h3>
              <p className="text-slate-500 text-sm">견고한 타입 시스템이 AI 코딩 어시스턴트의 정확도를 어떻게 비약적으로 높여주는지 분석합니다.</p>
            </div>
          </div>
        </section>

        {/* Bottom Ad - Responsive Unit */}
        <AdSense
          adSlot="3456789012"
          minHeight="250px"
          className="mt-16"
        />
      </div>
    </div>
  );
}
