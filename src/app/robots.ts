import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/princess/' },
    sitemap: 'https://matransformlab.com/sitemap.xml',
  }
}
