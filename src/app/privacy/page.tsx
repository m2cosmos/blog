import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
            <h1 className="text-4xl font-black mb-12 text-white">개인정보처리방침 (Privacy Policy)</h1>
            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. 수집하는 개인정보</h2>
                    <p>회사는 사용자가 직접 제공하는 정보(이르, 이메일 등) 외에도, 서비스 이용 과정에서 쿠키(Cookie), 접속 IP, 기기 정보 등을 자동으로 수집할 수 있습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. 개인정보 수집 및 이용 목적</h2>
                    <p>수집된 정보는 서비스 분석, 사용자 맞춤형 콘텐츠 제공, 구글 애드센스 광고 최적화 및 보안 강화를 위해 사용됩니다.</p>
                </section>

                <section className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4 text-indigo-300">3. 구글 광고 및 데이터 분석 고지</h2>
                    <p className="mb-4">본 서비스는 다음과 같은 제3자 서비스를 이용합니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Google AdSense</strong>: 구글은 방문자의 이전 방문 기록을 바탕으로 광고를 게시하기 위해 쿠키(DART 쿠키 등)를 사용합니다.</li>
                        <li><strong>Google Analytics</strong>: 웹사이트 트래픽 및 사용자 행동 분석을 위해 테이터를 수집합니다.</li>
                        <li><strong>Microsoft Clarity</strong>: 사용자 경험 개선을 위한 히트맵 및 세션 기록을 캡처합니다.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4 text-indigo-300">4. 사용자의 통제권 및 거부 방법</h2>
                    <p className="mb-4">사용자는 웹 브라우저 설정을 통해 쿠키 수집을 거부할 수 있으며, 다음 링크를 통해 맞춤 광고 도우미를 관리할 수 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2 text-indigo-400">
                        <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="hover:underline">Google 광고 설정 관리</a></li>
                        <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="hover:underline">제3자 벤더의 쿠키 사용 거부 (NAI)</a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. 미국 등의 개인정보 보호법 준수</h2>
                    <p>회사는 GDPR(유럽), CCPA/CPRA(미국 캘리포니아) 및 관련 국가별 규정을 존중하며, 비식별 처리된 데이터가 관리될 수 있음을 고지합니다.</p>
                </section>

                <footer className="mt-16 pt-8 border-t border-white/10 text-sm italic">
                    <p>최초 시행일: 2026년 3월 7일</p>
                    <p>최종 수정일: 2026년 3월 7일</p>
                </footer>
            </div>
        </main>
    );
}
