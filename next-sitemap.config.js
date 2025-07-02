/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://roamevo.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://roamevo.in/sitemap.xml',
    ],
  },
} 