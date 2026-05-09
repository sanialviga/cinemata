# 🎬 CINEMATA — Review Film React JS

Website review film dengan 30 film, navigasi halaman (5 film/halaman), dan sistem komentar interaktif.

## Fitur
- 30 film dengan poster, genre, tahun, dan rating
- Tampil 5 film per halaman (6 halaman total)
- Klik film untuk melihat detail & sinopsis
- Sistem komentar: nama + rating bintang + teks
- Rating rata-rata otomatis dari komentar

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Project

```
src/
├── data/
│   └── movies.js          # Data 30 film
├── components/
│   ├── MovieCard.jsx       # Kartu film
│   ├── DetailPanel.jsx     # Panel detail film
│   ├── CommentForm.jsx     # Form komentar
│   ├── CommentList.jsx     # Daftar komentar
│   └── StarRating.jsx      # Komponen bintang rating
├── App.jsx                 # Komponen utama
├── App.css                 # Styling
└── index.js                # Entry point
```

## Tech Stack
- React 18
- CSS custom (tanpa library UI)
- Google Fonts: Bebas Neue + DM Sans
