import React from "react";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const DetailPanel = ({
  movie,

  comments,

  onClose,

  onAddComment,

  commentsSectionRef,
}) => {
  // ==========================================================
  // Rating Calculation
  // ==========================================================

  const avgRating =
    comments.length > 0
      ? (
          comments.reduce((sum, c) => sum + c.rating, 0) / comments.length
        ).toFixed(1)
      : movie.rating;

  const roundedAvg = parseFloat(avgRating);

  const fullStars = Math.round(roundedAvg);

  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);

  // ==========================================================
  // AI Statistics
  // ==========================================================

  const totalReviews = comments.length;

  const positiveComments = comments.filter((c) => {
    const sentiment = String(c.sentiment).toLowerCase().trim();

    return sentiment.includes("positif") || sentiment.includes("positive");
  });

  const negativeComments = comments.filter((c) => {
    const sentiment = String(c.sentiment).toLowerCase().trim();

    return sentiment.includes("negatif") || sentiment.includes("negative");
  });

  const totalAIComments = comments.filter((c) => c.sentiment).length;

  const positivePercentage =
    totalAIComments > 0
      ? Math.round((positiveComments.length / totalAIComments) * 100)
      : 0;

  const negativePercentage =
    totalAIComments > 0
      ? Math.round((negativeComments.length / totalAIComments) * 100)
      : 0;

  // ==========================================================
  // Audience Sentiment
  // ==========================================================

  const audienceSentiment =
    totalAIComments === 0
      ? "Neutral"
      : positivePercentage >= 60
      ? "Positive"
      : positivePercentage <= 40
      ? "Negative"
      : "Mixed";

  // ==========================================================
  // AI Summary
  // ==========================================================

  const aiSummary =
    totalAIComments === 0
      ? "Belum ada cukup data review untuk dianalisis AI. Tambahkan komentar pertama untuk memulai analisis sentimen."
      : positivePercentage >= 75
      ? "Mayoritas penonton sangat menyukai film ini. Review menunjukkan kualitas cerita, visual, dan pengalaman menonton yang memuaskan."
      : positivePercentage >= 60
      ? "Film ini mendapatkan respon positif dari sebagian besar penonton. Beberapa review menunjukkan pengalaman menonton yang cukup memuaskan."
      : positivePercentage >= 45
      ? "Review penonton cukup beragam. Sebagian penonton menyukai film ini, sementara sebagian lainnya merasa ada beberapa kekurangan."
      : "Mayoritas penonton memberikan respon negatif terhadap film ini. Banyak review menyebut alur cerita, pacing, atau pengalaman menonton terasa kurang memuaskan.";

  return (
    <div
      className="detail-panel"
      style={{
        position: "relative",

        overflow: "hidden",

        background: `
      
              linear-gradient(
      
                145deg,
      
                rgba(8,12,24,0.97),
      
                rgba(5,8,18,0.96)
              )
            `,

        border: "1px solid rgba(255,255,255,0.06)",

        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",

        borderRadius: "34px",

        backdropFilter: "blur(24px)",

        padding: "28px",

        marginTop: "28px",
      }}
    >
      {/* ============================================ */}
      {/* Ambient Glow */}
      {/* ============================================ */}
      <div
        style={{
          position: "absolute",

          top: "-120px",

          right: "-120px",

          width: "320px",

          height: "320px",

          borderRadius: "50%",

          background: movie.color,

          opacity: 0.16,

          filter: "blur(100px)",

          pointerEvents: "none",
        }}
      />
      {/* ============================================ */}
      {/* Secondary Glow */}
      {/* ============================================ */}
      <div
        style={{
          position: "absolute",

          bottom: "-140px",

          left: "-140px",

          width: "280px",

          height: "280px",

          borderRadius: "50%",

          background: "#3b82f6",

          opacity: 0.1,

          filter: "blur(120px)",

          pointerEvents: "none",
        }}
      />
      {/* ==================================================== */}
      {/* Header */}
      {/* ==================================================== */}
      <div className="detail-panel-header-row">
        <div
          className="section-title"
          style={{
            marginBottom: 0,
          }}
        >
          🎬 Detail Film
        </div>

        <button
          className="close-btn"
          onClick={onClose}
          type="button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";

            e.currentTarget.style.background = "rgba(255,255,255,0.08)";

            e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";

            e.currentTarget.style.background = "rgba(255,255,255,0.04)";

            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            transition: "0.22s ease",
          }}
        >
          ✕ Tutup
        </button>
      </div>
      {/* ==================================================== */}
      {/* Movie Detail */}
      {/* ==================================================== */}
      <div
        className="detail-body"
        style={{
          display: "flex",

          gap: "24px",

          alignItems: "flex-start",

          marginBottom: "20px",
        }}
      >
        {/* ================================================ */}
        {/* Poster */}
        {/* ================================================ */}

        <div
          className="detail-poster"
          style={{
            position: "relative",

            overflow: "hidden",

            borderRadius: "28px",

            boxShadow: `0 25px 60px ${movie.color}`,

            minWidth: "170px",

            width: "170px",

            height: "255px",

            flexShrink: 0,
          }}
        >
          {/* ============================================ */}
          {/* Poster Image */}
          {/* ============================================ */}

          <img
            src={movie.poster}
            alt={movie.title}
            style={{
              width: "100%",

              height: "100%",

              objectFit: "cover",

              display: "block",
            }}
          />

          {/* ============================================ */}
          {/* Overlay */}
          {/* ============================================ */}

          <div
            style={{
              position: "absolute",

              inset: 0,

              background:
                "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.12))",
            }}
          />

          {/* ============================================ */}
          {/* Movie Icon */}
          {/* ============================================ */}

          <div
            style={{
              position: "absolute",

              top: "12px",

              right: "12px",

              width: "34px",

              height: "34px",

              borderRadius: "50%",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              background: "rgba(15,23,42,0.72)",

              backdropFilter: "blur(10px)",

              fontSize: "15px",

              border: "1px solid rgba(255,255,255,0.08)",

              boxShadow: "0 6px 18px rgba(0,0,0,0.24)",
            }}
          >
            {movie.icon}
          </div>

          {/* ============================================ */}
          {/* Year */}
          {/* ============================================ */}

          <div
            style={{
              position: "absolute",

              bottom: "18px",

              left: "50%",

              transform: "translateX(-50%)",

              padding: "8px 18px",

              borderRadius: "999px",

              background: "rgba(0,0,0,0.65)",

              backdropFilter: "blur(10px)",

              fontWeight: "700",

              fontSize: "14px",

              letterSpacing: "0.5px",

              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {movie.year}
          </div>
        </div>

        {/* ================================================ */}
        {/* Movie Info */}
        {/* ================================================ */}

        <div
          className="detail-info"
          style={{
            position: "relative",

            zIndex: 2,

            flex: 1,
          }}
        >
          {/* ============================================ */}
          {/* Title + Compact Rating Row */}
          {/* ============================================ */}

          <div
            style={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "flex-start",

              gap: "18px",

              marginBottom: "12px",
            }}
          >
            {/* ======================================== */}
            {/* Movie Title */}
            {/* ======================================== */}

            <div
              className="detail-title"
              style={{
                fontSize: "48px",

                fontWeight: "900",

                lineHeight: 0.95,

                letterSpacing: "-2px",

                maxWidth: "620px",

                background: "linear-gradient(to right, #ffffff, #cbd5e1)",

                WebkitBackgroundClip: "text",

                WebkitTextFillColor: "transparent",

                textShadow: "0 8px 30px rgba(255,255,255,0.08)",
              }}
            >
              {movie.title}
            </div>

            {/* ======================================== */}
            {/* Compact Rating */}
            {/* ======================================== */}

            <div
              style={{
                display: "flex",

                flexDirection: "column",

                alignItems: "flex-end",

                justifyContent: "center",

                gap: "2px",

                padding: "10px 14px",

                borderRadius: "18px",

                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",

                border: "1px solid rgba(255,255,255,0.08)",

                backdropFilter: "blur(14px)",

                boxShadow: "0 12px 28px rgba(0,0,0,0.22)",

                position: "relative",

                overflow: "hidden",

                minWidth: "140px",

                height: "fit-content",
              }}
            >
              {/* ==================================== */}
              {/* Ambient Glow */}
              {/* ==================================== */}

              <div
                style={{
                  position: "absolute",

                  top: "-20px",

                  right: "-20px",

                  width: "80px",

                  height: "80px",

                  borderRadius: "50%",

                  background: "rgba(250,204,21,0.16)",

                  filter: "blur(40px)",
                }}
              />

              {/* ==================================== */}
              {/* Stars */}
              {/* ==================================== */}

              <div
                style={{
                  fontSize: "14px",

                  color: "#facc15",

                  letterSpacing: "1px",

                  textShadow: "0 2px 10px rgba(250,204,21,0.35)",

                  position: "relative",

                  zIndex: 2,

                  lineHeight: 1,
                }}
              >
                {stars}
              </div>

              {/* ==================================== */}
              {/* Rating Number */}
              {/* ==================================== */}

              <div
                style={{
                  display: "flex",

                  alignItems: "baseline",

                  gap: "6px",

                  position: "relative",

                  zIndex: 2,

                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    fontSize: "30px",

                    fontWeight: "900",

                    lineHeight: 1,

                    letterSpacing: "-1px",

                    background: "linear-gradient(to bottom, #ffffff, #cbd5e1)",

                    WebkitBackgroundClip: "text",

                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {roundedAvg}
                </span>

                <span
                  style={{
                    fontSize: "11px",

                    color: "#94a3b8",

                    fontWeight: "600",

                    whiteSpace: "nowrap",
                  }}
                >
                  {comments.length > 0 ? `(${comments.length})` : "(new)"}
                </span>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* Tags */}
          {/* ============================================ */}

          <div
            className="detail-tags"
            style={{
              display: "flex",

              flexWrap: "wrap",

              gap: "8px",

              marginBottom: "14px",
            }}
          >
            {/* Genre */}

            <span
              className="tag gold"
              style={{
                background: "rgba(250,204,21,0.12)",

                color: "#facc15",

                border: "1px solid rgba(250,204,21,0.22)",

                padding: "7px 14px",

                borderRadius: "999px",

                fontWeight: "700",

                backdropFilter: "blur(12px)",
              }}
            >
              {movie.genre}
            </span>

            {/* Year */}

            <span
              className="tag"
              style={{
                background: "rgba(255,255,255,0.06)",

                border: "1px solid rgba(255,255,255,0.08)",

                padding: "7px 14px",

                borderRadius: "999px",

                fontWeight: "700",

                backdropFilter: "blur(12px)",
              }}
            >
              {movie.year}
            </span>

            {/* Comment Count */}

            <span
              className="tag"
              style={{
                background: "rgba(255,255,255,0.06)",

                border: "1px solid rgba(255,255,255,0.08)",

                padding: "7px 14px",

                borderRadius: "999px",

                fontWeight: "700",

                backdropFilter: "blur(12px)",
              }}
            >
              💬 {comments.length} komentar
            </span>
          </div>

          {/* ============================================ */}
          {/* Trailer */}
          {/* ============================================ */}

          <div
            style={{
              marginTop: "14px",

              borderRadius: "24px",

              overflow: "hidden",

              border: "1px solid rgba(255,255,255,0.08)",

              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <iframe
              width="100%"
              height="220"
              src={movie.trailer}
              title={movie.title}
              allowFullScreen
              style={{
                border: "none",

                display: "block",
              }}
            />
          </div>

          {/* ============================================ */}
          {/* Synopsis */}
          {/* ============================================ */}

          <p
            className="detail-synopsis"
            style={{
              marginTop: "12px",

              lineHeight: 1.8,

              fontSize: "15px",

              color: "rgba(255,255,255,0.82)",
            }}
          >
            {movie.synopsis}
          </p>
        </div>
      </div>
      {/* ============================================== */}
      {/* AI Analysis */}
      {/* ============================================== */}
      <div
        style={{
          padding: "18px",

          borderRadius: "24px",

          background:
            "linear-gradient(180deg, rgba(20,25,40,0.92), rgba(10,14,24,0.92))",

          border: "1px solid rgba(255,255,255,0.05)",

          boxShadow: "0 0 28px rgba(0,0,0,0.22)",

          marginTop: "10px",

          WebkitFontSmoothing: "antialiased",

          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* ============================================== */}
        {/* Title */}
        {/* ============================================== */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: "10px",

            marginBottom: "14px",

            fontSize: "18px",

            fontWeight: "600",

            letterSpacing: "0.4px",

            lineHeight: 1.3,
          }}
        >
          <span>🤖 AI Analysis</span>

          <span
            style={{
              fontSize: "12px",

              opacity: 0.65,

              fontWeight: "500",
            }}
          >
            💬 {totalReviews} Reviews
          </span>
        </div>

        {/* ============================================== */}
        {/* Statistics */}
        {/* ============================================== */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",

            gap: "12px",

            marginBottom: "14px",
          }}
        >
          {/* ========================================== */}
          {/* Positive */}
          {/* ========================================== */}

          <div
            style={{
              padding: "16px",

              borderRadius: "18px",

              background: "rgba(70,211,105,0.08)",

              border: "1px solid rgba(70,211,105,0.18)",
            }}
          >
            <div
              style={{
                fontSize: "13px",

                fontWeight: "500",

                letterSpacing: "0.3px",

                lineHeight: 1.4,

                opacity: 0.78,

                marginBottom: "2px",
              }}
            >
              😊 Positif
            </div>

            <div
              style={{
                fontSize: "34px",

                fontWeight: "800",

                lineHeight: 1,

                color: "#7dff9b",
              }}
            >
              {positivePercentage}%
            </div>
          </div>

          {/* ========================================== */}
          {/* Negative */}
          {/* ========================================== */}

          <div
            style={{
              padding: "16px",

              borderRadius: "18px",

              background: "rgba(232,124,3,0.08)",

              border: "1px solid rgba(232,124,3,0.18)",
            }}
          >
            <div
              style={{
                fontSize: "13px",

                fontWeight: "500",

                letterSpacing: "0.3px",

                lineHeight: 1.4,

                opacity: 0.78,

                marginBottom: "2px",
              }}
            >
              😤 Negatif
            </div>

            <div
              style={{
                fontSize: "34px",

                fontWeight: "800",

                lineHeight: 1,

                color: "#ffb257",
              }}
            >
              {negativePercentage}%
            </div>
          </div>

          {/* ========================================== */}
          {/* Audience Sentiment */}
          {/* ========================================== */}

          <div
            style={{
              padding: "16px",

              borderRadius: "18px",

              background:
                audienceSentiment === "Positive"
                  ? "rgba(70,211,105,0.08)"
                  : audienceSentiment === "Negative"
                  ? "rgba(239,68,68,0.08)"
                  : "rgba(59,130,246,0.08)",

              border:
                audienceSentiment === "Positive"
                  ? "1px solid rgba(70,211,105,0.18)"
                  : audienceSentiment === "Negative"
                  ? "1px solid rgba(239,68,68,0.18)"
                  : "1px solid rgba(59,130,246,0.18)",
            }}
          >
            <div
              style={{
                fontSize: "13px",

                fontWeight: "500",

                letterSpacing: "0.3px",

                lineHeight: 1.4,

                opacity: 0.78,

                marginBottom: "2px",
              }}
            >
              🎭 Audience Sentiment
            </div>

            <div
              style={{
                fontSize: "34px",

                fontWeight: "800",

                lineHeight: 1,

                color:
                  audienceSentiment === "Positive"
                    ? "#7dff9b"
                    : audienceSentiment === "Negative"
                    ? "#ff7b7b"
                    : "#8ab4ff",
              }}
            >
              {audienceSentiment}
            </div>
          </div>
        </div>

        {/* ============================================== */}
        {/* Audience Sentiment Bar */}
        {/* ============================================== */}

        <div
          style={{
            marginBottom: "14px",
          }}
        >
          <div
            style={{
              display: "flex",

              justifyContent: "space-between",

              marginBottom: "5px",

              fontSize: "13px",

              fontWeight: "500",

              letterSpacing: "0.3px",

              lineHeight: 1.4,

              opacity: 0.82,
            }}
          >
            <span>Positive Audience Ratio</span>

            <span>{positivePercentage}%</span>
          </div>

          <div
            style={{
              width: "100%",

              height: "10px",

              borderRadius: "999px",

              overflow: "hidden",

              background: "rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: `${positivePercentage}%`,

                height: "100%",

                borderRadius: "999px",

                background:
                  positivePercentage >= 60
                    ? "linear-gradient(90deg, #22c55e, #4ade80)"
                    : positivePercentage >= 45
                    ? "linear-gradient(90deg, #f59e0b, #fbbf24)"
                    : "linear-gradient(90deg, #ef4444, #f87171)",

                boxShadow:
                  positivePercentage >= 60
                    ? "0 0 12px rgba(34,197,94,0.35)"
                    : positivePercentage >= 45
                    ? "0 0 12px rgba(245,158,11,0.35)"
                    : "0 0 12px rgba(239,68,68,0.35)",

                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>

        {/* ============================================== */}
        {/* AI Summary */}
        {/* ============================================== */}

        <div
          style={{
            padding: "14px 16px",

            borderRadius: "16px",

            border: "1px solid rgba(255,255,255,0.05)",

            background:
              "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",

            backdropFilter: "blur(10px)",

            lineHeight: 1.7,

            letterSpacing: "0.25px",

            fontSize: "13px",

            fontWeight: "400",

            color: "rgba(255,255,255,0.80)",
          }}
        >
          {aiSummary}
        </div>
      </div>
      {/* ==================================================== */}
      {/* Comment Section */}
      {/* ==================================================== */}
      <div
        className="section-title"
        style={{
          marginTop: "28px",
        }}
      >
        💬 Komentar Penonton
      </div>
      {/* ==================================================== */}
      {/* Comment Form */}
      {/* ==================================================== */}
      <CommentForm onSubmit={onAddComment} />
      {/* ==================================================== */}
      {/* Comment List */}
      {/* ==================================================== */}
      <CommentList comments={comments} commentsTopRef={commentsSectionRef} />
    </div>
  );
};

export default DetailPanel;
