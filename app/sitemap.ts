import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://31days.innovateium.co.bw';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${baseUrl}/all-days`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];
}
