import AdSense from "@/components/AdSense";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border-subtle">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="/" className="text-xl font-black tracking-tighter text-accent uppercase">
                        M2COSMOS
                    </a>
                </div>
            </nav>

            <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 md:py-20">
                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        개인정보처리방침 (Privacy Policy)
                    </h1>

                    <p className="text-lg text-slate-500 mb-12">최종 수정일: 2026.03.02</p>

                    <section className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. 수집하는 개인정보</h2>
                            <p>M2COSMOS 블로그는 별도의 회원가입 없이 컨텐츠를 이용할 수 있으며, 직접적인 개인정보를 수집하지 않습니다. 다만, 서비스 이용 과정에서 쿠키나 IP 주소 등이 시스템에 의해 자동 생성되어 수집될 수 있습니다.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. 쿠키(Cookie) 및 광고 설정</h2>
                            <p>저희 사이트는 사용자 경험 개선 및 광고 송출을 위해 쿠키를 사용합니다. 특히 구글 애드센스(Google AdSense)는 사용자의 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키를 활용합니다.</p>
                            <p>사용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있습니다.</p>
                        </div>

                        <AdSense adSlot="4567890123" minHeight="100px" className="my-10" />

                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. 제3자 제공</h2>
                            <p>수집된 정보는 법령에 정해진 경우를 제외하고는 제3자에게 제공되지 않습니다.</p>
                        </div>
                    </section>
                </article>
            </main>

            <footer className="bg-slate-50 dark:bg-slate-950 border-t border-border-subtle py-8 px-6 text-center">
                <p className="text-xs text-slate-500">© 2026 M2COSMOS. All rights reserved.</p>
            </footer>
        </div>
    );
}
