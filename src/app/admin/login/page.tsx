"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (storage.isAdmin()) {
            router.push("/admin");
        }
    }, [router]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (storage.login(password)) {
            router.push("/admin");
        } else {
            setError("비밀번호가 일치하지 않습니다. 🧐");
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="w-full max-w-md p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-10">
                    <div className="inline-block p-4 rounded-3xl bg-accent/10 text-accent text-4xl mb-6">
                        🔒
                    </div>
                    <h1 className="text-3xl font-black tracking-tight mb-2">Admin Login</h1>
                    <p className="text-slate-500">블로그 관리를 위해 인증이 필요합니다.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-accent outline-none transition-all text-lg font-bold"
                            placeholder="관리자 비밀번호 입력"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm font-bold text-center animate-bounce">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-accent text-white font-black text-lg hover:brightness-110 active:scale-[0.98] transition shadow-lg shadow-accent/25"
                    >
                        인증하기 🤩
                    </button>
                </form>
            </div>
        </div>
    );
}
