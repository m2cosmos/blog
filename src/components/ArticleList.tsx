"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { storage } from "@/lib/storage";
import { DynamicArticle } from "@/types/cms";
import AdSense from "@/components/AdSense";

export default function ArticleList({ initialArticles }: { initialArticles: DynamicArticle[] }) {
    const [allArticles, setAllArticles] = useState<DynamicArticle[]>(initialArticles);

    useEffect(() => {
        setAllArticles(storage.getAllArticles());
    }, []);

    const featuredArticle = allArticles[0];
    const recentArticles = allArticles.slice(1);

    if (!featuredArticle) return null;

    return (
        <div className="max-w-6xl mx-auto w-full px-6 py-12 md:py-16">
            {/* Hero Section - Featured Article */}
            <section className="mb-24">
                <Link href={`/articles/${featuredArticle.slug}`} className="group block">
                    <div className="relative aspect-[21/9] w-full mb-10 rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900">
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-12 left-12 right-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/40">
                                    Featured Insight
                                </span>
                                {featuredArticle.isDynamic && (
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                                        Dynamic Post
                                    </span>
                                )}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] group-hover:tracking-tight transition-all duration-700">
                                {featuredArticle.title}
                            </h2>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Top Ad */}
            <AdSense adSlot="1234567890" minHeight="120px" className="mb-24" />

            {/* Article Grid */}
            <section className="mb-24">
                <div className="flex items-center justify-between mb-16 border-b border-slate-100 dark:border-slate-800 pb-8">
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">Latest Thinking</h2>
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-1 bg-accent rounded-full"></span>
                        <span className="text-sm font-black text-slate-500">{allArticles.length} Stories</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {recentArticles.map((article) => (
                        <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                            <article className="h-full flex flex-col">
                                <div className="relative aspect-[16/11] mb-8 rounded-[2.5rem] overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    {article.isDynamic && (
                                        <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-accent text-[8px] font-black uppercase tracking-widest backdrop-blur-sm shadow-sm ring-1 ring-black/5">
                                            Dynamic
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-widest mb-4">
                                    {article.category}
                                    <span className="text-slate-300 dark:text-slate-700">•</span>
                                    <span className="text-slate-400">{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors leading-[1.2] tracking-tight">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-lg line-clamp-2 mb-8 leading-relaxed font-medium">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-6 flex items-center gap-3 text-[11px] font-black text-slate-900 dark:text-slate-100 uppercase tracking-[0.2em] group/btn">
                                    Full Story
                                    <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-700 group-hover/btn:w-16 group-hover/btn:bg-accent transition-all duration-500"></div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
