import React from "react";

const MovieCard = ({
  movie,

  onClick,

  isActive,

  hoveredMovie,

  setHoveredMovie,
}) => {
  // ========================================================
  // Hover State
  // ========================================================

  const isHovered = hoveredMovie === movie.id;

  return (
    <div
      className={`movie-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(movie)}
      onMouseEnter={() => setHoveredMovie(movie.id)}
      onMouseLeave={() => setHoveredMovie(null)}
      style={{
        cursor: "pointer",

        transform: isHovered ? "translateY(-10px)" : "translateY(0)",

        transition: "0.28s ease",

        boxShadow: isHovered
          ? `0 20px 40px ${movie.color}`
          : "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      {/* ================================================= */}
      {/* Poster */}
      {/* ================================================= */}

      <div
        className="movie-poster"
        style={{
          backgroundImage: `url(${movie.poster})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          position: "relative",

          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",

            inset: 0,

            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1))",
          }}
        />
        {/* ============================================= */}
        {/* Icon */}
        {/* ============================================= */}

        <div
          className="poster-icon"
          style={{
            position: "absolute",

            bottom: "8px",

            right: "10px",

            zIndex: 1,

            fontSize: "46px",

            opacity: isHovered ? 0.14 : 0.07,

            filter: "blur(1px)",

            transform: isHovered ? "scale(1.08)" : "scale(1)",

            transition: "0.3s ease",

            userSelect: "none",

            pointerEvents: "none",
          }}
        >
          {movie.icon}
        </div>
      </div>

      {/* ================================================= */}
      {/* Info */}
      {/* ================================================= */}

      <div className="movie-info">
        {/* ============================================= */}
        {/* Title */}
        {/* ============================================= */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: "10px",

            marginBottom: "8px",
          }}
        >
          {/* Title */}

          <div className="movie-title">{movie.title}</div>

          {/* Year */}

          <div
            style={{
              fontSize: "12px",

              padding: "4px 10px",

              borderRadius: "999px",

              background: "rgba(255,255,255,0.06)",

              border: "1px solid rgba(255,255,255,0.06)",

              color: "rgba(255,255,255,0.7)",

              whiteSpace: "nowrap",
            }}
          >
            {movie.year}
          </div>
        </div>

        {/* ============================================= */}
        {/* Meta */}
        {/* ============================================= */}

        <div className="movie-meta">
          {/* Genre */}

          <span className="movie-genre">{movie.genre}</span>

          {/* Rating */}

          <span className="movie-rating">
            <span>★</span>

            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
