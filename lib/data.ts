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
    subtitle: "Awal dari segalanya",
    description:
      "Pertemuan pertama yang terasa biasa, tapi ternyata menjadi titik balik termanis dalam hidupku. Seperti scene anime yang tak terduga.",
    date: "May 2022",
    emoji: "🌸",
    gradient: "from-pink-500/30 via-rose-400/20 to-purple-500/30",
  },
  {
    id: 2,
    title: "First Date",
    subtitle: "Ketika semuanya berubah",
    description:
      "Saat aku duduk di seberangmu dan menyadari — ini dia, orang yang akan mengubah hidupku. Matamu bicara lebih banyak dari kata-katamu.",
    date: "June 2022",
    emoji: "🌙",
    gradient: "from-indigo-400/30 via-purple-400/20 to-pink-500/30",
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
  },
  {
    id: 4,
    title: "Beautiful Memories",
    subtitle: "Setiap momen terasa ajaib",
    description:
      "Dari perjalanan kecil hingga malam-malam biasa yang terasa istimewa. Setiap frame bersamamu adalah favoritku.",
    date: "2024",
    emoji: "✨",
    gradient: "from-teal-400/30 via-purple-400/20 to-indigo-400/30",
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
