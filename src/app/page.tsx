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
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tighter text-accent uppercase">
            M2COSMOS
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-accent transition">Articles</a>
            <a href="#" className="hover:text-accent transition">Categories</a>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
              🔍
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 md:py-16">
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

        {/* Bottom Ad - Responsive Unit */}
        <AdSense
          adSlot="3456789012"
          minHeight="250px"
          className="mt-16"
        />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-border-subtle py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold tracking-widest uppercase text-slate-400">M2COSMOS</p>
            <p className="text-xs text-slate-500 mt-1">© 2026 Built for the Infinite Journey.</p>
          </div>
          <div className="flex gap-6 text-xs font-semibold text-slate-500 tracking-widest uppercase">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
