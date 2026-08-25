import { ImageResponse } from "next/og";

export const alt = "Core AI Solutions — Technology that works. Intelligence that delivers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1628",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#0A1628",
              border: "1px solid #1A4FA0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0ABFBC",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: 2 }}>CORE AI SOLUTIONS LTD</div>
            <div style={{ fontSize: 16, color: "#0ABFBC", letterSpacing: 3, marginTop: 6 }}>
              WE BUILD THE FUTURE
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Technology that works.
          </div>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#0ABFBC" }}>
            Intelligence that delivers.
          </div>
          <div style={{ marginTop: 28, fontSize: 24, color: "rgba(255,255,255,0.78)", maxWidth: 900 }}>
            Lagos-based engineering house building production-grade software, AI, and payment
            infrastructure for Africa.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
