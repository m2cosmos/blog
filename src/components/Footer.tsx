import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-border-subtle py-12 px-6 mt-auto">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm font-black tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-1">M2COSMOS</p>
                    <p className="text-[10px] text-slate-400/60 font-medium uppercase tracking-widest">© 2026 Built for the Infinite Journey.</p>
                </div>

                <div className="flex gap-6 text-xs font-semibold text-slate-500 tracking-widest uppercase">
                    <Link href="/terms" className="hover:text-accent transition">Terms</Link>
                    <Link href="/privacy" className="hover:text-accent transition">Privacy</Link>
                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
