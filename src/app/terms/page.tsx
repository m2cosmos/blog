import React from 'react';

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
            <h1 className="text-4xl font-black mb-12 text-white">이용약관 (Terms of Service)</h1>
            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 1 조 (목적)</h2>
                    <p>본 약관은 M2COSMOS(이하 "회사")가 운영하는 웹사이트 및 블로그(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 2 조 (용어의 정의)</h2>
                    <p>1. "서비스"란 회사가 제공하는 정보, 콘텐츠, 분석 리포트 및 제반 기능을 의미합니다.<br />
                        2. "이용자"란 서비스를 이용하는 모든 방문자 및 회원을 의미합니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 3 조 (지적재산권)</h2>
                    <p>1. 서비스 내 게시된 모든 콘텐츠(텍스트, 이미지, 로고, 디자인 등)의 지적재산권은 회사에 귀속됩니다.<br />
                        2. 이용자는 회사의 사전 서면 승인 없이 콘텐츠를 복제, 배포, 판매 또는 상업적으로 이용할 수 없습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 4 조 (콘텐츠의 정확성 및 면책)</h2>
                    <p>1. 서비스에서 제공하는 모든 정보는 일반적인 정보 제공을 목적으로 하며, 특정 비즈니스나 법적 결정의 근거로 사용될 수 없습니다.<br />
                        2. 회사는 콘텐츠의 정확성, 신뢰성, 완전성을 보증하지 않으며, 이용자의 활용 결과에 따른 손실에 대해 책임을 지지 않습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 5 조 (광고 게재 및 제3자 링크)</h2>
                    <p>1. 회사는 수익 모델의 일환으로 구글 애드센스 등 제3자 광고를 게재할 수 있습니다.<br />
                        2. 서비스 내 포함된 제3자 웹사이트 링크로 이동할 경우, 해당 사이트의 약관 및 정책이 적용되며 회사는 이에 대해 책임을 지지 않습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 6 조 (준거법 및 관할)</h2>
                    <p>본 약관과 관련된 분쟁에 대해서는 대한민국 법령을 준거법으로 하며, 회사의 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.</p>
                </section>

                <footer className="mt-16 pt-8 border-t border-white/10 text-sm italic">
                    <p>최초 시행일: 2026년 3월 7일</p>
                    <p>최종 수정일: 2026년 3월 7일</p>
                </footer>
            </div>
        </main>
    );
}
