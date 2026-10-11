// Site-wide settings. Edit this file first.

export const site = {
  title: 'Kazuki Chada',
  description:
    'Kazuki Chada — master\'s student at the University of Tokyo working on systems for machine learning. CV and blog.',
  author: 'Kazuki Chada',
  authorJa: '茶田 和樹',
  lang: 'en',
  role: "Master's student, Graduate School of Information Science and Technology, The University of Tokyo",
  // Paragraphs may contain inline HTML such as links
  bio: [
    "I am a master's student in the Department of Information Physics and Computing at the University of Tokyo, where I belong to the <a href=\"https://hal.ipc.i.u-tokyo.ac.jp/en/\">Nakamura-Takase Laboratory</a> (Computing Systems). I am interested in distributed systems and the infrastructure that runs machine-learning workloads.",
    'My current research is on execution infrastructure for serving Vision-Language-Action (VLA) models to multiple robots across edge and cloud.',
  ],
  interests: [
    'Distributed systems',
    'ML systems and inference serving',
    'Edge / cloud computing',
  ],
  // Shown as icons; `icon` must be one of the keys in src/components/SocialLinks.astro
  links: [
    { label: 'GitHub', href: 'https://github.com/agridrama', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/%E5%92%8C%E6%A8%B9-%E8%8C%B6%E7%94%B0-436609277',
      icon: 'linkedin',
    },
  ] satisfies { label: string; href: string; icon: 'github' | 'linkedin' }[],
};

export const nav = [
  { label: 'About', href: '/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Blog', href: '/blog/' },
];
