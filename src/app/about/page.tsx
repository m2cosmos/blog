export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 text-center">
            <article className="prose prose-slate dark:prose-invert max-w-none text-center">
                <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                    Our Vision
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">
                    Infinite Journey, <br />Radiant Intelligence.
                </h1>

                <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    <p>
                        M2COSMOS는 465억 광년의 광활한 우주처럼 끝없는 지적 호기심을 바탕으로,
                        일상에 빛을 더하는 기술과 이야기를 전달합니다.
                    </p>
                    <p>
                        우리는 특히 <b>AI 에이전트</b>와 <b>Agentic Coding</b> 기술이 인간의 생산성을
                        어떻게 변화시킬 수 있는지에 집중하며, 그 과정에서 얻은 인사이트를 공유합니다.
                    </p>
                    <p>
                        기술은 단순한 도구를 넘어, 인간이 상상하는 모든 미래를 현실로 가시화하는
                        가장 아름다운 '빛'이라고 믿습니다. 우리와 함께 그 빛을 따라 여정을 시작해 보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div className="text-3xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-2 uppercase">Innovation</h3>
                        <p className="text-sm">최신 AI 기술의 흐름을 빠르게 전달합니다.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div className="text-3xl mb-4">📖</div>
                        <h3 className="text-xl font-bold mb-2 uppercase">Insight</h3>
                        <p className="text-sm">단순 정보를 넘어 깊이 있는 통찰을 나눕니다.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <div className="text-3xl mb-4">✨</div>
                        <h3 className="text-xl font-bold mb-2 uppercase">Integrity</h3>
                        <p className="text-sm">정확하고 신뢰할 수 있는 정보를 지향합니다.</p>
                    </div>
                </div>
            </article>
        </div>
    );
}
