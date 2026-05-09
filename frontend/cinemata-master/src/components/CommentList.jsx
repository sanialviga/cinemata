import React, { useRef } from "react";

// ==========================================================
// AI Keyword Highlighting
// ==========================================================

// ==========================================================
// Positive Keywords
// ==========================================================

const positiveWords = [
  "bagus",
  "keren",
  "luar biasa",
  "mengharukan",
  "emosional",
  "menarik",
  "epic",
  "hebat",
  "masterpiece",
  "terbaik",
  "suka",
  "amazing",
  "wajib",
  "seru",
  "menegangkan",
  "indah",
  "rapi",
  "spektakuler",
  "mantap",
  "perfect",
  "fantastis",
  "ikonik",
  "berkelas",
  "mengesankan",
  "powerful",
  "intense",
  "smart",
  "cemerlang",
  "berkualitas",
  "memukau",
  "memuaskan",
  "cinematic",
  "recommended",
  "worth it",
  "must watch",
  "favorit",
  "inspiratif",
  "bermakna",
  "menyentuh",
  "touching",
  "heartwarming",
  "brilian",
  "goated",
];

// ==========================================================
// Negative Keywords
// ==========================================================

const negativeWords = [
  "jelek",
  "buruk",
  "membosankan",
  "parah",
  "kecewa",
  "tidak jelas",
  "sampah",
  "payah",
  "aneh",
  "gagal",
  "membingungkan",
  "overrated",
  "lebay",
  "flat",
  "cringe",
  "ngantuk",
  "terlalu panjang",
  "alur lambat",
  "plot jelek",
  "cerita buruk",
  "visual buruk",
  "akting buruk",
  "tidak seru",
  "kurang bagus",
  "ga jelas",
  "gajelas",
  "waste time",
  "buang waktu",
  "mediocre",
  "kacau",
  "random",
  "berantakan",
  "ending buruk",
  "ending jelek",
  "tidak masuk akal",
  "film jelek",
  "film buruk",
  "mengecewakan",
  "hancur",
  "worst",
  "bad",
];

// ==========================================================
// Highlight Function
// ==========================================================

const highlightKeywords = (text) => {
  let result = text;

  // ========================================================
  // Positive Highlight
  // ========================================================

  positiveWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");

    result = result.replace(
      regex,

      `<span class="positive-highlight">$1</span>`
    );
  });

  // ========================================================
  // Negative Highlight
  // ========================================================

  negativeWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");

    result = result.replace(
      regex,

      `<span class="negative-highlight">$1</span>`
    );
  });

  return result;
};

// ==========================================================
// Comment List Component
// ==========================================================

const CommentList = ({
  comments,

  commentsTopRef,
}) => {
  // ========================================================
  // Latest Comment Ref
  // ========================================================

  const lastCommentRef = useRef(null);

  // ========================================================
  // Empty State
  // ========================================================

  if (!comments.length) {
    return (
      <div className="comments-empty">
        Belum ada komentar untuk film ini. Jadilah yang pertama memberikan
        review! ✨
      </div>
    );
  }

  return (
    <div className="comment-list">
      {/* ============================================== */}
      {/* Scroll Anchor */}
      {/* ============================================== */}

      <div
        ref={commentsTopRef}
        style={{
          height: "1px",
        }}
      />

      {[...comments]

        .reverse()

        .map((comment, index) => {
          // ============================================
          // Sentiment Style
          // ============================================

          const isPositive = comment.sentiment === "positif";

          return (
            <div
              key={index}
              className="comment-card"
              style={{
                padding: "24px",

                marginBottom: "20px",

                borderRadius: "24px",

                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",

                border: "1px solid rgba(255,255,255,0.06)",

                boxShadow: "0 0 30px rgba(0,0,0,0.18)",

                backdropFilter: "blur(14px)",

                transition: "0.25s ease",

                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";

                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.24)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,0,0,0.18)";
              }}
            >
              {/* ========================================== */}
              {/* Header */}
              {/* ========================================== */}

              <div
                className="comment-header"
                style={{
                  display: "flex",

                  justifyContent: "space-between",

                  alignItems: "flex-start",

                  marginBottom: "18px",

                  gap: "16px",
                }}
              >
                {/* ====================================== */}
                {/* User Info */}
                {/* ====================================== */}

                <div>
                  <div
                    className="comment-author"
                    style={{
                      fontSize: "18px",

                      fontWeight: "700",

                      marginBottom: "4px",
                    }}
                  >
                    {comment.name}
                  </div>

                  <div
                    className="comment-date"
                    style={{
                      fontSize: "13px",

                      opacity: 0.65,
                    }}
                  >
                    {comment.date}
                  </div>
                </div>

                {/* ====================================== */}
                {/* Rating */}
                {/* ====================================== */}

                <div
                  className="comment-rating"
                  style={{
                    padding: "8px 14px",

                    borderRadius: "999px",

                    background: "rgba(255,255,255,0.05)",

                    border: "1px solid rgba(255,255,255,0.08)",

                    fontWeight: "700",

                    fontSize: "14px",

                    whiteSpace: "nowrap",
                  }}
                >
                  ⭐ {comment.rating}/5
                </div>
              </div>

              {/* ========================================== */}
              {/* AI Sentiment */}
              {/* ========================================== */}

              {comment.sentiment && (
                <div>
                  {/* ====================================== */}
                  {/* Badge */}
                  {/* ====================================== */}

                  <div
                    style={{
                      display: "inline-flex",

                      alignItems: "center",

                      gap: "8px",

                      marginBottom: "14px",

                      padding: "9px 16px",

                      borderRadius: "999px",

                      background: isPositive
                        ? "rgba(70,211,105,0.15)"
                        : "rgba(232,124,3,0.15)",

                      border: isPositive
                        ? "1px solid rgba(70,211,105,0.35)"
                        : "1px solid rgba(232,124,3,0.35)",

                      boxShadow: isPositive
                        ? "0 0 18px rgba(70,211,105,0.18)"
                        : "0 0 18px rgba(232,124,3,0.18)",

                      fontSize: "13px",

                      fontWeight: "700",
                    }}
                  >
                    <span>{isPositive ? "😊 POSITIF" : "😤 NEGATIF"}</span>

                    <span style={{ opacity: 0.7 }}>•</span>

                    <span>{comment.confidence}%</span>
                  </div>

                  {/* ====================================== */}
                  {/* Confidence Bar */}
                  {/* ====================================== */}

                  <div
                    style={{
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",

                        justifyContent: "space-between",

                        marginBottom: "8px",

                        fontSize: "12px",

                        opacity: 0.8,
                      }}
                    >
                      <span>AI Confidence</span>

                      <span>{comment.confidence}%</span>
                    </div>

                    {/* Progress Background */}

                    <div
                      style={{
                        width: "100%",

                        height: "11px",

                        borderRadius: "999px",

                        background: "rgba(255,255,255,0.08)",

                        overflow: "hidden",
                      }}
                    >
                      {/* Progress Fill */}

                      <div
                        style={{
                          width: `${comment.confidence}%`,

                          height: "100%",

                          borderRadius: "999px",

                          background: isPositive
                            ? "linear-gradient(90deg, #46d369, #7dff9b)"
                            : "linear-gradient(90deg, #e87c03, #ffb257)",

                          boxShadow: isPositive
                            ? "0 0 14px rgba(70,211,105,0.45)"
                            : "0 0 14px rgba(232,124,3,0.45)",

                          transition: "width 0.5s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================== */}
              {/* Comment Text */}
              {/* ========================================== */}

              <div
                className="comment-text"
                style={{
                  lineHeight: 1.9,

                  fontSize: "15px",

                  color: "rgba(255,255,255,0.88)",
                }}
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(comment.text),
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CommentList;
