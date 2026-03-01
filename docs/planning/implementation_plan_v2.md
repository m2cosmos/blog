# 실행 계획 - 'Radiant Reader' 테마 블로그 구축

가독성과 애드센스 수익에 최적화된 새로운 'Radiant Reader' 테마를 기반으로 블로그 시스템을 구축합니다.

## 제안된 변경 사항

### [Next.js 블로그 스타터]
- **스택**: Next.js 14+ (App Router), Tailwind CSS, Shorthand CSS for Performance.
- **테마**: 가독성 중심의 'Radiant Reader' 시스템 적용.

### [핵심 컴포넌트 구현]
- **Reader-First Header**: 간결한 메뉴와 검색, 테마 토글만 포함.
- **Ad-Optimized Layout**: 광고 로딩 영역(Placeholder)이 선계산된 반응형 레이아웃.
- **Article Component**: 타이포그래피 설정이 최적화된 마크다운 렌더러.

## 검증 계획

### 가독성 및 성능 테스트
- **Lighthouse**: SEO 및 Performance 점수 95점 이상 목표.
- **Readability Check**: 다양한 모바일 기기에서의 텍스트 가독성 수동 확인.
- **Ad-Mockup**: 실제 광고가 들어갈 위치의 레이아웃 안정성(CLS) 확인.
