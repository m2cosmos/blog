/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://m2cosmos.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml'], // 서버 사이드맵 제외 (필요 시 추가)
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://m2cosmos.com/server-sitemap.xml', // 실시간 데이터용 사이트맵 주소
        ],
    },
}
