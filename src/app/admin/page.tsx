"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";
import { DynamicArticle } from "@/types/cms";
import Link from "next/link";
import Image from "next/image";

export default function AdminListPage() {
    const [articles, setArticles] = useState<DynamicArticle[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (!storage.isAdmin()) {
            router.push("/admin/login");
            return;
        }
        setArticles(storage.getAllArticles());
    }, [router]);

    const handleDelete = (slug: string) => {
        if (confirm("정말로 이 글을 삭제하시겠습니까? 🧐")) {
            storage.deleteArticle(slug);
            setArticles(storage.getAllArticles());
        }
    };

    const handleLogout = () => {
        storage.logout();
        router.push("/");
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter mb-2">블로그 관리 📝</h1>
                    <p className="text-slate-500 font-medium text-lg">총 {articles.length}개의 아티클이 관리되고 있습니다.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/new"
                        className="px-6 py-3 rounded-2xl bg-accent text-white font-bold hover:brightness-110 shadow-lg shadow-accent/20 transition active:scale-[0.98]"
                    >
                        새 글 쓰기 📝
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition"
                    >
                        로그아웃 🔒
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div
                        key={article.slug}
                        className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >
                        {/* Image Preview */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            {article.isDynamic && (
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                                    Dynamic
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-grow">
                            <div className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-widest mb-4">
                                {article.category}
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500">{article.date}</span>
                            </div>
                            <h2 className="text-xl font-black tracking-tight mb-4 line-clamp-2 leading-snug group-hover:text-accent transition">
                                {article.title}
                            </h2>
                        </div>

                        {/* Actions */}
                        <div className="px-8 pb-8 pt-0 flex items-center gap-3">
                            {article.isDynamic ? (
                                <>
                                    <Link
                                        href={`/admin/edit/${article.slug}`}
                                        className="flex-grow py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-sm font-bold hover:bg-accent/10 hover:text-accent transition"
                                    >
                                        수정 📝
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(article.slug)}
                                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition"
                                    >
                                        🗑️
                                    </button>
                                </>
                            ) : (
                                <span className="w-full py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center text-xs font-medium text-slate-400 italic">
                                    정적 데이터 (수정 불가)
                                </span>
                            )}
                        </div>

                        <Link href={`/articles/${article.slug}`} className="absolute inset-0 z-0 opacity-0">보기</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
