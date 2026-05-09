import rezePoster from "../assets/posters/reze-arc.jpg";

import theRaidPoster from "../assets/posters/the-raid.jpg";

import pengabdiSetanPoster from "../assets/posters/pengabdi-setan.jpg";

import akiraPoster from "../assets/posters/akira.jpg";

import perfectBlue from "../assets/posters/perfect-blue.jpg";

import castleSkyPoster from "../assets/posters/castle-sky.jpg";

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    icon: "🌀",
    color: "#1a1535",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    synopsis:
      "Dom Cobb adalah pencuri yang terampil dalam seni pengambilan rahasia dari alam bawah sadar manusia saat bermimpi. Ia mendapat tawaran terakhir untuk mengembalikan hidupnya — bukan mencuri ide, tapi menanamnya.",
  },

  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    icon: "🚀",
    color: "#0f1a2e",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    synopsis:
      "Tim astronot melakukan perjalanan melalui lubang cacing dekat Saturnus untuk menemukan planet baru yang dapat dihuni manusia demi kelangsungan hidup umat manusia.",
  },

  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    icon: "🦇",
    color: "#1a1010",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    synopsis:
      "Batman menghadapi ancaman terbesar — seorang kriminal anarchist bernama Joker yang menyebarkan kekacauan di Gotham City dengan cara yang belum pernah ada sebelumnya.",
  },

  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    icon: "🪲",
    color: "#1a1a0e",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    synopsis:
      "Keluarga miskin Ki-taek perlahan merasuki kehidupan keluarga kaya Park yang naif dan berbudi luhur. Sebuah insiden tak terduga mengubah segalanya secara dramatis.",
  },

  {
    id: 5,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    icon: "⚡",
    color: "#1a100f",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    synopsis:
      "Para Avengers yang tersisa bergabung kembali untuk membalikkan tindakan Thanos dan memulihkan keseimbangan alam semesta setelah peristiwa Infinity War.",
  },

  {
    id: 6,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    icon: "🃏",
    color: "#1a0a0a",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    synopsis:
      "Arthur Fleck, seorang pria gagal yang diabaikan masyarakat, perlahan berubah menjadi simbol kekacauan di Gotham City.",
  },

  {
    id: 7,
    title: "Dune",
    year: 2021,
    genre: "Sci-Fi",
    icon: "🏜️",
    color: "#1a1505",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
    synopsis:
      "Paul Atreides, pemuda berbakat dari keluarga bangsawan, melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depan keluarganya.",
  },

  {
    id: 8,
    title: "Get Out",
    year: 2017,
    genre: "Horror",
    icon: "👁️",
    color: "#0a1a0a",
    rating: 4.4,
    poster: "https://image.tmdb.org/t/p/w780/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    trailer: "https://www.youtube.com/embed/DzfpyUB60YY",
    synopsis:
      "Chris dan Rose mengunjungi keluarga Rose di pedesaan. Setelah beberapa kejadian aneh, Chris mulai menyadari sesuatu yang mengerikan tersembunyi di balik keramahan keluarga itu.",
  },

  {
    id: 9,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Drama",
    icon: "🌈",
    color: "#1a0f1a",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
    synopsis:
      "Evelyn Wang menemukan bahwa hanya dia yang bisa menyelamatkan multiverse dari sosok jahat yang menginginkan kehancuran semua realitas yang ada.",
  },

  {
    id: 10,
    title: "The Wolf of Wall Street",
    year: 2013,
    genre: "Motivasi",
    icon: "💰",
    color: "#1a140f",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",

    trailer: "https://www.youtube.com/embed/iszwuX1AK6A",

    synopsis:
      "Jordan Belfort membangun kerajaan bisnis besar dari Wall Street dengan ambisi, karisma, dan gaya hidup ekstrem. Film ini menggambarkan perjalanan menuju kesuksesan sekaligus konsekuensi dari keserakahan.",
  },

  {
    id: 11,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    icon: "💼",
    color: "#1a1a0a",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    synopsis:
      "Beberapa kisah kriminal yang saling terhubung di Los Angeles, termasuk dua hitman, seorang petinju, dan sepasang pencuri diner.",
  },

  {
    id: 12,
    title: "Spirited Away",
    year: 2001,
    genre: "Animasi",
    icon: "🐉",
    color: "#0a0f1a",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
    synopsis:
      "Chihiro, gadis 10 tahun, menemukan dirinya terjebak di dunia roh bersama orang tuanya yang telah berubah menjadi babi.",
  },

  {
    id: 13,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    icon: "💊",
    color: "#0a1a0a",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    synopsis:
      "Peretas komputer Thomas Anderson menemukan bahwa kenyataan seperti yang diketahuinya adalah simulasi yang dibuat oleh mesin untuk memperbudak umat manusia.",
  },

  {
    id: 14,
    title: "Oppenheimer",
    year: 2023,
    genre: "Biografi",
    icon: "☢️",
    color: "#1a0f0f",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
    synopsis:
      "Kisah J. Robert Oppenheimer, fisikawan di balik penciptaan bom atom pertama di dunia, dan dampak moralnya yang menghantui seumur hidup.",
  },

  {
    id: 15,
    title: "Avatar",
    year: 2009,
    genre: "Sci-Fi",
    icon: "🌿",
    color: "#0a1a14",
    rating: 4.3,
    poster: "https://image.tmdb.org/t/p/w780/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    synopsis:
      "Jake Sully, mantan marinir, pergi ke planet Pandora dan jatuh cinta dengan cara hidup suku Na'vi, memaksanya memilih antara dua dunia.",
  },

  {
    id: 16,
    title: "Tenet",
    year: 2020,
    genre: "Action",
    icon: "⏮️",
    color: "#0f0a1a",
    rating: 4.2,
    poster: "https://image.tmdb.org/t/p/w780/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    trailer: "https://www.youtube.com/embed/L3pk_TBkihU",
    synopsis:
      "Seorang protagonis yang hanya dikenal sebagai 'The Protagonist' menjelajahi dunia operasi mata-mata yang tersembunyi dengan senjata — inversi waktu.",
  },

  {
    id: 17,
    title: "Black Panther",
    year: 2018,
    genre: "Action",
    icon: "🐾",
    color: "#0a0a1a",
    rating: 4.4,
    poster: "https://image.tmdb.org/t/p/w780/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
    synopsis:
      "T'Challa kembali ke Wakanda untuk mewarisi tahta tetapi menghadapi tantangan dari musuh lama yang mengancam masa depan kerajaannya.",
  },

  {
    id: 18,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    icon: "🥁",
    color: "#1a0a0f",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    trailer: "https://www.youtube.com/embed/7d_jQycdQGo",
    synopsis:
      "Andrew Neiman, drummer muda berbakat, berjuang menghadapi instruktur musik yang kejam demi mencapai kesempurnaan.",
  },

  {
    id: 19,
    title: "1917",
    year: 2019,
    genre: "Perang",
    icon: "🪖",
    color: "#1a1408",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    trailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
    synopsis:
      "Dua prajurit Inggris mendapat misi mustahil — menyeberangi wilayah musuh untuk menyampaikan pesan yang bisa menyelamatkan 1.600 nyawa.",
  },

  {
    id: 20,
    title: "La La Land",
    year: 2016,
    genre: "Musikal",
    icon: "⭐",
    color: "#12101a",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
    synopsis:
      "Seorang pria bermimpi menjadi musisi jazz dan wanita yang bercita-cita menjadi aktris bertemu di Los Angeles dan jatuh cinta.",
  },
  {
    id: 21,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    icon: "🔥",
    color: "#1a0d00",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
    synopsis:
      "Di padang pasir apokaliptik, Max bergabung dengan Furiosa untuk melarikan diri dari tiran Immortan Joe dan sekutunya yang brutal.",
  },

  {
    id: 22,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    icon: "🛸",
    color: "#0a0f14",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g",
    synopsis:
      "Ahli bahasa Louise Banks bekerja dengan militer untuk berkomunikasi dengan alien yang tiba-tiba mendarat di Bumi di 12 lokasi berbeda.",
  },

  {
    id: 23,
    title: "Hereditary",
    year: 2018,
    genre: "Horror",
    icon: "👻",
    color: "#0a0a0a",
    rating: 4.3,
    poster: "https://image.tmdb.org/t/p/w780/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    trailer: "https://www.youtube.com/embed/V6wWKNij_1M",
    synopsis:
      "Keluarga Graham mulai mengungkap sejarah yang menakutkan setelah nenek mereka meninggal, membawa serta rahasia gelap yang menghantui.",
  },

  {
    id: 24,
    title: "Coco",
    year: 2017,
    genre: "Animasi",
    icon: "🎸",
    color: "#1a0a1a",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    trailer: "https://www.youtube.com/embed/Ga6RYejo6Hk",
    synopsis:
      "Miguel, seorang bocah dengan impian menjadi musisi, secara tidak sengaja terperangkap di Tanah Orang Mati dan harus menemukan leluhurnya.",
  },

  {
    id: 25,
    title: "Forrest Gump",
    year: 1994,
    genre: "Motivasi",
    icon: "🏃",
    color: "#142030",
    rating: 4.9,

    poster: "https://image.tmdb.org/t/p/w780/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",

    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",

    synopsis:
      "Forrest Gump, pria sederhana dengan hati tulus, menjalani perjalanan hidup luar biasa yang membawanya melalui berbagai peristiwa penting sejarah Amerika sambil mengajarkan arti cinta, harapan, dan ketulusan.",
  },

  {
    id: 26,
    title: "No Time to Die",
    year: 2021,
    genre: "Action",
    icon: "🔫",
    color: "#0f0f0f",
    rating: 4.1,
    poster: "https://image.tmdb.org/t/p/w780/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    trailer: "https://www.youtube.com/embed/BIhNsAtPbPI",
    synopsis:
      "James Bond keluar dari pensiun setelah temannya diculik oleh musuh misterius yang memiliki teknologi berbahaya.",
  },

  {
    id: 27,
    title: "Soul",
    year: 2020,
    genre: "Animasi",
    icon: "🎷",
    color: "#0a0a14",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    trailer: "https://www.youtube.com/embed/xOsLIiBStEs",
    synopsis:
      "Seorang guru musik menemukan jiwanya terlepas dari tubuhnya sebelum penampilan terbesar dalam hidupnya dan harus kembali.",
  },

  {
    id: 28,
    title: "Dunkirk",
    year: 2017,
    genre: "Perang",
    icon: "⛵",
    color: "#0a0f14",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    trailer: "https://www.youtube.com/embed/F-eMt3SrfFU",
    synopsis:
      "Kisah evakuasi tentara Sekutu dari pantai Dunkirk, Prancis, yang diceritakan dari tiga sudut pandang: darat, laut, dan udara.",
  },

  {
    id: 29,
    title: "Knives Out",
    year: 2019,
    genre: "Misteri",
    icon: "🔪",
    color: "#1a0f0a",
    rating: 4.6,
    poster: "https://image.tmdb.org/t/p/w780/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    trailer: "https://www.youtube.com/embed/qGqiHJTsRkQ",
    synopsis:
      "Detektif jenius Benoit Blanc menyelidiki kematian misterius seorang penulis kaya raya yang ditemukan sehari setelah pesta ulang tahunnya.",
  },

  {
    id: 30,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Komedi",
    icon: "🏨",
    color: "#1a0a14",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk",
    synopsis:
      "Petualangan M. Gustave, concierge karismatik dari hotel mewah Eropa, yang terseret dalam misteri pencurian lukisan dan perebutan warisan.",
  },
  {
    id: 31,
    title: "Your Name",
    year: 2016,
    genre: "Anime",
    icon: "☄️",
    color: "#1a1020",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/q719jXXEzOoYaps6babgKnONONX.jpg",
    trailer: "https://www.youtube.com/embed/xU47nhruN-Q",
    synopsis:
      "Mitsuha dan Taki, dua remaja yang hidup di tempat berbeda, tiba-tiba saling bertukar tubuh secara misterius. Hubungan mereka perlahan berkembang menjadi perjalanan emosional yang mengubah takdir keduanya.",
  },

  {
    id: 32,
    title: "A Silent Voice",
    year: 2016,
    genre: "Anime",
    icon: "🌸",
    color: "#141824",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
    trailer: "https://www.youtube.com/embed/nfK6UgLra7g",
    synopsis:
      "Shoya Ishida mencoba menebus kesalahan masa lalunya setelah pernah merundung Shoko Nishimiya, seorang gadis tuli. Kisah menyentuh tentang penyesalan, depresi, dan kesempatan kedua.",
  },

  {
    id: 33,
    title: "Suzume",
    year: 2022,
    genre: "Anime",
    icon: "🚪",
    color: "#102038",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
    trailer: "https://www.youtube.com/embed/5pTcio2hTSw",
    synopsis:
      "Suzume bertemu pria misterius yang mencari pintu-pintu aneh di seluruh Jepang. Bersama-sama mereka harus menutup pintu tersebut sebelum bencana menghancurkan dunia.",
  },

  {
    id: 34,
    title: "Weathering With You",
    year: 2019,
    genre: "Anime",
    icon: "🌧️",
    color: "#102030",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
    trailer: "https://www.youtube.com/embed/Q6iK6DjV_iE",
    synopsis:
      "Hodaka bertemu Hina, gadis yang memiliki kemampuan mengendalikan cuaca. Di tengah hujan tanpa akhir di Tokyo, hubungan mereka berkembang dalam kisah romantis yang emosional.",
  },

  {
    id: 35,
    title: "The Boy and the Heron",
    year: 2023,
    genre: "Anime",
    icon: "🪽",
    color: "#141a20",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/jDQPkgzerGophKRRn7MKm071vCU.jpg",
    trailer: "https://www.youtube.com/embed/f7EDFdA10pg",
    synopsis:
      "Mahito, seorang anak laki-laki yang kehilangan ibunya selama perang, memasuki dunia misterius bersama seekor bangau abu-abu yang bisa berbicara. Perjalanan ini mengubah hidup dan cara pandangnya terhadap kehidupan.",
  },

  {
    id: 36,
    title: "Princess Mononoke",
    year: 1997,
    genre: "Anime",
    icon: "🐺",
    color: "#1a140f",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    trailer: "https://www.youtube.com/embed/4OiMOHRDs14",
    synopsis:
      "Ashitaka terjebak di tengah perang antara manusia dan roh hutan. Sebuah kisah epik tentang alam, keserakahan manusia, dan keseimbangan dunia.",
  },

  {
    id: 37,
    title: "Howl's Moving Castle",
    year: 2004,
    genre: "Anime",
    icon: "🏰",
    color: "#201810",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/23hUJh7JdO23SpgUB5oiFDQk2wX.jpg",
    trailer: "https://www.youtube.com/embed/iwROgK94zcM",
    synopsis:
      "Sophie dikutuk menjadi wanita tua dan mencari bantuan dari penyihir misterius bernama Howl yang tinggal di kastil berjalan ajaib.",
  },

  {
    id: 38,
    title: "Demon Slayer: Mugen Train",
    year: 2020,
    genre: "Anime",
    icon: "🔥",
    color: "#200f0f",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    trailer: "https://www.youtube.com/embed/ATJYac_dORw",
    synopsis:
      "Tanjiro dan teman-temannya bergabung dengan Hashira Api Kyojuro Rengoku untuk menghadapi iblis mematikan di kereta misterius yang menelan banyak korban.",
  },

  {
    id: 39,
    title: "Jujutsu Kaisen 0",
    year: 2021,
    genre: "Anime",
    icon: "⚔️",
    color: "#141414",
    rating: 4.7,
    poster: "https://image.tmdb.org/t/p/w780/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
    trailer: "https://www.youtube.com/embed/UPRqnFnnrr8",
    synopsis:
      "Yuta Okkotsu dihantui roh sahabat masa kecilnya yang berubah menjadi kutukan kuat. Ia kemudian masuk sekolah Jujutsu untuk belajar mengendalikan kekuatan tersebut.",
  },

  {
    id: 40,
    title: "Chainsaw Man: Reze Arc",
    year: 2025,
    genre: "Anime",
    icon: "🪚",
    color: "#1a1010",
    rating: 4.9,
    poster: rezePoster,
    trailer: "https://www.youtube.com/embed/VPB_J6Egi28",
    synopsis:
      "Denji bertemu Reze, gadis misterius yang perlahan mengubah hidupnya. Namun di balik hubungan romantis itu tersembunyi ancaman besar yang akan mengguncang dunia Devil Hunter.",
  },

  {
    id: 41,
    title: "Train to Busan",
    year: 2016,
    genre: "Thriller",
    icon: "🚄",
    color: "#141820",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg",
    trailer: "https://www.youtube.com/embed/pyWuHv2-Abk",
    synopsis:
      "Wabah zombie menyebar dengan cepat di Korea Selatan saat kereta menuju Busan melaju. Seorang ayah berusaha menyelamatkan putrinya di tengah kekacauan mematikan.",
  },

  {
    id: 42,
    title: "The Raid",
    year: 2011,
    genre: "Action",
    icon: "🥷",
    color: "#161010",
    rating: 4.9,
    poster: theRaidPoster,
    trailer: "https://www.youtube.com/embed/m6Q7KnXpNOg",
    synopsis:
      "Tim SWAT terjebak di apartemen milik bandar narkoba paling berbahaya dan harus bertahan hidup melawan pasukan kriminal brutal.",
  },

  {
    id: 43,
    title: "Pengabdi Setan",
    year: 2017,
    genre: "Horror",
    icon: "🕯️",
    color: "#120c0c",
    rating: 4.7,
    poster: pengabdiSetanPoster,
    trailer: "https://www.youtube.com/embed/0hSptYxWB3E",
    synopsis:
      "Setelah ibunya meninggal, sebuah keluarga mulai mengalami teror supranatural mengerikan yang mengungkap rahasia kelam masa lalu mereka.",
  },

  {
    id: 44,
    title: "Ghost in the Shell",
    year: 2017,
    genre: "Sci-Fi",
    icon: "🤖",
    color: "#101828",
    rating: 4.5,
    poster: "https://image.tmdb.org/t/p/w780/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
    trailer: "https://www.youtube.com/embed/G4VmJcZR0Yg",
    synopsis:
      "Mayor Mira Killian adalah manusia cyber-enhanced yang memburu kelompok kriminal berbahaya sambil mencari kebenaran tentang masa lalunya.",
  },

  {
    id: 45,
    title: "Akira",
    year: 1988,
    genre: "Anime",
    icon: "🏍️",
    color: "#1a0f0f",
    rating: 4.8,
    poster: akiraPoster,
    trailer: "https://www.youtube.com/embed/nA8KmHC2Z-g",
    synopsis:
      "Di Neo-Tokyo yang kacau, seorang remaja memperoleh kekuatan psikis luar biasa yang mengancam menghancurkan kota.",
  },

  {
    id: 46,
    title: "Perfect Blue",
    year: 1997,
    genre: "Anime",
    icon: "🎤",
    color: "#181018",
    rating: 4.8,
    poster: perfectBlue,
    trailer: "https://www.youtube.com/embed/Olsdzqe2y9Y",
    synopsis:
      "Seorang mantan idol Jepang mengalami gangguan psikologis ketika kehidupannya mulai bercampur antara realitas dan ilusi.",
  },

  {
    id: 47,
    title: "Castle in the Sky",
    year: 1986,
    genre: "Anime",
    icon: "🏰",
    color: "#1a2030",
    rating: 4.8,
    poster: castleSkyPoster,
    trailer: "https://www.youtube.com/embed/8ykEy-yPBFc",
    synopsis:
      "Dua anak muda memulai petualangan besar untuk menemukan kota terapung legendaris bernama Laputa sambil dikejar pasukan militer dan bajak laut udara.",
  },

  {
    id: 48,
    title: "Oldboy",
    year: 2003,
    genre: "Thriller",
    icon: "🔨",
    color: "#1a1410",
    rating: 4.8,
    poster: "https://image.tmdb.org/t/p/w780/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    trailer: "https://www.youtube.com/embed/2HkjrJ6IK5E",
    synopsis:
      "Seorang pria dipenjara secara misterius selama bertahun-tahun tanpa alasan dan dibebaskan tiba-tiba untuk mencari dalang di balik hidupnya yang hancur.",
  },

  {
    id: 49,
    title: "Grave of the Fireflies",
    year: 1988,
    genre: "Anime",
    icon: "🔥",
    color: "#201410",
    rating: 4.9,
    poster: "https://image.tmdb.org/t/p/w780/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    trailer: "https://www.youtube.com/embed/4vPeTSRd580",
    synopsis:
      "Dua saudara berusaha bertahan hidup di Jepang pada akhir Perang Dunia II dalam kisah emosional tentang keluarga, kehilangan, dan harapan.",
  },

  {
    id: 50,
    title: "Pirates of the Caribbean",
    year: 2003,
    genre: "Adventure",
    icon: "🏴‍☠️",
    color: "#1a140f",
    rating: 4.9,

    poster: "https://image.tmdb.org/t/p/w780/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",

    trailer: "https://www.youtube.com/embed/naQr0uTrH_s",

    synopsis:
      "Kapten Jack Sparrow memulai petualangan legendaris melawan kutukan bajak laut, monster laut, dan perebutan harta karun dalam seri petualangan epik Pirates of the Caribbean.",
  },

  {
    id: 51,
    title: "Pirates of the Caribbean: At World's End",
    year: 2007,
    genre: "Adventure",
    icon: "🏴‍☠️",
    color: "#18120f",
    rating: 4.7,

    poster: "https://image.tmdb.org/t/p/w780/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",

    trailer: "https://www.youtube.com/embed/HKSZtp_OGHY",

    synopsis:
      "Will Turner, Elizabeth Swann, dan Kapten Barbossa berlayar ke ujung dunia untuk menyelamatkan Jack Sparrow dan menghadapi armada East India Trading Company.",
  },
  {
    id: 52,
    title: "Frozen",
    year: 2013,
    genre: "Animasi",
    icon: "❄️",
    color: "#102030",
    rating: 4.7,

    poster: "https://image.tmdb.org/t/p/w780/mbPrrbt8bSLcHSBCHnRclPlMZPl.jpg",

    trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",

    synopsis:
      "Anna memulai perjalanan berbahaya untuk menemukan kakaknya Elsa yang memiliki kekuatan es misterius dan tanpa sengaja membekukan kerajaan Arendelle.",
  },

  {
    id: 53,
    title: "Moana",
    year: 2016,
    genre: "Animasi",
    icon: "🌊",
    color: "#102840",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",

    trailer: "https://www.youtube.com/embed/LKFuXETZUsI",

    synopsis:
      "Moana, gadis pemberani dari pulau Polynesia, berlayar melintasi lautan untuk menyelamatkan rakyatnya bersama demigod Maui.",
  },

  {
    id: 54,
    title: "Zootopia",
    year: 2016,
    genre: "Animasi",
    icon: "🦊",
    color: "#182028",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",

    trailer: "https://www.youtube.com/embed/jWM0ct-OLsM",

    synopsis:
      "Judy Hopps, kelinci polisi pertama di Zootopia, bekerja sama dengan rubah penipu Nick Wilde untuk mengungkap misteri besar di kota hewan modern.",
  },

  {
    id: 55,
    title: "Big Hero 6",
    year: 2014,
    genre: "Animasi",
    icon: "🤖",
    color: "#1a1018",
    rating: 4.7,

    poster: "https://image.tmdb.org/t/p/w780/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",

    trailer: "https://www.youtube.com/embed/z3biFxZIJOQ",

    synopsis:
      "Hiro Hamada dan robot medis Baymax membentuk tim superhero teknologi untuk menghentikan ancaman berbahaya di kota San Fransokyo.",
  },

  {
    id: 56,
    title: "Inside Out",
    year: 2015,
    genre: "Animasi",
    icon: "🧠",
    color: "#201028",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",

    trailer: "https://www.youtube.com/embed/seMwpP0yeu4",

    synopsis:
      "Emosi di dalam pikiran Riley bekerja sama mengatur kehidupannya ketika ia harus menghadapi perubahan besar dalam hidupnya.",
  },
  {
    id: 57,
    title: "Iron Man",
    year: 2008,
    genre: "Marvel",
    icon: "🦾",
    color: "#1a120f",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",

    trailer: "https://www.youtube.com/embed/8ugaeA-nMTc",

    synopsis:
      "Tony Stark, miliarder jenius pembuat senjata, menciptakan armor canggih setelah diculik dan berubah menjadi superhero Iron Man.",
  },

  {
    id: 58,
    title: "Captain America: The Winter Soldier",
    year: 2014,
    genre: "Marvel",
    icon: "🛡️",
    color: "#101828",
    rating: 4.8,

    poster: "https://image.tmdb.org/t/p/w780/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",

    trailer: "https://www.youtube.com/embed/7SlILk2WMTI",

    synopsis:
      "Steve Rogers menghadapi konspirasi besar dalam S.H.I.E.L.D sambil berhadapan dengan pembunuh misterius bernama Winter Soldier.",
  },

  {
    id: 59,
    title: "Doctor Strange",
    year: 2016,
    genre: "Marvel",
    icon: "🪬",
    color: "#1a1020",
    rating: 4.7,

    poster: "https://image.tmdb.org/t/p/w780/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",

    trailer: "https://www.youtube.com/embed/HSzx-zryEgM",

    synopsis:
      "Stephen Strange menemukan dunia sihir dan multiverse setelah kecelakaan menghancurkan kariernya sebagai ahli bedah terkenal.",
  },

  {
    id: 60,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Marvel",
    icon: "🕷️",
    color: "#141018",
    rating: 4.9,

    poster: "https://image.tmdb.org/t/p/w780/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",

    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",

    synopsis:
      "Peter Parker meminta bantuan Doctor Strange untuk menghapus identitasnya dari ingatan dunia, namun kekacauan multiverse justru terjadi.",
  },
];

export default MOVIES;
