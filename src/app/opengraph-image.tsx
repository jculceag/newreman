import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt =
  "NEW REMAN · Recuperadora de peças elétricas automotivas em São Paulo";
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
          background: "#0c1118",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-12%",
            top: "-20%",
            width: "55%",
            height: "70%",
            borderRadius: "9999px",
            background:
              "radial-gradient(ellipse at center, rgba(224,138,74,0.28) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-10%",
            bottom: "-25%",
            width: "50%",
            height: "60%",
            borderRadius: "9999px",
            background:
              "radial-gradient(ellipse at center, rgba(42,53,69,0.9) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#e08a4a",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Recuperadora de peças elétricas automotivas
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#f3f6fa",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              color: "rgba(220,227,238,0.78)",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Motor de partida, alternador e mais pra oficinas em São Paulo.
            Garantia de 3 meses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(220,227,238,0.55)",
            fontSize: 20,
          }}
        >
          <span>Vila Romana · São Paulo, SP</span>
          <span>newreman.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
