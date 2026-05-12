export interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  emoji: string;
  gradient: string;
}

export interface Reason {
  id: number;
  text: string;
  emoji: string;
  gradient: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "First Meet",
    subtitle: "Where it all began",
    description:
      "A first meeting that felt ordinary, but turned out to be the sweetest turning point of my life. Like an unexpected anime scene I never saw coming.",
    date: "May 2022",
    emoji: "🌸",
    gradient: "from-pink-500/30 via-rose-400/20 to-purple-500/30",
  },
  {
    id: 2,
    title: "First Date",
    subtitle: "When everything changed",
    description:
      "Sitting across from you, I realized — this is her, the one who will change my life. Your eyes said more than any words ever could.",
    date: "June 2022",
    emoji: "🌙",
    gradient: "from-indigo-400/30 via-purple-400/20 to-pink-500/30",
  },
  {
    id: 3,
    title: "First Anniversary",
    subtitle: "One year full of love",
    description:
      "A whole year of laughter, stories, and moments too precious to forget. I couldn't imagine having gone through any of it without you.",
    date: "May 2023",
    emoji: "💫",
    gradient: "from-amber-400/30 via-rose-400/20 to-pink-500/30",
  },
  {
    id: 4,
    title: "Beautiful Memories",
    subtitle: "Every moment feels magical",
    description:
      "From little adventures to ordinary nights that somehow felt extraordinary. Every frame with you is my absolute favorite.",
    date: "2024",
    emoji: "✨",
    gradient: "from-teal-400/30 via-purple-400/20 to-indigo-400/30",
  },
  {
    id: 5,
    title: "Today & Forever",
    subtitle: "4 years and still going",
    description:
      "Here we stand at year four. And I know — this is only the beginning of the longest and most beautiful chapter we will ever write together.",
    date: "May 2026",
    emoji: "❤️",
    gradient: "from-rose-500/40 via-pink-400/25 to-purple-500/30",
  },
];

// All gallery photos — filenames from /public/images/egakiki/
export const galleryImages: string[] = [
  "AwalPacaran.webp",
  "NontonBioskop.webp",
  "AquariumDate.webp",
  "aquariumdate2.webp",
  "diraindear.webp",
  "diraindear2.webp",
  "raindear2.webp",
  "ditempatpizza.webp",
  "ditempatpizza2.webp",
  "kitangopidinako.webp",
  "kecafedaerahsurken.webp",
  "ngopididaerahcisarua.webp",
  "ngopididaerahcisarua2.webp",
  "kecurugdigede.webp",
  "lembang.webp",
  "lembang2.webp",
  "lembang3.webp",
  "lembang4.webp",
  "lembang5.webp",
  "laripagi.webp",
  "sunmorikewarpat.webp",
  "belanjaaaa.webp",
  "belanjaacariceelana.webp",
  "egaulangtahun.webp",
  "egaulangtahun2.webp",
  "egaulangtahun3.webp",
  "egaulangtahun4.webp",
  "egaulangtahun5.webp",
  "egaulangtahun24.webp",
  "UlangTahunEga24.webp",
  "egaulangtahun25.webp",
  "egaulangtahun25(2).webp",
  "egaulangtahun25(3).webp",
  "Anniversary.webp",
  "BukberPertamaSamaKeluarga.webp",
  "makanmakansamakeluarga ega.webp",
  "Dirumakikimaukeundangan.webp",
  "kikihpbaru.webp",
  "lagimainsamatemen2kiki.webp",
  "mainsamatemenkiki2.webp",
  "laginontonbioskop.webp",
  "undangan.webp",
  "undangan3.webp",
  "undangan6.webp",
  "Undanganriska.webp",
  "undangancoti.webp",
  "undangancoti2.webp",
  "undanganmaul.webp",
  "undanganmaul2.webp",
  "undanganlupatapidimana.webp",
  "keundangan4.webp",
  "lupa.webp",
  "lupaaa.webp",
  "lupaa4.webp",
  "lupadimanatapikikicantik.webp",
  "lupadimanatapikikicantik2.webp",
  "jujurlupa.webp",
];

export const reasons: Reason[] = [
  {
    id: 1,
    text: "Your smile is the sun on my darkest days",
    emoji: "☀️",
    gradient: "from-amber-400/20 to-rose-400/20",
  },
  {
    id: 2,
    text: "You understand me even without words",
    emoji: "🌙",
    gradient: "from-indigo-400/20 to-purple-400/20",
  },
  {
    id: 3,
    text: "Your laugh is the sweetest song I've ever heard",
    emoji: "🎵",
    gradient: "from-pink-400/20 to-lavender/20",
  },
  {
    id: 4,
    text: "You turn ordinary moments into something extraordinary",
    emoji: "✨",
    gradient: "from-teal-400/20 to-cyan-400/20",
  },
  {
    id: 5,
    text: "With you, home is not a place — it's a feeling",
    emoji: "🏡",
    gradient: "from-rose-400/20 to-orange-400/20",
  },
  {
    id: 6,
    text: "You are my calm in the middle of every storm",
    emoji: "🌊",
    gradient: "from-blue-400/20 to-indigo-400/20",
  },
  {
    id: 7,
    text: "Your eyes hold stories I never want to stop reading",
    emoji: "🌟",
    gradient: "from-purple-400/20 to-pink-400/20",
  },
  {
    id: 8,
    text: "You are the main character of my life's anime",
    emoji: "🌸",
    gradient: "from-pink-400/20 to-rose-400/20",
  },
  {
    id: 9,
    text: "Every day with you feels like my favorite scene",
    emoji: "💫",
    gradient: "from-amber-400/20 to-pink-400/20",
  },
];

export const loveLetterText = `My dearest Kiki,

If this love were an anime, you would be the opening theme I look forward to every single day.

Four years have passed since we began this journey. It hasn't always been smooth sailing — but it's in those quiet in-between moments — the silences, the small arguments, the late-night laughter — that I always knew: this is right.

You're not only there for the big moments. You're there in ordinary mornings, in a quick message in the middle of the day, in a glance that needs no words. And that is the thing I am most grateful for.

Thank you for being the one. The one who makes the world feel lighter, more colorful, and more worth living.

Today, four years later, I still choose you. And I want to keep choosing you, for every year that's yet to come.

Forever yours,
Ega ❤️`;
