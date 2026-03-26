import { articles } from "@/data/articles";
import { Metadata } from "next";
import ArticleContent from "@/components/ArticleContent";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const initialArticle = articles.find((a) => a.slug === slug);

    if (!initialArticle) return null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": initialArticle.title,
        "description": initialArticle.excerpt,
        "image": [initialArticle.image],
        "datePublished": initialArticle.date.replace(/\./g, '-'),
        "author": {
            "@type": "Person",
            "name": initialArticle.author,
        },
        "publisher": {
            "@type": "Organization",
            "name": "M2COSMOS",
            "logo": {
                "@type": "ImageObject",
                "url": "https://blog.m2cosmos.com/og-image.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://blog.m2cosmos.com/articles/${slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArticleContent slug={slug} initialArticle={initialArticle} />
        </>
    );
}

