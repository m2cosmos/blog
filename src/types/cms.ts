import { Article } from "@/data/articles";

export interface Comment {
    id: string;
    articleSlug: string;
    author: string;
    text: string;
    date: string;
}

export interface AdminSession {
    token: string;
    expiresAt: number;
}

export type DynamicArticle = Article & {
    isDynamic?: boolean;
};
