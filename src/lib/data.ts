import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "YouTube",
    color: colors.red,
    cover:
      "/assets/yt.jpg",
    artists: [""],
  },
  {
    id: "2",
    title: "TikTok",
    color: colors.green,
    cover:
      "/assets/tiktok.png",
    artists: [""],
  },
  {
    id: "3",
    title: "Instagram",
    color: colors.rose,
    cover:
      "assets/insta.jpg",
    artists: [""],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];


export const inspirationLists = [
  {'author_username': null,
     'platform': 'drive.google.com',
     'id': 'folders_1orw4q_XDKv8f6YY1LI9m_hXewpT2z-nf',
     'dateAdded': 1672266822901,
     'engagement': null,
     'title': 'Tour Ad Mobile TYG - Google Drive',
  color: { accent: "#2ee9d7", dark: "#134e4a" },
     'users': ['OaYPbpZtYVhXODKXCALHa6L7kbA3'],
     'pid': 'drive.google.com_folders_1orw4q_XDKv8f6YY1LI9m_hXewpT2z-nf',
     'url': 'https://drive.google.com/drive/folders/1orw4q_XDKv8f6YY1LI9m_hXewpT2z-nf?usp=sharing',
     'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1024px-Google_Drive_icon_%282020%29.svg.png?20201021201920'},
    {'id': '257318ebc604de191668aae2549bec75',
     'caption': 'I am developing an application using Angular and AngularFire. When A user is registering using email and password and the user is getting an verification email in his email. When I am changing that',
     'thumbnail': 'https://firebasestorage.googleapis.com/v0/b/creator-app-tyg.appspot.com/o/df10b4f9eee4281f19371f5f2d97f986.png?alt=media&token=236359f1-b53f-4a3d-9c04-8c83a7a11bfa',
     'url': 'https://stackoverflow.com/questions/59503951/firebase-user-verify-email-action-url-to-custom-url',
     'users': ['OaYPbpZtYVhXODKXCALHa6L7kbA3'],
     'title': 'Firebase User verify Email Action URL to Custom URL',
     'engagement': null,
     'embed': '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://stackoverflow.com/questions/59503951/firebase-user-verify-email-action-url-to-custom-url" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F59503951%2Ffirebase-user-verify-email-action-url-to-custom-url&key=549ad7fcd1c0cb3607264ad950358b70"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>',
     'pid': 'other_257318ebc604de191668aae2549bec75',
     'platform': 'other',
  color: { accent: "#2ee9d7", dark: "#134e4a" },
     'author_username': null,
     'dateAdded': 1660335207239},
    {'platform': 'other',
     'caption': "I’ve been here before. I built a web app that used Firebase authentication and was about to deploy to production. But first, I needed to change the action URLs present in Firebase's password reset emails to point to a custom domain name.",
     'thumbnail': null,
    color: { accent: "#2ee9d7", dark: "#134e4a" },
     'id': '873c9224a076e907988a01aeae836550',
     'dateAdded': 1660335186750,
     'title': 'Post: How to customise Firebase Action URLs',
     'embed': null,
     'users': ['OaYPbpZtYVhXODKXCALHa6L7kbA3'],
     'author_username': null,
     'url': 'https://ifedapo.com/posts/customise-firebase-action-url',
     'engagement': null,
     'pid': 'other_873c9224a076e907988a01aeae836550'},
    {'thumbnail': 'https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/2d7c4451daac4adc9b9158d460f7ad51_1664128530?x-expires=1665716400&x-signature=QGkrV%2FvxVLrZivv1Hgm1vifWssA%3D',
     'platform': 'tiktok.com',
     'author_name': 'quinnickleshow',
     'author_username': 'quinnickleshow',
  color: { accent: "#2ee9d7", dark: "#134e4a" },
     'dateAdded': 1665696615332,
     'engagement': {'views': 167700,
      'shares': 151,
      'comments': 898,
      'likes': 40500},
     'id': '7147377561994038571',
     'caption': 'In the wise words of Emporer Palpatine: “do it”',
     'dateCreated': 0,
     'users': ['OaYPbpZtYVhXODKXCALHa6L7kbA3'],
     'pid': 'tiktok.com_7147377561994038571',
     'url': 'https://www.tiktok.com/embed/7147377561994038571'},
    {'engagement': {'shares': 0, 'views': 15002, 'likes': 933, 'comments': 8},
     'url': 'https://youtu.be/cINNZJee7as',
     'users': ['OaYPbpZtYVhXODKXCALHa6L7kbA3'],
     'id': 'cINNZJee7as',
      color: { accent: "#2ee9d7", dark: "#134e4a" },
     'thumbnail': 'https://i.ytimg.com/vi/cINNZJee7as/maxresdefault.jpg',
     'author_username': 'The Futur',
     'pid': 'youtube.com_cINNZJee7as',
     'dateAdded': 1668895907906,
     'platform': 'youtube.com',
     'caption': '#shorts \nWant a deeper dive? Typography, Lettering, Sales & Marketing, Social Media and The Business of Design courses available here:\nhttps://thefutur.com/shop\n\n===\n👉Subscribe: https://goo.gl/F2AEbk\n👉See our Academy Channel: https://goo.gl/vB9zoP\n\n🎙 Futur Podcast:  https://thefutur.com/podcast/\n✍️ Futur Blog: https://thefutur.com/blog/\n\n—\nLove the content? Become a sustaining member for $5/mo today.\nhttps://goo.gl/nwekfL\n\nBOOKLIST – \nEssential Reading for Creative Professionals: https://bit.ly/biz-booklist\nEssential Design Books: https://bit.ly/futur-design-books\n\nKits & Proposals:\nhttps://goo.gl/mSjuWQ\n\nVisit our website: \nhttps://www.thefutur.com\n\nFREE resources: \nhttps://goo.gl/Qh6gHr\n—\nWe love getting your letters. Send it here:\nThe Futur\nc/o Chris Do\n1702 Olympic Blvd.\nSanta Monica, CA 90404\nUSA\n\n—\nAFFILIATE LINKS*\n\n🙏 Support The Futur by purchasing through our affiliate links:\nAmazon: http://bit.ly/thefuturishere\nWebflow: https://webflow.grsm.io/thefutur\nRetro Supply Co.: http://bit.ly/2GW8gzR\nCreative Market: https://goo.gl/g4jlTE\nDesign Cuts: http://bit.ly/2GSsAR3\n\n✍️ Sharpen your skills by taking a course, using our affiliate links:\nSchool of Motion: http://bit.ly/futur-som\nBring Your Own Laptop Tutorials: https://byol.me/thefutur\nSkillshare: https://skl.sh/34z8qVj\n\n🎧 Do you like the music? Check out the music libraries we use in our affiliate links below:\nEpidemic Sound: http://share.epidemicsound.com/thefutur\nArtlist: http://bit.ly/2uWdna7\n\nGet our FAVORITE notebook from Baron Fig: https://baronfig.com/?ref=zQoKL\n\n*By making a purchase through any of our affiliate links, we receive a very small commission at no extra cost to you. This helps us on our mission to provide quality education to you. Thank you.\n\n—\nHost: Chris Do\nProducers: Mark Contreras / Jona Garcia\nCinematographers/Editors: Stewart Schuster, Jona Garcia\nLive Editor: Jona Garcia\nFutur Theme Music: Adam Sanborne http://www.adamsanborne.com\nTypefaces: Futura, DIN, Helvetica Now, Calibre, Knockout, Champion Gothic',
     'title': 'You Have No Business Without Sales and Marketing',
     'dateCreated': 1666810814000}
];




export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];
