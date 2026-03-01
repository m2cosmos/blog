import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import AdSense from "@/components/AdSense";
import { Metadata } from "next";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) return {};

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default function ArticlePage({ params }: PageProps) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-700">
            {/* Category & Date */}
            <div className="flex items-center gap-3 text-sm font-bold text-accent mb-6 uppercase tracking-widest">
                <span>{article.category}</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-500 font-medium">{article.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
                {article.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12 pb-12 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    M
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{article.author}</p>
                    <p className="text-xs text-slate-500">{article.readTime} · AI Insight Editor</p>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                />
            </div>

            {/* Intro */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
                <p className="text-2xl font-serif text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-accent pl-8 py-2">
                    {article.content.intro}
                </p>
            </div>

            {/* Top Ad */}
            <AdSense adSlot="1234567890" minHeight="120px" className="mb-16" />

            {/* Sections */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-20">
                {article.content.sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-3xl font-black tracking-tight mb-8 text-slate-900 dark:text-slate-100">
                            {section.title}
                        </h2>
                        <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                            {section.body}
                        </p>
                        {idx === 0 && (
                            <AdSense adSlot="2345678901" adFormat="rectangle" minHeight="280px" className="my-16" />
                        )}
                    </section>
                ))}
            </div>

            {/* Conclusion */}
            <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
                <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-0">
                    {article.content.conclusion}
                </p>
            </div>

            {/* Bottom Ad */}
            <AdSense adSlot="3456789012" minHeight="250px" className="my-20" />

            {/* FAQ Section */}
            <section className="mt-20">
                <h2 className="text-2xl font-black mb-10 tracking-tight uppercase border-b-2 border-slate-900 dark:border-slate-100 pb-4 inline-block">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                    {article.content.faq.map((item, idx) => (
                        <div key={idx} className="group">
                            <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-accent transition">
                                Q: {item.question}
                            </h4>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                A: {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
