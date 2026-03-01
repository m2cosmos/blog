import Image from "next/image";
import Link from "next/link";
import AdSense from "@/components/AdSense";
import { articles } from "@/data/articles";

export default function Home() {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "M2COSMOS Blog",
    "url": "https://blog.m2cosmos.com",
    "description": "AI와 Agentic Coding의 미래를 탐구하는 M2COSMOS 공식 블로그",
    "publisher": {
      "@type": "Organization",
      "name": "M2COSMOS"
    }
  };

  return (
    <div className="transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto w-full px-6 py-12 md:py-16">
        {/* Hero Section - Featured Article */}
        <section className="mb-20">
          <Link href={`/articles/${featuredArticle.slug}`} className="group block">
            <div className="relative aspect-[21/9] w-full mb-8 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="inline-block px-3 py-1 rounded bg-accent text-white text-xs font-bold uppercase tracking-widest mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {featuredArticle.title}
                </h2>
              </div>
            </div>
          </Link>
        </section>

        {/* Top Ad */}
        <AdSense
          adSlot="1234567890"
          minHeight="100px"
          className="mb-20"
        />

        {/* Article Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 dark:border-slate-800 pb-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase">Latest Insights</h2>
            <span className="text-sm font-bold text-accent">{articles.length} Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {recentArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="h-full flex flex-col">
                  <div className="relative aspect-[16/10] mb-6 rounded-3xl overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                    {article.category}
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                    Read Story
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Ad */}
        <AdSense
          adSlot="3456789012"
          minHeight="250px"
          className="mt-16"
        />
      </div>
    </div>
  );
}
