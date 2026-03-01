export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="/" className="text-xl font-black tracking-tighter text-accent uppercase">
                        M2COSMOS
                    </a>
                </div>
            </nav>

            <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 md:py-20 text-center">
                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        Contact
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                        M2COSMOS와 함께 지적 우주를 개척할 제안을 기다립니다.
                    </p>

                    <div className="max-w-md mx-auto p-10 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-border-subtle">
                        <div className="mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">E-Mail Address</p>
                            <a href="mailto:official@m2cosmos.com" className="text-2xl font-black text-accent hover:underline">
                                official@m2cosmos.com
                            </a>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm text-slate-500">
                                광고 문의, 기술 협업, 또는 단순한 인사도 환영합니다. <br />
                                보내주신 이메일은 24시간 이내에 검토 후 답변 드립니다.
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            <footer className="bg-slate-50 dark:bg-slate-950 border-t border-border-subtle py-8 px-6 text-center">
                <p className="text-xs text-slate-500">© 2026 M2COSMOS. All rights reserved.</p>
            </footer>
        </div>
    );
}
