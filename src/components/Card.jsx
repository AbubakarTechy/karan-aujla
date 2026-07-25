import React from "react";

export default function Card10({ src, username, song, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col rounded-xl p-4 w-full max-w-[350px]"
      style={{
        border: "0.88px solid",
        backdropFilter: "saturate(180%) blur(14px)",
        background: "#ffffff0d",
        cursor: link ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (link) {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,0,0,0.35)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
      title={link ? `Open ${username} on YouTube` : ""}
    >
      <div style={{ position: "relative" }}>
        <img
          src={src}
          alt={username || "album"}
          className="rounded-xl w-full aspect-square object-cover"
        />
        {link && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              background: "rgba(255,0,0,0.0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,0,0,0.0)";
            }}
          >
            <svg
              style={{ opacity: 0.9, filter: "drop-shadow(0 2px 8px #000)" }}
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
              <polygon points="25,20 47,32 25,44" fill="white" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col rounded-b-xl py-4 pt-8">
        <div className="flex justify-between">
          <h1 className="font-RubikBold">{username}</h1>
          <h1 className="font-bold font-RubikBold">{song}</h1>
        </div>
        {link && (
          <p
            style={{
              fontSize: "12px",
              color: "#ff4444",
              marginTop: "4px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            ▶ Watch on YouTube
          </p>
        )}
      </div>
    </div>
  );
}
