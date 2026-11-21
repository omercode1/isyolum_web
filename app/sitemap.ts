import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/isyolum-gizlilik-politikasi`,
      lastModified: new Date('2026-11-07T00:00:00+03:00'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
