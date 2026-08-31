import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Core AI Solutions — Technology that works. Intelligence that delivers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} alt="Core AI Solutions Ltd" width={560} height={186} />
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
