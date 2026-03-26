import { Article, articles as staticArticles } from "@/data/articles";
import { DynamicArticle, Comment, AdminSession } from "@/types/cms";

const STORAGE_KEYS = {
    ARTICLES: "m2cosmos_dynamic_articles",
    COMMENTS: "m2cosmos_comments",
    ADMIN_SESSION: "m2cosmos_admin_session"
};

const ADMIN_PASSWORD = "admin1234"; // 단순화된 관리자 비밀번호

export const storage = {
    // Article Management
    getDynamicArticles(): DynamicArticle[] {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.ARTICLES);
        return data ? JSON.parse(data) : [];
    },

    saveArticle(article: DynamicArticle) {
        const articles = this.getDynamicArticles();
        const existingIndex = articles.findIndex(a => a.slug === article.slug);

        article.isDynamic = true;
        if (existingIndex > -1) {
            articles[existingIndex] = article;
        } else {
            articles.unshift(article);
        }
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    },

    deleteArticle(slug: string) {
        const articles = this.getDynamicArticles().filter(a => a.slug !== slug);
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    },

    getAllArticles(): DynamicArticle[] {
        const dynamic = this.getDynamicArticles();
        return [...dynamic, ...staticArticles].sort((a, b) => b.date.localeCompare(a.date));
    },

    getArticleBySlug(slug: string): DynamicArticle | undefined {
        return this.getAllArticles().find(a => a.slug === slug);
    },

    // Comment Management
    getComments(articleSlug: string): Comment[] {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.COMMENTS);
        const allComments: Comment[] = data ? JSON.parse(data) : [];
        return allComments.filter(c => c.articleSlug === articleSlug);
    },

    addComment(comment: Omit<Comment, "id" | "date">) {
        const data = localStorage.getItem(STORAGE_KEYS.COMMENTS);
        const allComments: Comment[] = data ? JSON.parse(data) : [];

        const newComment: Comment = {
            ...comment,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString("ko-KR")
        };

        allComments.push(newComment);
        localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(allComments));
        return newComment;
    },

    deleteComment(id: string) {
        const data = localStorage.getItem(STORAGE_KEYS.COMMENTS);
        if (!data) return;
        const allComments: Comment[] = JSON.parse(data);
        const filtered = allComments.filter(c => c.id !== id);
        localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(filtered));
    },

    // Admin Auth
    login(password: string): boolean {
        if (password === ADMIN_PASSWORD) {
            const session: AdminSession = {
                token: "valid-admin-token-" + Date.now(),
                expiresAt: Date.now() + 1000 * 60 * 60 * 24 // 24 hours
            };
            localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(session));
            return true;
        }
        return false;
    },

    logout() {
        localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    },

    isAdmin(): boolean {
        if (typeof window === "undefined") return false;
        const data = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
        if (!data) return false;

        const session: AdminSession = JSON.parse(data);
        if (session.expiresAt < Date.now()) {
            this.logout();
            return false;
        }
        return true;
    }
};
