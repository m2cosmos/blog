"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isHome = pathname === "/";

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-tighter text-accent uppercase hover:opacity-80 transition">
                    M2COSMOS
                </Link>
                <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <Link
                        href="/"
                        className={`hover:text-accent transition ${isHome ? 'underline decoration-accent/30 underline-offset-4 text-slate-900 dark:text-slate-100' : ''}`}
                    >
                        Articles
                    </Link>
                    <Link
                        href="/about"
                        className={`hover:text-accent transition ${pathname === '/about' ? 'underline decoration-accent/30 underline-offset-4 text-slate-900 dark:text-slate-100' : ''}`}
                    >
                        About
                    </Link>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
                        🔍
                    </button>
                </div>
            </div>
        </nav>
    );
}
