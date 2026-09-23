export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Albums/Songs", path: "/albums" },
  { name: "Videos", path: "/videos" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/bayo_adegbite/",
  twitter: "https://x.com/BayoAdegbite_",
  facebook: "https://web.facebook.com/adegbite.bayo",
  youtube: "https://www.youtube.com/@bayo_adegbite_Tv/featured",
  youtubeVideos: "https://www.youtube.com/@bayo_adegbite_Tv/videos",
  spotify: "https://open.spotify.com/artist/2CS52uC1sYdYmvtPSaJmFJ?si=No_vHlooS2-JwLJxUQVIKA",
  deezer: "https://www.deezer.com/en/artist/11646073",
  boomplay: "https://www.boomplay.com/share/artist/242540",
};

export const booking = {
  email: "bayoadegbitemain@gmail.com",
  location: "Lagos, Nigeria",
};

export const latestRelease = {
  title: "You Found Me",
  subtitle: "Official Video",
  released: "September 4, 2026",
  cover: "https://i.ytimg.com/vi/YGNlBuJq8Wg/maxresdefault.jpg",
  videoId: "YGNlBuJq8Wg",
  spotify: "https://open.spotify.com/track/5FyVtQrZDW6sDx1D5nRk2T",
  spotifyId: "5FyVtQrZDW6sDx1D5nRk2T",
};

export const listenPlatforms = [
  { name: "Spotify", href: latestRelease.spotify },
  { name: "YouTube", href: `https://www.youtube.com/watch?v=${latestRelease.videoId}` },
  { name: "Deezer", href: socialLinks.deezer },
  { name: "Boomplay", href: socialLinks.boomplay },
];
