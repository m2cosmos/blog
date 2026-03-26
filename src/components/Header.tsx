"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { name: "Articles", href: "/" },
    { name: "새 글 쓰기 📝", href: "/admin/new" },
    { name: "블로그 관리 📝", href: "/admin" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 메뉴가 열려있을 때 경로가 바뀌면 메뉴를 닫음
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // 모바일 메뉴 열림 시 스크롤 방지
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle transition-all duration-300">
            <nav className="max-w-5xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between" aria-label="Main Navigation">
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-accent uppercase hover:opacity-80 transition flex items-center gap-1 group">
                    <span className="bg-accent text-white px-2 py-0.5 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.4)]">M2</span>
                    <span className="text-foreground transition-colors group-hover:text-accent">COSMOS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-accent transition-all relative py-2 group/link ${pathname === item.href
                                ? 'text-accent'
                                : ''
                                }`}
                        >
                            {item.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none z-50 transition-transform active:scale-90"
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-opacity duration-300 rounded-full ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Fullscreen Overlay */}
            <div className={`fixed inset-0 w-full h-[100dvh] bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-20 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
                }`}>
                {NAV_ITEMS.map((item, idx) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                        className={`text-3xl font-black tracking-tighter uppercase transition-all duration-300 text-center w-full ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            } ${pathname === item.href ? 'text-accent' : 'text-slate-400 dark:text-slate-600 hover:text-accent'
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </header>

    );
}
