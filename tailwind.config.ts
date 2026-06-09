import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      colors: {
        ink: "#050507",
        panel: "#0b0d12",
        line: "rgba(255,255,255,.1)",
        muted: "#a7adbb",
        acid: "#c6ff4f",
        cyan: "#69e7ff",
        grape: "#8b5cf6",
        ember: "#ff7a45"
      },
      boxShadow: {
        glow: "0 0 80px rgba(105, 231, 255, .18)",
        card: "0 20px 80px rgba(0,0,0,.35)"
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-16px)" } },
        spinSlow: { "to": { transform: "rotate(360deg)" } }
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 7s ease-in-out infinite",
        spinSlow: "spinSlow 24s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
