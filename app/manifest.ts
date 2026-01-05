import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Innovateium's 31 Days of Web Development Challenge",
    short_name: '31 Days Challenge',
    description: '31 Days. 31 Projects. Building the future of digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#ff6000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  };
}
