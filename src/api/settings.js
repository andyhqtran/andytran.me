import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3',
});

export async function getSettings() {
  const settings = await api.settings
    .browse({
      limit: 'all',
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    coverImage: settings.cover_image,
    description: settings.description,
    logo: settings.logo,
    meta: {
      description: settings.meta_description,
      title: settings.meta_title,
    },
    navigation: settings.navigation,
    og: {
      description: settings.og_description,
      image: settings.og_image,
      title: settings.og_title,
    },
    socialIcons:
      settings?.secondary_navigation.map((socialIcon) => ({
        ...socialIcon,
        label: socialIcon?.label?.toLowerCase(),
      })) ?? null,
    title: settings.title,
    twitter: {
      description: settings.twitter_description,
      image: settings.twitter_image,
      title: settings.twitter_title,
    },
  };
}
