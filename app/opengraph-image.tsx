import { ImageResponse } from "next/og";

export const alt =
  "Piyush Kashyap — Full Stack Developer and AI Product Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#121820",
          color: "#f7f8ee",
          fontFamily: "sans-serif",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -80,
            display: "flex",
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "#c5f85a",
            opacity: 0.14,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: 250,
            display: "flex",
            width: 500,
            height: 500,
            borderRadius: 999,
            border: "80px solid rgba(197,248,90,0.08)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 54,
                  height: 54,
                  borderRadius: 15,
                  background: "#c5f85a",
                  color: "#121820",
                  fontSize: 18,
                  fontWeight: 900,
                }}
              >
                PK
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <span style={{ fontSize: 20, fontWeight: 800 }}>
                  Piyush Kashyap
                </span>
                <span
                  style={{
                    color: "#9aa4b2",
                    fontSize: 12,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Full Stack Developer · AI Product Builder
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                padding: "10px 16px",
                color: "#c5f85a",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#c5f85a",
                }}
              />
              Production AI systems
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 870,
            }}
          >
            <span
              style={{
                color: "#9aa4b2",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Architecture / AI / Deployment / Outcome
            </span>
            <span
              style={{
                fontSize: 76,
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 900,
              }}
            >
              I build AI products
            </span>
            <span
              style={{
                color: "#c5f85a",
                fontSize: 76,
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 900,
              }}
            >
              that do real work.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 24,
              color: "#9aa4b2",
              fontSize: 14,
            }}
          >
            <span>AI agents · Multi-tenant SaaS · Business automation</span>
            <span>Mohali / Chandigarh, India</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
