import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://matransformlab.com', lastModified: new Date() },
    { url: 'https://matransformlab.com/courses', lastModified: new Date() },
    { url: 'https://matransformlab.com/assessment', lastModified: new Date() },
  ]
}
