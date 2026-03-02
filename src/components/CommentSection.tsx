"use client";

import { useState, useEffect } from "react";
import { storage } from "@/lib/storage";
import { Comment } from "@/types/cms";

export default function CommentSection({ slug }: { slug: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setComments(storage.getComments(slug));
        setIsAdmin(storage.isAdmin());
    }, [slug]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!author || !text) return;

        const newComment = storage.addComment({
            articleSlug: slug,
            author,
            text
        });

        setComments([...comments, newComment]);
        setAuthor("");
        setText("");
    };

    const handleDelete = (id: string) => {
        if (confirm("댓글을 삭제하시겠습니까?")) {
            storage.deleteComment(id);
            setComments(comments.filter(c => c.id !== id));
        }
    };

    return (
        <section className="mt-24 pt-16 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-black mb-12 tracking-tighter">소중한 의견을 나눠주세요 💡</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-16 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">작성자</label>
                        <input
                            required
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-transparent focus:border-accent outline-none transition-all font-bold"
                            placeholder="닉네임"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">내용</label>
                    <textarea
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-transparent focus:border-accent outline-none transition-all min-h-[120px]"
                        placeholder="글에 대한 생각을 자유롭게 남겨주세요 🤩"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-xl bg-accent text-white font-black hover:brightness-110 shadow-lg shadow-accent/20 transition active:scale-[0.98]"
                    >
                        댓글 등록하기 ✨
                    </button>
                </div>
            </form>

            {/* Comment List */}
            <div className="space-y-8">
                {comments.length === 0 ? (
                    <p className="text-center text-slate-400 font-medium py-10 italic">아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요! 🚀</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="group relative p-6 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-900 transition duration-500">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-xs">
                                        {comment.author[0]}
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-slate-100">{comment.author}</span>
                                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{comment.date}</span>
                                </div>
                                {(isAdmin) && (
                                    <button
                                        onClick={() => handleDelete(comment.id)}
                                        className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 transition"
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                                {comment.text}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
