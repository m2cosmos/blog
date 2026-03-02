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

    return <ArticleContent slug={slug} initialArticle={initialArticle} />;
}
