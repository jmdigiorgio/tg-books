import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          bg: "#f5f5f5",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
