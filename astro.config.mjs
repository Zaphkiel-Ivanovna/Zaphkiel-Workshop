import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Zaphkiel Workshop',
      social: {
        github: 'https://github.com/Zaphkiel-Ivanovna',
        discord: 'https://discord.gg/a9jFAAsDhp',
        twitter: 'https://twitter.com/ZaphkielIvanov',
      },
      sidebar: [
        // Un lien unique étiqueté “Accueil”.
        { label: 'Home', link: '/' },
        {
          label: 'Get Started',
          items: [{ label: 'Introduction', link: '/intro' }],
        },
        {
          label: 'Cybersecurity',
          autogenerate: { directory: 'cybersecurity' },
        },
      ],
    }),
  ],
});
