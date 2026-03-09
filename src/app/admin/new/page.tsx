"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";
import { DynamicArticle } from "@/types/cms";

export default function NewArticlePage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("AI & Tech");
    const [excerpt, setExcerpt] = useState("");
    const [intro, setIntro] = useState("");
    const [content, setContent] = useState(""); // Simplified for dynamic
    const [image, setImage] = useState("/images/obsidian_second_brain_km_v1_1772406948050.png");

    useEffect(() => {
        if (!storage.isAdmin()) {
            router.push("/admin/login");
        }
    }, [router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Add emojis to key sections if not present (3-5 emojis rule 🤩)
        const emojiList = ["🤩", "🚀", "✨", "📝", "🧠", "💎", "🌟"];
        const getRandomEmojis = (count: number) =>
            Array.from({ length: count }, () => emojiList[Math.floor(Math.random() * emojiList.length)]).join(" ");

        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `article-${Date.now()}`;

        const newArticle: DynamicArticle = {
            slug,
            title: `${title} ${getRandomEmojis(1)}`,
            category,
            date: new Date().toLocaleDateString("ko-KR"),
            author: "M2COSMOS Nova",
            readTime: "5 min read",
            excerpt: `${excerpt} ${getRandomEmojis(1)}`,
            image,
            content: {
                intro: `${intro} ${getRandomEmojis(1)}`,
                sections: [
                    {
                        title: "Main Content",
                        body: content
                    }
                ],
                conclusion: `포스팅이 도움이 되셨나요? 더 궁금한 점은 댓글로 남겨주세요! ${getRandomEmojis(1)}`,
                faq: []
            },
            isDynamic: true
        };

        storage.saveArticle(newArticle);
        router.push("/admin");
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl font-black tracking-tighter mb-12">새 아티클 작성 📝</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">제목</label>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-bold"
                            placeholder="글 제목을 입력하세요"
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
                        placeholder="글 목록에 표시될 짧은 요약글"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">인트로 (Intro)</label>
                    <textarea
                        required
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg min-h-[100px]"
                        placeholder="글의 시작을 알리는 도입부"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">본문 (Markdown 지원)</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-mono min-h-[400px]"
                        placeholder="마크다운 형식으로 자유롭게 내용을 작성하세요"
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
                        블로그에 저장 📝
                    </button>
                </div>
            </form>
        </div>
    );
}
