export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 text-center">
            <article className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-center">
                    Contact
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 text-center">
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
        </div>
    );
}
