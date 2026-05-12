export interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  emoji: string;
  gradient: string;
  imagePath?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  gradient: string;
  emoji: string;
  rotate: number;
  imagePath?: string;
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
    subtitle: "Awal dari segalanya",
    description:
      "Pertemuan pertama yang terasa biasa, tapi ternyata menjadi titik balik termanis dalam hidupku. Seperti scene anime yang tak terduga.",
    date: "May 2022",
    emoji: "🌸",
    gradient: "from-pink-500/30 via-rose-400/20 to-purple-500/30",
    imagePath: "/images/egakiki/IMG_0911.JPG",
  },
  {
    id: 2,
    title: "First Date",
    subtitle: "Ketika semuanya berubah",
    description:
      "Saat aku duduk di seberangmu dan menyadari — ini dia, orang yang akan mengubah hidupku. Matamu bicara lebih banyak dari kata-katamu.",
    date: "June 2022",
    emoji: "🌙",
    gradient: "from-lavender/30 via-purple-400/20 to-pink-500/30",
    imagePath: "/images/egakiki/IMG_1039.JPG",
  },
  {
    id: 3,
    title: "First Anniversary",
    subtitle: "Satu tahun penuh cinta",
    description:
      "Setahun penuh tawa, cerita, dan momen yang terlalu berharga untuk dilupakan. Aku tidak bisa membayangkan melewatinya tanpa kamu.",
    date: "May 2023",
    emoji: "💫",
    gradient: "from-amber-400/30 via-rose-400/20 to-pink-500/30",
    imagePath: "/images/egakiki/IMG_1547.JPG",
  },
  {
    id: 4,
    title: "Beautiful Memories",
    subtitle: "Setiap momen terasa ajaib",
    description:
      "Dari perjalanan kecil hingga malam-malam biasa yang terasa istimewa. Setiap frame bersamamu adalah favoritku.",
    date: "2024",
    emoji: "✨",
    gradient: "from-teal-400/30 via-purple-400/20 to-lavender/30",
    imagePath: "/images/egakiki/IMG_1575.JPG",
  },
  {
    id: 5,
    title: "Today & Forever",
    subtitle: "4 tahun dan terus berjalan",
    description:
      "Hari ini kita berdiri di tahun keempat. Dan aku tahu — ini baru awal dari bab terpanjang dan terindah yang pernah kita tulis bersama.",
    date: "May 2026",
    emoji: "❤️",
    gradient: "from-rose-500/40 via-pink-400/25 to-purple-500/30",
    imagePath: "/images/egakiki/IMG_1603.JPG",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Our First Chapter",
    description: "Awal yang indah",
    gradient: "from-pink-500 via-rose-400 to-orange-300",
    emoji: "🌸",
    rotate: -3,
    imagePath: "/images/egakiki/IMG_1546.JPG",
  },
  {
    id: 2,
    title: "Under the Stars",
    description: "Malam bersamamu",
    gradient: "from-indigo-600 via-purple-500 to-pink-400",
    emoji: "🌙",
    rotate: 2,
    imagePath: "/images/egakiki/IMG_1553.JPG",
  },
  {
    id: 3,
    title: "Sweet Moments",
    description: "Setiap detik berharga",
    gradient: "from-amber-400 via-rose-400 to-pink-500",
    emoji: "💕",
    rotate: -2,
    imagePath: "/images/egakiki/IMG_1560.JPG",
  },
  {
    id: 4,
    title: "Adventure Together",
    description: "Petualangan kita",
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
    emoji: "🗺️",
    rotate: 3,
    imagePath: "/images/egakiki/IMG_1568.JPG",
  },
  {
    id: 5,
    title: "Warm Evenings",
    description: "Sore yang hangat",
    gradient: "from-orange-400 via-rose-500 to-pink-600",
    emoji: "🌅",
    rotate: -1,
    imagePath: "/images/egakiki/IMG_1582.JPG",
  },
  {
    id: 6,
    title: "Forever & Always",
    description: "Selamanya bersamamu",
    gradient: "from-purple-600 via-pink-500 to-rose-400",
    emoji: "❤️",
    rotate: 2,
    imagePath: "/images/egakiki/IMG_1595.JPG",
  },
];

export const reasons: Reason[] = [
  {
    id: 1,
    text: "Senyummu adalah matahari di hari tergelapku",
    emoji: "☀️",
    gradient: "from-amber-400/20 to-rose-400/20",
  },
  {
    id: 2,
    text: "Kamu mengerti aku bahkan tanpa kata-kata",
    emoji: "🌙",
    gradient: "from-indigo-400/20 to-purple-400/20",
  },
  {
    id: 3,
    text: "Tawamu adalah lagu paling merdu yang pernah kudengar",
    emoji: "🎵",
    gradient: "from-pink-400/20 to-lavender/20",
  },
  {
    id: 4,
    text: "Kamu membuat momen biasa terasa luar biasa",
    emoji: "✨",
    gradient: "from-teal-400/20 to-cyan-400/20",
  },
  {
    id: 5,
    text: "Bersamamu, rumah bukan soal tempat tapi soal rasa",
    emoji: "🏡",
    gradient: "from-rose-400/20 to-orange-400/20",
  },
  {
    id: 6,
    text: "Kamu adalah ketenangan di tengah segala badai",
    emoji: "🌊",
    gradient: "from-blue-400/20 to-indigo-400/20",
  },
  {
    id: 7,
    text: "Matamu menyimpan cerita yang selalu ingin kubaca",
    emoji: "🌟",
    gradient: "from-purple-400/20 to-pink-400/20",
  },
  {
    id: 8,
    text: "Kamu adalah karakter utama di anime hidupku",
    emoji: "🌸",
    gradient: "from-pink-400/20 to-rose-400/20",
  },
  {
    id: 9,
    text: "Setiap hari denganmu terasa seperti scene favoritku",
    emoji: "💫",
    gradient: "from-amber-400/20 to-pink-400/20",
  },
];

export const loveLetterText = `Kiki yang tersayang,

Kalau cinta ini adalah anime, maka kamu adalah opening yang selalu aku nantikan setiap hari.

Sudah 4 tahun kita berjalan bersama. Bukan perjalanan yang selalu mulus, tapi justru di sela-sela itu — saat kita diam, saat kita berdebat kecil, saat kita tertawa tengah malam — aku selalu merasa: ini benar.

Kamu hadir bukan hanya di momen-momen besar. Kamu hadir di pagi yang biasa, di pesan singkat tengah hari, di tatapan yang tidak perlu kata-kata. Dan itulah hal yang paling aku syukuri.

Terima kasih sudah menjadi orangnya. Orangnya yang bikin dunia terasa lebih ringan, lebih berwarna, dan lebih masuk akal untuk dijalani.

Hari ini, empat tahun kemudian, aku masih memilih kamu. Dan aku ingin terus memilihmu, di setiap tahun yang tersisa.

Selamanya,
Ega ❤️`;
