import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "8M+", label: "Monthly Listeners" },
    { value: "200M+", label: "YouTube Views" },
    { value: "15+", label: "Albums & EPs" },
    { value: "2015", label: "Career Started" },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* ── Animated gradient blobs ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
            animation: "blob1 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-100px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,30,30,0.22) 0%, transparent 70%)",
            animation: "blob2 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(180,60,220,0.18) 0%, transparent 70%)",
            animation: "blob1 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* ── Subtle grid lines ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: "999px",
            padding: "6px 18px",
            marginBottom: "28px",
            fontSize: "12px",
            color: "#D4AF37",
            letterSpacing: "3px",
            fontWeight: 700,
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AF37", display: "inline-block", animation: "pulse 2s infinite" }} />
          PUNJAB DA PUTTAR
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-2px",
            marginBottom: "12px",
          }}
        >
          KARAN
        </h1>
        <h1
          style={{
            fontSize: "clamp(52px, 10vw, 110px)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #D4AF37 0%, #FF3333 50%, #D4AF37 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            letterSpacing: "-2px",
            marginBottom: "24px",
            animation: "shimmer 4s linear infinite",
          }}
        >
          AUJLA
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(15px, 2.5vw, 20px)",
            color: "#aaa",
            maxWidth: "640px",
            margin: "0 auto 16px",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Singer · Songwriter · Rapper
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: "#666",
            maxWidth: "560px",
            margin: "0 auto 48px",
            lineHeight: 1.8,
          }}
        >
          From Sahnewal, Punjab to the world stage — browse every album, EP and hit in one place.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <button
            onClick={() => scrollTo("albums")}
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #D4AF37, #c8960a)",
              color: "#000",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "2px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 24px rgba(212,175,55,0.5)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(212,175,55,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(212,175,55,0.5)";
            }}
          >
            🎵 EXPLORE ALBUMS
          </button>

          <a
            href="https://www.youtube.com/@KaranAujlaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 36px",
              background: "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              borderRadius: "999px",
              border: "2px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF0000";
              e.currentTarget.style.color = "#FF0000";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            YOUTUBE CHANNEL
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            maxWidth: "700px",
            margin: "0 auto 64px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.7)",
                padding: "24px 16px",
                textAlign: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.7)"; }}
            >
              <div
                style={{
                  fontSize: "clamp(24px, 4vw, 34px)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #D4AF37, #FF3333)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#666",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "#555",
            fontSize: "11px",
            letterSpacing: "3px",
            animation: "bounce 2s infinite",
          }}
        >
          <span>SCROLL</span>
          <div style={{ fontSize: "18px" }}>↓</div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.08); }
          66% { transform: translate(30px, -20px) scale(0.92); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
