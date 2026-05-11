import React, { useState, useEffect, useRef, useMemo } from "react";

import axios from "axios";

import "./App.css";

import MOVIES from "./data/movies";

import MovieCard from "./components/MovieCard";

import DetailPanel from "./components/DetailPanel";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const API_URL = "/api";

// ============================================================
// 🎬 Configuration
// ============================================================

const FILMS_PER_PAGE = 5;

// ==========================================================
// Shuffle Movies
// ==========================================================

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
// ==========================================================
// 🎬 Advanced AI Sentiment Analyzer V4
// CINEMATA — Human-Like Indonesian Sentiment Detection
// ==========================================================

const analyzeSentiment = (text) => {
  // ========================================================
  // Normalize Text
  // ========================================================

  const lowerText = text.toLowerCase().trim();

  // ========================================================
  // Strong Positive Words
  // ========================================================

  const positiveWords = [
    "bagus",
    "bagus banget",
    "sangat bagus",
    "keren",
    "keren banget",
    "mantap",
    "mantul",
    "luar biasa",
    "amazing",
    "awesome",
    "good",
    "great",
    "best",
    "perfect",
    "masterpiece",
    "epic",
    "gokil",
    "solid",
    "berkelas",
    "fantastis",
    "memukau",
    "luar biasa keren",
    "hebat",
    "sangat hebat",
    "menarik",
    "seru",
    "seru banget",
    "menegangkan",
    "emosional",
    "menyentuh",
    "mengharukan",
    "inspiratif",
    "memotivasi",
    "mind blowing",
    "mindblowing",
    "pecah",
    "luar biasa indah",
    "sinematografi bagus",
    "visual bagus",
    "visualnya keren",
    "akting bagus",
    "acting bagus",
    "soundtrack bagus",
    "cerita bagus",
    "alur bagus",
    "plot bagus",
    "plot twist keren",
    "ending bagus",
    "ending keren",
    "recommended",
    "recommended banget",
    "wajib ditonton",
    "worth it",
    "worth it banget",
    "top tier",
    "peak cinema",
    "all time favorite",
    "favorite",
    "favorit",
    "suka",
    "suka banget",
    "love",
    "i love",
    "i like",
    "sangat suka",
    "menyenangkan",
    "menghibur",
    "fun",
    "cool",
    "fire",
    "lit",
    "peak",
    "peak movie",
    "10/10",
    "9/10",
    "8/10",
    "goated",
    "ikonik",
    "legend",
    "legendaris",
    "rapi",
    "luwes",
    "natural",
    "realistis",
    "cinematic",
    "artistik",
    "indah",
    "cantik",
    "memorable",
    "berkesan",
    "sangat berkesan",
    "tidak mengecewakan",
    "tidak membosankan",
    "tidak jelek",
    "tidak buruk",
    "bagus sih",
    "lumayan bagus",
    "cukup bagus",
    "lumayan seru",
    "bikin nagih",
    "nagih",
    "kereeen",
    "baguuus",
    "mantaaaap",
  ];

  // ========================================================
  // Strong Negative Words
  // ========================================================

  const negativeWords = [
    "jelek",
    "jelek banget",
    "buruk",
    "parah",
    "sangat buruk",
    "membosankan",
    "bosan",
    "bosan banget",
    "ngantuk",
    "bikin ngantuk",
    "tidak menarik",
    "ga menarik",
    "gak menarik",
    "kurang menarik",
    "flat",
    "hambar",
    "cringe",
    "alay",
    "norak",
    "lebay",
    "gagal",
    "gagal total",
    "hancur",
    "berantakan",
    "acak acakan",
    "trash",
    "worst",
    "bad",
    "terrible",
    "awful",
    "sampah",
    "receh",
    "murahan",
    "payah",
    "biasa aja",
    "b aja",
    "mid",
    "mediocre",
    "tidak bagus",
    "ga bagus",
    "gak bagus",
    "kurang bagus",
    "tidak seru",
    "ga seru",
    "gak seru",
    "kurang seru",
    "tidak jelas",
    "membingungkan",
    "plot hole",
    "alur berantakan",
    "cerita jelek",
    "plot jelek",
    "ending jelek",
    "ending buruk",
    "acting jelek",
    "akting jelek",
    "visual jelek",
    "cgi jelek",
    "efek jelek",
    "sound jelek",
    "dialog aneh",
    "tidak natural",
    "maksa",
    "terlalu panjang",
    "kepanjangan",
    "terlalu lambat",
    "slow banget",
    "lambat",
    "dragging",
    "overrated",
    "tidak worth it",
    "zonk",
    "kecewa",
    "kecewa berat",
    "ekspektasi tinggi hasilnya jelek",
    "tidak sesuai ekspektasi",
    "menyesal nonton",
    "buang waktu",
    "skip aja",
    "ga worth it",
    "gak worth it",
    "2/10",
    "3/10",
    "4/10",
    "1/10",
    "payah banget",
    "jeleeeek",
    "basi",
    "copy paste",
    "template banget",
    "tidak recommended",
    "ga recommended",
    "gak recommended",
  ];

  // ========================================================
  // Strong Positive Expressions
  // ========================================================

  const strongPositivePatterns = [
    "film terbaik",
    "salah satu film terbaik",
    "masterpiece banget",
    "best movie ever",
    "absolute cinema",
    "peak fiction",
    "peak movie",
    "love this movie",
    "suka banget film ini",
    "nangis karena bagus",
    "terharu banget",
    "bener bener keren",
    "gila bagus banget",
    "perfect banget",
  ];

  // ========================================================
  // Strong Negative Expressions
  // ========================================================

  const strongNegativePatterns = [
    "film terburuk",
    "worst movie ever",
    "jelek banget sumpah",
    "parah banget",
    "sangat mengecewakan",
    "tidak layak ditonton",
    "buang buang waktu",
    "sampah banget",
    "gagal total",
    "ga ngerti bagusnya dimana",
    "tidak masuk akal",
  ];

  // ========================================================
  // Negation Detection
  // ========================================================

  const negations = ["tidak", "bukan", "ga", "gak", "tak", "kurang"];

  // ========================================================
  // Score Initialization
  // ========================================================

  let positiveScore = 0;
  let negativeScore = 0;

  // ========================================================
  // Strong Positive Boost
  // ========================================================

  strongPositivePatterns.forEach((pattern) => {
    if (lowerText.includes(pattern)) {
      positiveScore += 4;
    }
  });

  // ========================================================
  // Strong Negative Boost
  // ========================================================

  strongNegativePatterns.forEach((pattern) => {
    if (lowerText.includes(pattern)) {
      negativeScore += 4;
    }
  });

  // ========================================================
  // Positive Detection
  // ========================================================

  positiveWords.forEach((word) => {
    if (lowerText.includes(word)) {
      positiveScore += 1;

      // Intensifier Boost
      if (
        lowerText.includes("banget " + word) ||
        lowerText.includes("sangat " + word) ||
        lowerText.includes(word + " banget")
      ) {
        positiveScore += 1;
      }
    }
  });

  // ========================================================
  // Negative Detection
  // ========================================================

  negativeWords.forEach((word) => {
    if (lowerText.includes(word)) {
      negativeScore += 1;

      // Intensifier Boost
      if (
        lowerText.includes("banget " + word) ||
        lowerText.includes("sangat " + word) ||
        lowerText.includes(word + " banget")
      ) {
        negativeScore += 1;
      }
    }
  });

  // ========================================================
  // Negation Logic
  // ========================================================

  negations.forEach((negation) => {
    positiveWords.forEach((word) => {
      if (lowerText.includes(`${negation} ${word}`)) {
        positiveScore -= 1;
        negativeScore += 2;
      }
    });

    negativeWords.forEach((word) => {
      if (lowerText.includes(`${negation} ${word}`)) {
        negativeScore -= 1;
        positiveScore += 2;
      }
    });
  });

  // ========================================================
  // Emoji Sentiment
  // ========================================================

  const positiveEmoji = [
    "😍",
    "🔥",
    "❤️",
    "💯",
    "🥹",
    "😭",
    "👏",
    "👍",
    "🤩",
    "✨",
  ];

  const negativeEmoji = ["💀", "😴", "🤮", "👎", "😡", "🤡", "💩", "😒", "🙄"];

  positiveEmoji.forEach((emoji) => {
    if (lowerText.includes(emoji)) {
      positiveScore += 1;
    }
  });

  negativeEmoji.forEach((emoji) => {
    if (lowerText.includes(emoji)) {
      negativeScore += 1;
    }
  });

  // ========================================================
  // Final Decision
  // ========================================================

  if (positiveScore > negativeScore) {
    return "positif";
  }

  if (negativeScore > positiveScore) {
    return "negatif";
  }

  return "netral";
};

// ============================================================
// 🎬 App Component
// ============================================================

function App() {
  // ==========================================================
  // Pagination State
  // ==========================================================

  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================================
  // Randomized Movies
  // ==========================================================

  const [randomMovies] = useState(() => shuffleArray(MOVIES));

  // ==========================================================
  // Selected Movie
  // ==========================================================

  const [selectedMovie, setSelectedMovie] = useState(null);

  // ==========================================================
  // Theme Mode
  // ==========================================================

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // ==========================================================
  // Theme Helpers
  // ==========================================================

  const isLight = theme === "light";

  const cardBackground = isLight
    ? "rgba(255,255,255,0.82)"
    : "rgba(255,255,255,0.04)";

  const borderColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)";

  const textColor = isLight ? "#0f172a" : "#ffffff";

  const subTextColor = isLight ? "#475569" : "rgba(255,255,255,0.72)";

  // ==========================================================
  // Search & Genre
  // ==========================================================

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedGenre, setSelectedGenre] = useState("All");

  // ==========================================================
  // Hovered Movie
  // ==========================================================

  const [hoveredMovie, setHoveredMovie] = useState(null);

  // ==========================================================
  // Trailer Modal
  // ==========================================================

  const [showTrailer, setShowTrailer] = useState(false);

  const [trailerMovie, setTrailerMovie] = useState(null);

  // ==========================================================
  // Refs
  // ==========================================================

  const detailPanelRef = useRef(null);

  const commentsSectionRef = useRef(null);

  // ==========================================================
  // Comments State
  // ==========================================================

  const [comments, setComments] = useState({});

  // ==========================================================
  // Load Reviews from PostgreSQL
  // ==========================================================

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/reviews`,

          {
            timeout: 10000,
          }
        );

        const reviews = response.data;

        // ====================================================
        // Group Reviews by Movie ID
        // ====================================================

        const grouped = {};

        reviews.forEach((review) => {
          if (!grouped[review.movie_id]) {
            grouped[review.movie_id] = [];
          }

          grouped[review.movie_id].push({
            id: review.id,

            username: review.username,

            text: review.comment,

            rating: review.rating,

            sentiment: review.sentiment,

            confidence: review.confidence,

            createdAt: review.created_at,
          });
        });

        setComments(grouped);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // ==========================================================
  // Save Theme
  // ==========================================================

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ==========================================================
  // Auto Rotate Hero Banner
  // ==========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) =>
        prev === randomMovies.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  // ==========================================================
  // Movie Search Filter
  // ==========================================================
  const genres = ["All", ...new Set(randomMovies.map((movie) => movie.genre))];

  const filteredMovies = randomMovies.filter((movie) => {
    const keyword = searchTerm.toLowerCase();

    // ========================================================
    // Search Match
    // ========================================================

    const matchesSearch =
      movie.title.toLowerCase().includes(keyword) ||
      movie.genre.toLowerCase().includes(keyword) ||
      movie.year.toString().includes(keyword);

    // ========================================================
    // Genre Match
    // ========================================================

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  // ==========================================================
  // Pagination
  // ==========================================================

  const totalPages = Math.ceil(filteredMovies.length / FILMS_PER_PAGE);

  const pageMovies = filteredMovies.slice(
    (currentPage - 1) * FILMS_PER_PAGE,

    currentPage * FILMS_PER_PAGE
  );

  // ==========================================================
  // Pagination Scroll Position
  // ==========================================================

  const paginationScrollY = useRef(0);

  // ==========================================================
  // Total Comments Counter
  // ==========================================================

  const totalComments = Object.values(comments).reduce(
    (sum, movieComments) => sum + movieComments.length,

    0
  );

  // ==========================================================
  // AI Movie Ranking
  // ==========================================================

  const movieAnalytics = randomMovies.map((movie) => {
    const movieComments = comments[movie.id] || [];

    // ========================================================
    // Positive Comments
    // ========================================================

    const positiveComments = movieComments.filter(
      (c) => c.sentiment === "positif"
    );

    // ========================================================
    // Negative Comments
    // ========================================================

    const negativeComments = movieComments.filter(
      (c) => c.sentiment === "negatif"
    );

    // ========================================================
    // AI Positive Score
    // ========================================================

    const totalComments = positiveComments.length + negativeComments.length;

    const positive =
      totalComments > 0
        ? Math.round((positiveComments.length / totalComments) * 100)
        : 50;

    return {
      ...movie,

      totalComments: movieComments.length,

      positive,
    };
  });
  // ==========================================================
  // Genre Analytics
  // ==========================================================

  const genreStats = {};

  randomMovies.forEach((movie) => {
    if (!genreStats[movie.genre]) {
      genreStats[movie.genre] = 0;
    }

    genreStats[movie.genre]++;
  });

  const genreChartData = Object.entries(genreStats).map(([genre, count]) => ({
    genre,

    count,
  }));

  // ==========================================================
  // Sentiment Analytics
  // ==========================================================

  const sentimentChartData = [
    {
      name: "Positive",

      value: movieAnalytics.filter((m) => (m.positive || 0) >= 70).length,
    },

    {
      name: "Neutral",

      value: movieAnalytics.filter((m) => {
        const score = m.positive || 0;

        return score >= 40 && score < 70;
      }).length,
    },

    {
      name: "Negative",

      value: movieAnalytics.filter((m) => (m.positive || 0) < 40).length,
    },
  ];
  console.log(sentimentChartData);

  // ==========================================================
  // Trending Movies
  // ==========================================================

  const trendingMovies = [...movieAnalytics]

    .sort((a, b) => b.totalComments - a.totalComments)

    .slice(0, 5);

  // ==========================================================
  // AI Ranking Movies
  // ==========================================================

  const aiRankingMovies = [...movieAnalytics]

    .filter((movie) => movie.totalComments > 0)

    .sort((a, b) => b.positive - a.positive)

    .slice(0, 5);

  // ==========================================================
  // Featured Movie Rotation
  // ==========================================================

  const [featuredIndex, setFeaturedIndex] = useState(() =>
    Math.floor(Math.random() * randomMovies.length)
  );

  const featuredMovie = randomMovies[featuredIndex];

  // ==========================================================
  // Dynamic Ambient Background
  // ==========================================================

  const ambientColors = {
    // ================================================
    // Action
    // ================================================

    Action: "rgba(249,115,22,0.22)",

    // ================================================
    // Adventure
    // ================================================

    Adventure: "rgba(14,165,233,0.22)",

    // ================================================
    // Animation
    // ================================================

    Animation: "rgba(56,189,248,0.20)",

    // ================================================
    // Anime
    // ================================================

    Anime: "rgba(236,72,153,0.22)",

    // ================================================
    // Comedy
    // ================================================

    Comedy: "rgba(250,204,21,0.20)",

    // ================================================
    // Crime
    // ================================================

    Crime: "rgba(239,68,68,0.18)",

    // ================================================
    // Drama
    // ================================================

    Drama: "rgba(168,85,247,0.22)",

    // ================================================
    // Fantasy
    // ================================================

    Fantasy: "rgba(192,132,252,0.22)",

    // ================================================
    // Horror
    // ================================================

    Horror: "rgba(255,40,40,0.22)",

    // ================================================
    // Mystery
    // ================================================

    Mystery: "rgba(99,102,241,0.20)",

    // ================================================
    // Romance
    // ================================================

    Romance: "rgba(244,114,182,0.22)",

    // ================================================
    // Sci-Fi
    // ================================================

    "Sci-Fi": "rgba(59,130,246,0.24)",

    // ================================================
    // Thriller
    // ================================================

    Thriller: "rgba(34,197,94,0.20)",

    // ================================================
    // War
    // ================================================

    War: "rgba(120,113,108,0.22)",

    // ================================================
    // Motivation
    // ================================================

    Motivation: "rgba(16,185,129,0.22)",
  };

  // ==========================================================
  // Active Ambient Glow
  // ==========================================================

  const ambientGlow =
    ambientColors[featuredMovie?.genre] || "rgba(59,130,246,0.18)";

  // ==========================================================
  // Movie Selection
  // ==========================================================

  const handleSelectMovie = (movie) => {
    // ========================================================
    // Close if same movie clicked
    // ========================================================

    if (selectedMovie?.id === movie.id) {
      setSelectedMovie(null);

      return;
    }

    // ========================================================
    // Open selected movie
    // ========================================================

    setSelectedMovie(movie);

    // ========================================================
    // Smooth Scroll to Detail Panel
    // ========================================================

    setTimeout(() => {
      const element = detailPanelRef.current;

      if (element) {
        // ====================================================
        // Offset Scroll
        // ====================================================

        const offset = -80;

        const y =
          element.getBoundingClientRect().top + window.pageYOffset + offset;

        // ====================================================
        // Smooth Scroll
        // ====================================================

        window.scrollTo({
          top: y,

          behavior: "smooth",
        });
      }
    }, 120);
  };

  // ==========================================================
  // Add Comment
  // ==========================================================

  const handleAddComment = async (comment) => {
    if (!selectedMovie) return;

    try {
      // ======================================================
      // Send Review to Backend
      // ======================================================

      const response = await axios.post(
        `${API_URL}/reviews`,

        {
          movie_id: selectedMovie.id,

          username: comment.username,

          comment: comment.text,

          rating: comment.rating,
        },

        {
          timeout: 10000,
        }
      );

      const savedReview = response.data;

      // ======================================================
      // Save to Frontend State
      // ======================================================

      const formattedComment = {
        id: savedReview.id,

        username: savedReview.username,

        text: savedReview.comment,

        rating: savedReview.rating,

        sentiment: savedReview.sentiment,

        confidence: savedReview.confidence,

        createdAt: savedReview.created_at,
      };

      setComments((prev) => ({
        ...prev,

        [selectedMovie.id]: [
          ...(prev[selectedMovie.id] || []),

          formattedComment,
        ],
      }));

      // ======================================================
      // Auto Scroll
      // ======================================================

      setTimeout(() => {
        const element = commentsSectionRef.current;

        if (element) {
          const offset = -100;

          const y =
            element.getBoundingClientRect().top + window.pageYOffset + offset;

          window.scrollTo({
            top: y,

            behavior: "smooth",
          });
        }
      }, 250);
    } catch (error) {
      console.error("Failed to save review:", error);

      alert("Gagal menyimpan review.\nPastikan backend berjalan.");
    }
  };

  // ==========================================================
  // Pagination Handler
  // ==========================================================

  const handleChangePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    setSelectedMovie(null);
  };

  // ==========================================================
  // Render
  // ==========================================================

  return (
    <div
      className={`app-container ${theme}`}
      style={{
        minHeight: "100vh",

        background: `

      radial-gradient(
        circle at top right,

        ${ambientGlow},

        transparent 38%
      ),

      radial-gradient(
        circle at bottom left,

        ${ambientGlow},

        transparent 32%
      ),

      #050816
    `,

        transition: "background 0.8s ease",
      }}
    >
      {/* ==================================================== */}
      {/* Header */}
      {/* ==================================================== */}

      <header className="header">
        <div>
          <div className="logo">
            CINE<span>MATA</span>
          </div>

          <div className="header-sub">AI Powered Movie Review Platform</div>
        </div>

        {/* ================================================== */}
        {/* Header Stats */}
        {/* ================================================== */}

        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          style={{
            width: "48px",

            height: "48px",

            borderRadius: "50%",

            border:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(0,0,0,0.08)",

            background:
              theme === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.85)",

            color: theme === "dark" ? "#ffffff" : "#111827",

            cursor: "pointer",

            fontSize: "18px",

            transition: "0.25s ease",

            backdropFilter: "blur(12px)",

            boxShadow:
              theme === "dark"
                ? "0 10px 25px rgba(0,0,0,0.25)"
                : "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button> */}

        <div className="header-stats">
          <div className="stat-pill">
            <span className="stat-num">{randomMovies.length}</span>

            <span className="stat-label">Film</span>
          </div>

          <div className="stat-pill">
            <span className="stat-num">{totalComments}</span>

            <span className="stat-label">Ulasan</span>
          </div>

          <div className="stat-pill">
            <span className="stat-num">AI</span>

            <span className="stat-label">IndoBERT</span>
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* Main */}
      {/* ==================================================== */}

      {/* ==================================================== */}
      {/* Hero Banner */}
      {/* ==================================================== */}

      <div
        style={{
          position: "relative",

          overflow: "hidden",

          borderRadius: "32px",

          padding: "42px",

          minHeight: "340px",

          display: "flex",

          alignItems: "center",

          backgroundImage: `

          linear-gradient(
            to right,
          
            ${isLight ? "rgba(255,255,255,0.92)" : "rgba(5,8,20,0.96)"},
          
            ${isLight ? "rgba(255,255,255,0.72)" : "rgba(5,8,20,0.82)"},
          
            ${isLight ? "rgba(255,255,255,0.92)" : "rgba(5,8,20,0.96)"}
          ),
          
          url(${featuredMovie.poster})
          
          `,

          backgroundSize: "cover",

          backgroundPosition: "center",

          border: `1px solid ${borderColor}`,

          boxShadow: `

  0 25px 70px rgba(0,0,0,0.38),

  0 0 120px ${ambientGlow}
`,
        }}
      >
        {/* ================================================= */}
        {/* Background Glow */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",

            top: "-120px",

            right: "-120px",

            width: "340px",

            height: "340px",

            borderRadius: "50%",

            background: ambientGlow,

            filter: "blur(100px)",

            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />

        {/* ================================================= */}
        {/* Floating Icon */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",

            right: "60px",

            top: "50%",

            transform: "translateY(-50%)",

            fontSize: "180px",

            opacity: 0.08,

            filter: "blur(1px)",

            userSelect: "none",
          }}
        >
          {featuredMovie.icon}
        </div>

        {/* ================================================= */}
        {/* Content */}
        {/* ================================================= */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            maxWidth: "760px",
          }}
        >
          {/* ============================================== */}
          {/* Featured Label */}
          {/* ============================================== */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding: "8px 16px",

              borderRadius: "999px",

              background: "rgba(255,255,255,0.12)",

              border: "1px solid rgba(255,255,255,0.08)",

              marginBottom: "20px",

              fontSize: "13px",

              fontWeight: "700",

              backdropFilter: "blur(12px)",
            }}
          >
            🎬 Featured Movie of The Day
          </div>

          {/* ============================================== */}
          {/* Title */}
          {/* ============================================== */}

          <div
            style={{
              fontSize: "48px",

              color: textColor,

              fontWeight: "900",

              lineHeight: 1.1,

              marginBottom: "18px",

              maxWidth: "880px",
            }}
          >
            {featuredMovie.title}
          </div>

          {/* ============================================== */}
          {/* Tags */}
          {/* ============================================== */}

          <div
            style={{
              display: "flex",

              gap: "10px",

              flexWrap: "wrap",

              marginBottom: "20px",
            }}
          >
            {/* Rating */}

            <div
              style={{
                padding: "8px 14px",

                borderRadius: "999px",

                background: "rgba(255,255,255,0.12)",

                fontSize: "13px",

                fontWeight: "600",
              }}
            >
              ⭐ {featuredMovie.rating}
            </div>

            {/* Genre */}

            <div
              style={{
                padding: "8px 14px",

                borderRadius: "999px",

                background: "rgba(255,255,255,0.12)",

                fontSize: "13px",

                fontWeight: "600",
              }}
            >
              🎭 {featuredMovie.genre}
            </div>

            {/* Year */}

            <div
              style={{
                padding: "8px 14px",

                borderRadius: "999px",

                background: "rgba(255,255,255,0.12)",

                fontSize: "13px",

                fontWeight: "600",
              }}
            >
              📅 {featuredMovie.year}
            </div>
          </div>

          {/* ============================================== */}
          {/* Synopsis */}
          {/* ============================================== */}

          <div
            style={{
              fontSize: "15px",

              lineHeight: 1.7,

              opacity: 0.88,

              color: subTextColor,

              marginBottom: "28px",

              maxWidth: "720px",
            }}
          >
            {featuredMovie.synopsis}
          </div>

          {/* ============================================== */}
          {/* Actions */}
          {/* ============================================== */}

          <div
            style={{
              display: "flex",

              gap: "14px",

              flexWrap: "wrap",
            }}
          >
            {/* Detail Button */}

            <button
              onClick={() => handleSelectMovie(featuredMovie)}
              style={{
                padding: "14px 24px",

                borderRadius: "18px",

                border: "none",

                background: "white",

                color: "#111827",

                fontWeight: "800",

                cursor: "pointer",

                fontSize: "15px",

                boxShadow: "0 10px 30px rgba(255,255,255,0.18)",

                transform: "translateY(0)",

                transition: "0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.02)";

                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(255,255,255,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";

                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(255,255,255,0.18)";
              }}
            >
              🎬 Lihat Detail
            </button>
            <button
              onClick={() => {
                setTrailerMovie(featuredMovie);

                setShowTrailer(true);
              }}
              style={{
                padding: "14px 22px",

                borderRadius: "18px",

                border: "1px solid rgba(255,255,255,0.08)",

                background: "rgba(255,255,255,0.08)",

                color: textColor,

                fontWeight: "700",

                cursor: "pointer",

                fontSize: "15px",

                backdropFilter: "blur(10px)",

                transition: "0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";

                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              ▶ Watch Trailer
            </button>

            {/* AI Score */}

            <div
              style={{
                display: "flex",

                alignItems: "center",

                padding: "14px 22px",

                borderRadius: "18px",

                background: "rgba(255,255,255,0.12)",

                border: "1px solid rgba(255,255,255,0.08)",

                fontWeight: "700",

                fontSize: "14px",

                backdropFilter: "blur(10px)",
              }}
            >
              🤖 AI Positive Score:{" "}
              {movieAnalytics.find((m) => m.id === featuredMovie.id)
                ?.positive || 0}
              %
            </div>
          </div>
        </div>
      </div>
      <main className="main">
        {/* ================================================== */}
        {/* Section Title */}
        {/* ================================================== */}
        {/* ================================================== */}
        {/* Header Section */}
        {/* ================================================== */}
        <div
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: "20px",

            marginBottom: "28px",

            flexWrap: "wrap",
          }}
        >
          {/* ============================================== */}
          {/* Title */}
          {/* ============================================== */}

          <div
            className="section-title"
            style={{
              marginTop: "2px",

              marginBottom: "8px",

              display: "flex",

              alignItems: "center",
            }}
          >
            🎬 Film Populer
            <span
              style={{
                opacity: 0.7,

                marginLeft: "10px",

                fontSize: "14px",
              }}
            >
              Halaman {currentPage} / {totalPages}
            </span>
          </div>

          {/* ============================================== */}
          {/* Search */}
          {/* ============================================== */}

          <input
            type="text"
            placeholder="🔍 Cari film favorit kamu..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);

              setCurrentPage(1);
            }}
            style={{
              width: "280px",

              padding: "11px 16px",

              borderRadius: "14px",

              border: "1px solid rgba(255,255,255,0.08)",

              background: cardBackground,

              color: textColor,

              fontSize: "14px",

              fontFamily: "'DM Sans', sans-serif",

              fontWeight: "500",

              letterSpacing: "0.3px",

              outline: "none",

              backdropFilter: "blur(10px)",

              boxShadow: "0 0 18px rgba(0,0,0,0.2)",

              transition: "0.22s ease",
            }}
            onFocus={(e) => {
              e.target.style.border = "1px solid rgba(59,130,246,0.4)";

              e.target.style.boxShadow = "0 0 24px rgba(59,130,246,0.18)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid rgba(255,255,255,0.08)";

              e.target.style.boxShadow = "0 0 18px rgba(0,0,0,0.2)";
            }}
          />
        </div>
        {/* ============================================== */}
        {/* Genre Filter */}
        {/* ============================================== */}

        <div
          style={{
            display: "flex",

            gap: "4px",

            flexWrap: "wrap",

            marginTop: "6px",

            marginBottom: "12px",
          }}
        >
          {genres.map((genre) => {
            const active = selectedGenre === genre;

            return (
              <button
                key={genre}
                onClick={() => {
                  setSelectedGenre(genre);

                  setCurrentPage(1);
                }}
                style={{
                  padding: "6px 12px",

                  borderRadius: "999px",

                  border: active
                    ? "1px solid #3b82f6"
                    : "1px solid rgba(255,255,255,0.08)",

                  background: active
                    ? "rgba(59,130,246,0.18)"
                    : "rgba(255,255,255,0.04)",

                  color: active ? "#8ab4ff" : "rgba(255,255,255,0.72)",

                  cursor: "pointer",

                  fontSize: "12px",

                  fontWeight: "600",

                  transition: "0.22s ease",

                  transform: "translateY(0)",

                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.transform = "translateY(-2px)";

                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.transform = "translateY(0)";

                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* Compact AI Insights */}
        {/* ==================================================== */}

        <div
          style={{
            width: "100%",

            marginBottom: "16px",

            display: "flex",

            flexDirection: "column",

            gap: "8px",
          }}
        >
          {/* ==================================================== */}
          {/* Trending Movies */}
          {/* ==================================================== */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "10px",

              padding: "12px 16px",

              borderRadius: "20px",

              background:
                "linear-gradient(180deg, rgba(20,25,40,0.88), rgba(10,14,24,0.88))",

              border: "1px solid rgba(255,255,255,0.06)",

              backdropFilter: "blur(14px)",

              overflowX: "auto",

              transition: "0.25s ease",

              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";

              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(59,130,246,0.22)";

              e.currentTarget.style.border = "1px solid rgba(59,130,246,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";

              e.currentTarget.style.boxShadow = "none";

              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
            }}
          >
            {/* ================================================ */}
            {/* Title */}
            {/* ================================================ */}

            <div
              style={{
                minWidth: "135px",

                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                }}
              >
                🔥
              </span>

              <div>
                <div
                  style={{
                    fontSize: "10px",

                    opacity: 0.65,

                    textTransform: "uppercase",

                    letterSpacing: "1px",

                    marginBottom: "2px",
                  }}
                >
                  Trending Movies
                </div>

                <div
                  style={{
                    fontWeight: "800",

                    fontSize: "14px",
                  }}
                >
                  Top Discussion
                </div>
              </div>
            </div>

            {/* ================================================ */}
            {/* Movies */}
            {/* ================================================ */}

            {trendingMovies

              .slice(0, 3)

              .map((movie, index) => (
                <div
                  key={movie.id}
                  style={{
                    flex: 1,

                    minWidth: "185px",

                    padding: "10px 12px",

                    borderRadius: "14px",

                    background: "rgba(255,255,255,0.035)",

                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",

                      opacity: 0.6,

                      marginBottom: "3px",
                    }}
                  >
                    #{index + 1} Trending
                  </div>

                  <div
                    style={{
                      fontWeight: "700",

                      fontSize: "14px",

                      marginBottom: "3px",

                      whiteSpace: "nowrap",

                      overflow: "hidden",

                      textOverflow: "ellipsis",
                    }}
                  >
                    {movie.title}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",

                      opacity: 0.7,
                    }}
                  >
                    💬 {movie.totalComments} komentar
                  </div>
                </div>
              ))}
          </div>

          {/* ==================================================== */}
          {/* AI Top Rated */}
          {/* ==================================================== */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "10px",

              padding: "12px 16px",

              borderRadius: "20px",

              background:
                "linear-gradient(180deg, rgba(20,25,40,0.88), rgba(10,14,24,0.88))",

              border: "1px solid rgba(255,255,255,0.06)",

              backdropFilter: "blur(14px)",

              overflowX: "auto",
              transition: "0.25s ease",

              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";

              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(59,130,246,0.22)";

              e.currentTarget.style.border = "1px solid rgba(59,130,246,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";

              e.currentTarget.style.boxShadow = "none";

              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
            }}
          >
            {/* ================================================ */}
            {/* Title */}
            {/* ================================================ */}

            <div
              style={{
                minWidth: "135px",

                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                }}
              >
                🤖
              </span>

              <div>
                <div
                  style={{
                    fontSize: "10px",

                    opacity: 0.65,

                    textTransform: "uppercase",

                    letterSpacing: "1px",

                    marginBottom: "2px",
                  }}
                >
                  AI Top Rated
                </div>

                <div
                  style={{
                    fontWeight: "800",

                    fontSize: "14px",
                  }}
                >
                  Highest Positive
                </div>
              </div>
            </div>

            {/* ================================================ */}
            {/* Movies */}
            {/* ================================================ */}

            {aiRankingMovies

              .slice(0, 3)

              .map((movie, index) => (
                <div
                  key={movie.id}
                  style={{
                    flex: 1,

                    minWidth: "185px",

                    padding: "10px 12px",

                    borderRadius: "14px",

                    background: "rgba(255,255,255,0.035)",

                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",

                      opacity: 0.6,

                      marginBottom: "3px",
                    }}
                  >
                    #{index + 1} AI Rank
                  </div>

                  <div
                    style={{
                      fontWeight: "700",

                      fontSize: "14px",

                      marginBottom: "3px",

                      whiteSpace: "nowrap",

                      overflow: "hidden",

                      textOverflow: "ellipsis",
                    }}
                  >
                    {movie.title}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",

                      color: "#7dff9b",
                    }}
                  >
                    ⭐ {movie.positive}% positif
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ================================================== */}
        {/* Movie Grid */}
        {/* ================================================== */}
        <div className="movies-grid">
          {pageMovies.length > 0 ? (
            pageMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isActive={selectedMovie?.id === movie.id}
                onClick={handleSelectMovie}
                hoveredMovie={hoveredMovie}
                setHoveredMovie={setHoveredMovie}
              />
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "50px 20px",
                opacity: 0.7,
              }}
            >
              🎬 Film tidak ditemukan
            </div>
          )}
        </div>
        {/* ================================================== */}
        {/* Pagination */}
        {/* ================================================== */}
        <div className="pagination">
          {/* Previous */}

          <button
            className="page-btn"
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.transform = "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(59,130,246,0.25)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";

              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>

          {/* Page Numbers */}

          {Array.from(
            { length: totalPages },

            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => handleChangePage(page)}
            >
              {page}
            </button>
          ))}

          {/* Next */}

          <button
            className="page-btn"
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.transform = "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(59,130,246,0.25)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";

              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>

        {/* ================================================== */}
        {/* AI Insights */}
        {/* ================================================== */}

        <div
          style={{
            marginTop: "26px",

            marginBottom: "34px",

            display: "grid",

            gridTemplateColumns: "1fr 1fr",

            gap: "24px",
          }}
        >
          {/* ============================================= */}
          {/* AI Sentiment */}
          {/* ============================================= */}

          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(15,20,35,0.96), rgba(8,10,18,0.94))",

              border: "1px solid rgba(255,255,255,0.05)",

              borderRadius: "30px",

              padding: "28px",

              backdropFilter: "blur(18px)",

              boxShadow: "0 25px 70px rgba(0,0,0,0.35)",

              position: "relative",

              overflow: "hidden",
            }}
          >
            {/* Ambient Glow */}

            <div
              style={{
                position: "absolute",

                width: "240px",

                height: "240px",

                borderRadius: "50%",

                background: "rgba(59,130,246,0.12)",

                filter: "blur(90px)",

                top: "-80px",

                right: "-80px",
              }}
            />

            {/* Title */}

            <div
              style={{
                fontSize: "20px",

                fontWeight: "800",

                letterSpacing: "-1px",

                fontFamily: "'Outfit', sans-serif",

                marginBottom: "18px",

                position: "relative",

                zIndex: 2,
              }}
            >
              🤖 AI Sentiment Analysis
            </div>

            {/* Chart */}

            <div
              style={{
                width: "100%",

                height: "280px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                position: "relative",

                zIndex: 2,
              }}
            >
              <PieChart width={320} height={260}>
                <Pie
                  data={sentimentChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  innerRadius={58}
                  paddingAngle={4}
                  stroke="transparent"
                  labelLine={false}
                >
                  <Cell fill="#22c55e" />

                  <Cell fill="#eab308" />

                  <Cell fill="#ef4444" />
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "rgba(15,20,35,0.96)",

                    border: `1px solid ${borderColor}`,

                    borderRadius: "14px",

                    color: "white",
                  }}
                />
              </PieChart>
            </div>

            {/* Legend */}

            <div
              style={{
                display: "flex",

                justifyContent: "center",

                gap: "18px",

                marginTop: "4px",

                fontSize: "14px",

                fontWeight: "700",

                opacity: 0.92,

                position: "relative",

                zIndex: 2,
              }}
            >
              <div
                style={{
                  color: "#22c55e",
                }}
              >
                ● Positive
              </div>

              <div
                style={{
                  color: "#eab308",
                }}
              >
                ● Neutral
              </div>

              <div
                style={{
                  color: "#ef4444",
                }}
              >
                ● Negative
              </div>
            </div>
          </div>

          {/* ============================================= */}
          {/* Genre Analytics */}
          {/* ============================================= */}

          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(15,20,35,0.96), rgba(8,10,18,0.94))",

              border: "1px solid rgba(255,255,255,0.05)",

              borderRadius: "30px",

              padding: "28px",

              backdropFilter: "blur(18px)",

              boxShadow: "0 25px 70px rgba(0,0,0,0.35)",

              position: "relative",

              overflow: "hidden",
            }}
          >
            {/* Ambient Glow */}

            <div
              style={{
                position: "absolute",

                width: "240px",

                height: "240px",

                borderRadius: "50%",

                background: "rgba(139,92,246,0.12)",

                filter: "blur(90px)",

                top: "-80px",

                right: "-80px",
              }}
            />

            {/* Title */}

            <div
              style={{
                fontSize: "20px",

                fontWeight: "800",

                letterSpacing: "-1px",

                fontFamily: "'Outfit', sans-serif",

                marginBottom: "18px",

                position: "relative",

                zIndex: 2,
              }}
            >
              🎬 Genre Analytics
            </div>

            {/* Chart */}

            <div
              style={{
                width: "100%",

                height: "300px",

                position: "relative",

                zIndex: 2,
              }}
            >
              <ResponsiveContainer>
                <BarChart data={genreChartData}>
                  {/* Gradient */}

                  <defs>
                    <linearGradient
                      id="colorGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#60a5fa" />

                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>

                  {/* X Axis */}

                  <XAxis
                    dataKey="genre"
                    tick={{
                      fill: "#9ca3af",

                      fontSize: 13,

                      fontWeight: 600,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  {/* Y Axis */}

                  <YAxis
                    tick={{
                      fill: "#6b7280",

                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  {/* Tooltip */}

                  <Tooltip
                    contentStyle={{
                      background: "rgba(15,20,35,0.96)",

                      border: "1px solid rgba(255,255,255,0.08)",

                      borderRadius: "14px",

                      color: "white",
                    }}
                  />

                  {/* Bar */}

                  <Bar
                    dataKey="count"
                    fill="url(#colorGradient)"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* Detail Panel */}
        {/* ================================================== */}
        {selectedMovie && (
          <div ref={detailPanelRef}>
            <DetailPanel
              movie={selectedMovie}
              comments={comments[selectedMovie?.id] || []}
              onClose={() => setSelectedMovie(null)}
              onAddComment={handleAddComment}
              commentsSectionRef={commentsSectionRef}
            />
          </div>
        )}
        {/* ================================================== */}
        {/* Trailer Modal */}
        {/* ================================================== */}

        {showTrailer && trailerMovie && (
          <div
            onClick={() => setShowTrailer(false)}
            style={{
              position: "fixed",

              inset: 0,

              background: "rgba(0,0,0,0.82)",

              backdropFilter: "blur(12px)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              zIndex: 9999,

              padding: "20px",
            }}
          >
            {/* ============================================= */}
            {/* Modal Content */}
            {/* ============================================= */}

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",

                maxWidth: "1100px",

                borderRadius: "28px",

                overflow: "hidden",

                background: "#0f172a",

                border: "1px solid rgba(255,255,255,0.08)",

                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* =========================================== */}
              {/* Header */}
              {/* =========================================== */}

              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "space-between",

                  padding: "18px 22px",

                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "20px",

                      fontWeight: "800",
                    }}
                  >
                    🎬 {trailerMovie.title}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",

                      opacity: 0.7,

                      marginTop: "4px",
                    }}
                  >
                    Official Trailer
                  </div>
                </div>

                {/* Close */}

                <button
                  onClick={() => setShowTrailer(false)}
                  style={{
                    width: "42px",

                    height: "42px",

                    borderRadius: "50%",

                    border: "none",

                    cursor: "pointer",

                    fontSize: "18px",

                    background: "rgba(255,255,255,0.08)",

                    color: "white",

                    transition: "0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";

                    e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";

                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  }}
                >
                  ✕
                </button>
              </div>

              {/* =========================================== */}
              {/* Trailer */}
              {/* =========================================== */}

              <div
                style={{
                  position: "relative",

                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  src={trailerMovie.trailer}
                  title={trailerMovie.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",

                    inset: 0,

                    width: "100%",

                    height: "100%",

                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </main>
      {/* ============================================ */}
      {/* Ultra Compact Footer */}
      {/* ============================================ */}

      <footer
        style={{
          marginTop: "-24px",

          padding: "20px 18px 14px",

          borderTop: "1px solid rgba(255,255,255,0.05)",

          background:
            "linear-gradient(to top, rgba(255,255,255,0.015), transparent)",

          textAlign: "center",
        }}
      >
        {/* Logo */}

        <div
          style={{
            fontSize: "20px",

            fontWeight: "800",

            marginBottom: "4px",

            background: "linear-gradient(to right, #ffffff, #60a5fa)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          🎬 CINEMATA
        </div>

        {/* Subtitle */}

        <div
          style={{
            color: "#94a3b8",

            fontSize: "12px",

            marginBottom: "1px",
          }}
        >
          AI Powered Movie Review Platform
        </div>

        <div
          style={{
            color: "#64748b",

            fontSize: "11px",

            marginBottom: "14px",
          }}
        >
          Built with ❤️ using React, FastAPI, IndoBERT, and PostgreSQL.
        </div>

        {/* Team Card */}

        <div
          style={{
            maxWidth: "430px",

            margin: "0 auto",

            borderRadius: "12px",

            overflow: "hidden",

            border: "1px solid rgba(255,255,255,0.05)",

            background:
              "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",

            backdropFilter: "blur(8px)",
          }}
        >
          {/* Header */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns: "1.4fr 1fr",

              padding: "7px 12px",

              background: "rgba(255,255,255,0.03)",

              color: "#f1f5f9",

              fontSize: "11px",

              fontWeight: "700",
            }}
          >
            <div align="left">Nama</div>

            <div align="left">GitHub</div>
          </div>

          {/* Members */}

          {[
            {
              name: "Adi Sani Alviga",
              github: "@sanialviga",
              link: "https://github.com/sanialviga",
            },

            {
              name: "Vito Arsy Saputra",
              github: "@vitoas30",
              link: "https://github.com/vitoas30",
            },

            {
              name: "Reza Anwar Sanusi",
              github: "@rezaanwar114",
              link: "https://github.com/rezaanwar114",
            },
          ].map((member, index) => (
            <div
              key={index}
              style={{
                display: "grid",

                gridTemplateColumns: "1.4fr 1fr",

                padding: "8px 12px",

                borderTop:
                  index !== 0 ? "1px solid rgba(255,255,255,0.035)" : "none",

                fontSize: "11px",

                color: "#cbd5e1",

                alignItems: "center",
              }}
            >
              <div align="left">{member.name}</div>

              <div align="left">
                {member.link ? (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#60a5fa",

                      textDecoration: "none",

                      fontWeight: "600",
                    }}
                  >
                    {member.github}
                  </a>
                ) : (
                  <span style={{ color: "#64748b" }}>{member.github}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div
          style={{
            marginTop: "10px",

            color: "#475569",

            fontSize: "10px",
          }}
        >
          © {new Date().getFullYear()} CINEMATA
        </div>
      </footer>
    </div>
  );
}

export default App;
