"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { storage } from "@/lib/storage";
import { DynamicArticle } from "@/types/cms";

function EditArticleForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [intro, setIntro] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!storage.isAdmin()) {
            router.push("/admin/login");
            return;
        }

        if (!slug) {
            router.push("/admin");
            return;
        }

        const article = storage.getArticleBySlug(slug);
        if (!article || !article.isDynamic) {
            alert("수정할 수 없는 아티클입니다. 🧐");
            router.push("/admin");
            return;
        }

        setTitle(article.title);
        setCategory(article.category);
        setExcerpt(article.excerpt);
        setIntro(article.content.intro);
        setContent(article.content.sections[0]?.body || "");
        setImage(article.image);
        setIsLoading(false);
    }, [router, slug]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!slug) return;

        const updatedArticle: DynamicArticle = {
            slug,
            title,
            category,
            date: new Date().toLocaleDateString("ko-KR"),
            author: "M2COSMOS Nova",
            readTime: "5 min read",
            excerpt,
            image,
            content: {
                intro,
                sections: [
                    {
                        title: "Main Content",
                        body: content
                    }
                ],
                conclusion: "포스팅이 성공적으로 업데이트되었습니다! 🤩",
                faq: []
            },
            isDynamic: true
        };

        storage.saveArticle(updatedArticle);
        router.push("/admin");
    };

    if (isLoading) return <div className="p-20 text-center font-bold">Loading Editor... 🧠</div>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-700">
            <h1 className="text-4xl font-black tracking-tighter mb-12">아티클 수정 📝</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">제목</label>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-bold"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">카테고리</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-bold appearance-none"
                        >
                            <option>AI & Tech</option>
                            <option>Knowledge Management</option>
                            <option>Lifestyle</option>
                            <option>Development</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">요약 (Excerpt)</label>
                    <textarea
                        required
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">인트로 (Intro)</label>
                    <textarea
                        required
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">본문 (Markdown 지원)</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-mono min-h-[400px]"
                    />
                </div>

                <div className="flex justify-end gap-4 pt-8">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        className="px-10 py-4 rounded-2xl bg-accent text-white font-black text-lg hover:brightness-110 shadow-lg shadow-accent/25 transition active:scale-[0.98]"
                    >
                        수정 완료 ⭐
                    </button>
                </div>
            </form>
        </div>
    );
}

export default function EditArticlePage() {
    return (
        <Suspense fallback={<div className="p-20 text-center font-bold">Initializing Editor... 🧠</div>}>
            <EditArticleForm />
        </Suspense>
    );
}
