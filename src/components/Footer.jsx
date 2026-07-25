export default function Footer() {
  const socials = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@KaranAujlaOfficial",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      color: "#FF0000",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/karanaujlaofficial/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "#E1306C",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/2qk9voo8llSGYcZ6xrBzKx",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
      color: "#1DB954",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com/karanaujla_o",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "#1DA1F2",
    },
  ];

  const quickLinks = [
    { label: "Top Albums", id: "albums" },
    { label: "Top EPs", id: "eps" },
    { label: "Journey", id: "journey" },
    { label: "YouTube Channel", url: "https://www.youtube.com/@KaranAujlaOfficial" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(212,175,55,0.25)",
        color: "#fff",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #D4AF37, #FF3333)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#000",
                  flexShrink: 0,
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
                  }}
                >
                  KARAN AUJLA
                </div>
                <div style={{ color: "#555", fontSize: "10px", letterSpacing: "2px" }}>
                  OFFICIAL FAN PAGE
                </div>
              </div>
            </div>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8", maxWidth: "260px" }}>
              Your one-stop destination for all things Karan Aujla — albums, EPs, visuals and the journey of Punjab's finest.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.background = `${s.color}18`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "3px",
                fontWeight: 700,
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "12px" }}>
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#D4AF37"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}
                    >
                      <span style={{ color: "#D4AF37", fontSize: "10px" }}>▶</span>
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#666",
                        fontSize: "14px",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#D4AF37"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}
                    >
                      <span style={{ color: "#D4AF37", fontSize: "10px" }}>▶</span>
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Songs */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "3px",
                fontWeight: 700,
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Popular Tracks
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Softly",
                "52 Bars",
                "Don't Look",
                "Jee Ni Lagda",
                "Admirin' You",
                "BTFU",
              ].map((track) => (
                <li
                  key={track}
                  style={{
                    marginBottom: "10px",
                    color: "#555",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#D4AF37",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {track}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            padding: "20px 0",
          }}
        >
          <p style={{ color: "#444", fontSize: "13px", margin: 0 }}>
            © 2025{" "}
            <span style={{ color: "#D4AF37", fontWeight: 700 }}>Karan Aujla</span>{" "}
            Fan Page. Made with ❤️ for Punjabi music lovers.
          </p>
          <p style={{ color: "#333", fontSize: "12px", margin: 0 }}>
            🇮🇳 Sahnewal, Punjab
          </p>
        </div>
      </div>
    </footer>
  );
}
