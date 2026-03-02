"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { storage } from "@/lib/storage";
import { DynamicArticle } from "@/types/cms";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AdSense from "@/components/AdSense";
import CommentSection from "@/components/CommentSection";
import { notFound } from "next/navigation";

export default function ArticleContent({ slug, initialArticle }: { slug: string, initialArticle?: DynamicArticle }) {
    const [article, setArticle] = useState<DynamicArticle | undefined>(initialArticle);
    const [isLoading, setIsLoading] = useState(!initialArticle);

    useEffect(() => {
        if (!initialArticle) {
            const found = storage.getArticleBySlug(slug);
            setArticle(found);
            setIsLoading(false);
        }
    }, [slug, initialArticle]);

    if (isLoading) return <div className="min-h-screen flex items-center justify-center font-black animate-pulse">Loading Insight... 🧠</div>;
    if (!article) return notFound();

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-700">
            {/* Category & Date */}
            <div className="flex items-center gap-3 text-sm font-black text-accent mb-8 uppercase tracking-[0.2em]">
                {article.category}
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-500">{article.date}</span>
                {article.isDynamic && (
                    <span className="ml-2 px-2 py-0.5 rounded-md bg-accent/10 text-[10px]">DYNAMIC</span>
                )}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[1] text-slate-950 dark:text-white">
                {article.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-5 mb-16 pb-12 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center font-black shadow-lg shadow-accent/20">
                    M
                </div>
                <div>
                    <p className="text-base font-black text-slate-900 dark:text-white">{article.author}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{article.readTime} · AI Insight Editor</p>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] mb-20 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                />
            </div>

            {/* Intro */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-20">
                <div className="text-2xl font-serif text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-8 border-accent pl-10 py-4 bg-accent/[0.03] rounded-r-3xl">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.content.intro}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Top Ad */}
            <AdSense adSlot="1234567890" minHeight="120px" className="mb-20" />

            {/* Sections */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-24">
                {article.content.sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-4xl font-black tracking-tight mb-10 text-slate-950 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                            {section.title}
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-400">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {section.body}
                            </ReactMarkdown>
                        </div>
                        {idx === 0 && (
                            <AdSense adSlot="2345678901" adFormat="rectangle" minHeight="280px" className="my-20" />
                        )}
                    </section>
                ))}
            </div>

            {/* Conclusion */}
            <div className="mt-24 p-12 md:p-20 rounded-[4rem] bg-slate-900 dark:bg-accent/5 border border-slate-800 dark:border-accent/10 shadow-3xl text-white dark:text-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-accent"></span>
                    <h3 className="text-2xl font-black tracking-widest uppercase">Conclusion</h3>
                </div>
                <div className="text-xl md:text-2xl leading-relaxed font-medium">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.content.conclusion}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Bottom Ad */}
            <AdSense adSlot="3456789012" minHeight="250px" className="my-24" />

            {/* FAQ Section */}
            {article.content.faq && article.content.faq.length > 0 && (
                <section className="mt-24">
                    <h2 className="text-3xl font-black mb-12 tracking-tighter uppercase italic border-b-4 border-accent pb-4 inline-block">
                        Insight FAQ
                    </h2>
                    <div className="space-y-10">
                        {article.content.faq.map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-xl ring-1 ring-slate-100 dark:ring-slate-800">
                                <h4 className="text-xl font-black mb-4 text-slate-950 dark:text-white group-hover:text-accent transition">
                                    Q: {item.question}
                                </h4>
                                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <strong>A: </strong>
                                    <span className="inline">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {item.answer}
                                        </ReactMarkdown>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Comment Section */}
            <CommentSection slug={slug} />
        </article>
    );
}
