import { articles } from "@/data/articles";
import ArticleList from "@/components/ArticleList";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "M2COSMOS Blog",
    "url": "https://m2cosmos.com",
    "description": "AI와 Agentic Coding의 미래를 탐구하는 M2COSMOS 공식 블로그",
    "publisher": {
      "@type": "Organization",
      "name": "M2COSMOS"
    }
  };

  return (
    <div className="transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleList initialArticles={articles} />
    </div>
  );
}
