import { useState } from "react";

export default function Last() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "2px solid #D4AF37",
        boxShadow: "0 4px 32px rgba(212,175,55,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #D4AF37, #FF3333)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "16px",
              color: "#000",
              letterSpacing: "1px",
              boxShadow: "0 0 16px rgba(212,175,55,0.5)",
            }}
          >
            KA
          </div>
          <div>
            <div
              style={{
                color: "#D4AF37",
                fontWeight: 900,
                fontSize: "15px",
                letterSpacing: "3px",
                lineHeight: 1,
              }}
            >
              KARAN AUJLA
            </div>
            <div
              style={{
                color: "#888",
                fontSize: "10px",
                letterSpacing: "2px",
                marginTop: "2px",
              }}
            >
              OFFICIAL FAN PAGE
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {[
            { label: "Albums", id: "albums" },
            { label: "EPs", id: "eps" },
            { label: "Journey", id: "journey" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ccc",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "4px 0",
                  transition: "color 0.2s",
                  textTransform: "uppercase",
                  borderBottom: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#D4AF37";
                  e.target.style.borderBottomColor = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ccc";
                  e.target.style.borderBottomColor = "transparent";
                }}
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* YouTube Button */}
          <li>
            <a
              href="https://www.youtube.com/@KaranAujlaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#FF0000",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "24px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 0 12px rgba(255,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,0,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(255,0,0,0.4)";
              }}
            >
              ▶ YouTube
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#D4AF37",
            fontSize: "24px",
            cursor: "pointer",
            display: "none",
          }}
          className="show-mobile"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(0,0,0,0.97)",
            borderTop: "1px solid #333",
            padding: "16px 24px 24px",
          }}
        >
          {[
            { label: "Albums", id: "albums" },
            { label: "EPs", id: "eps" },
            { label: "Journey", id: "journey" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                color: "#ccc",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "12px 0",
                textAlign: "left",
                textTransform: "uppercase",
                borderBottom: "1px solid #222",
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.youtube.com/@KaranAujlaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#FF0000",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "24px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: "16px",
            }}
          >
            ▶ YouTube Channel
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
