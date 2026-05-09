import React, { useState } from "react";

import StarRating from "./StarRating";

import { analyzeSentiment } from "../services/api";

// ==========================================================
// Comment Form Component
// ==========================================================

const CommentForm = ({ onSubmit }) => {
  // ========================================================
  // Form States
  // ========================================================

  const [name, setName] = useState("");

  const [text, setText] = useState("");

  const [rating, setRating] = useState(0);

  const [error, setError] = useState("");

  // ========================================================
  // AI Loading States
  // ========================================================

  const [loading, setLoading] = useState(false);

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // ========================================================
  // Submit Handler
  // ========================================================

  const handleSubmit = async () => {
    // ======================================================
    // Validation
    // ======================================================

    if (!name.trim()) {
      setError("Masukkan nama kamu!");

      return;
    }

    if (!text.trim()) {
      setError("Tulis komentar dulu!");

      return;
    }

    if (!rating) {
      setError("Pilih rating bintang!");

      return;
    }

    // ======================================================
    // Clear Error
    // ======================================================

    setError("");

    // ======================================================
    // Start AI Loading
    // ======================================================

    setLoading(true);

    setIsAnalyzing(true);

    try {
      // ====================================================
      // Fake AI Delay
      // ====================================================

      await new Promise((resolve) => setTimeout(resolve, 1200));

      // ====================================================
      // Analyze Sentiment
      // ====================================================

      const aiResult = await analyzeSentiment(text);

      // ====================================================
      // Save Comment
      // ====================================================

      onSubmit({
        name: name.trim(),

        text: text.trim(),

        rating,

        date: "Baru saja",

        sentiment: aiResult.sentiment,

        confidence: aiResult.confidence,
      });

      // ====================================================
      // Reset Form
      // ====================================================

      setName("");

      setText("");

      setRating(0);
    } catch (error) {
      console.error(error);

      setError("Gagal menghubungi AI backend.");
    } finally {
      // ====================================================
      // Stop Loading
      // ====================================================

      setLoading(false);

      setIsAnalyzing(false);
    }
  };

  return (
    <div className="comment-form">
      {/* ================================================== */}
      {/* Title */}
      {/* ================================================== */}

      <div className="comment-form-title">✍️ Tulis Komentar Kamu</div>

      {/* ================================================== */}
      {/* AI Status */}
      {/* ================================================== */}

      {isAnalyzing && (
        <div
          style={{
            marginBottom: "18px",

            padding: "14px 18px",

            borderRadius: "16px",

            background: "rgba(59,130,246,0.08)",

            border: "1px solid rgba(59,130,246,0.18)",

            display: "flex",

            alignItems: "center",

            gap: "12px",

            color: "#8ab4ff",

            fontWeight: "600",

            animation: "pulseGlow 1.2s infinite",
          }}
        >
          {/* Spinner */}
          <div
            style={{
              width: "16px",

              height: "16px",

              borderRadius: "999px",

              border: "2px solid rgba(255,255,255,0.2)",

              borderTop: "2px solid #8ab4ff",

              animation: "spin 0.8s linear infinite",
            }}
          />
          🤖 AI sedang menganalisis sentimen...
        </div>
      )}

      {/* ================================================== */}
      {/* Name */}
      {/* ================================================== */}

      <div className="form-row">
        <input
          className="form-input name"
          placeholder="Nama kamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
      </div>

      {/* ================================================== */}
      {/* Rating */}
      {/* ================================================== */}

      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "11px",

            color: "#7a7585",

            marginBottom: "8px",

            letterSpacing: "1px",

            textTransform: "uppercase",
          }}
        >
          Rating Film
        </div>

        <StarRating value={rating} onChange={setRating} />
      </div>

      {/* ================================================== */}
      {/* Textarea */}
      {/* ================================================== */}

      <textarea
        className="form-textarea"
        placeholder="Apa pendapat kamu tentang film ini?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
      />

      {/* ================================================== */}
      {/* Error */}
      {/* ================================================== */}

      {error && <div className="error-text">⚠ {error}</div>}

      {/* ================================================== */}
      {/* Submit Button */}
      {/* ================================================== */}

      <button
        className={`submit-btn ${isAnalyzing ? "ai-loading" : ""}`}
        onClick={handleSubmit}
        type="button"
        disabled={loading}
        style={{
          opacity: loading ? 0.7 : 1,

          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "🤖 Menganalisis AI..." : "Kirim Komentar"}
      </button>
    </div>
  );
};

export default CommentForm;
