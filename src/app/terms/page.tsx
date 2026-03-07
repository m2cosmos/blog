import React from 'react';

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-black mb-8">이용약관 (Terms of Service)</h1>
            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed space-y-6">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 1 조 (목적)</h2>
                    <p>이 약관은 M2COSMOS(이하 "회사")가 운영하는 블로그 및 관련 제반 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 회원간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 2 조 (용어의 정의)</h2>
                    <p>1. "서비스"라 함은 회사가 제공하는 블로그 콘텐츠 및 정보 제공 서비스를 의미합니다.<br />
                        2. "이용자"라 함은 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 3 조 (약관의 명시와 개정)</h2>
                    <p>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 필요한 경우 관계 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 4 조 (서비스의 제공 및 변경)</h2>
                    <p>회사는 이용자에게 지식 공유 및 정보 제공을 위한 블로그 서비스를 제공합니다. 서비스의 내용이나 기술적 사양은 회사의 정책에 따라 변경될 수 있습니다.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">제 5 조 (책임의 한계)</h2>
                    <p>회사가 서비스 내에서 제공하는 정보나 조언은 정보 제공이 목적이며, 이를 활용한 결정에 대한 최종 책임은 이용자에게 있습니다. 회사는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대하여 회사의 고의 또는 중과실이 없는 한 책임을 지지 않습니다.</p>
                </section>

                <footer className="mt-12 pt-8 border-t border-white/10 text-sm">
                    <p>시행일자: 2026년 3월 7일</p>
                </footer>
            </div>
        </main>
    );
}
