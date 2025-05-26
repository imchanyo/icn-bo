import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 시스템 색상 변수 (기존)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // 🎨 Primary Colors
        "primary-50": "#f2f2ff",
        "primary-100": "#e2e3ff",
        "primary-200": "#c9cbff",
        "primary-300": "#a8aaff",
        "primary-400": "#878aff",
        "primary-500": "#5d5fef",
        "primary-600": "#494acc",
        "primary-700": "#3a3daa",
        "primary-800": "#2f2f88",
        "primary-900": "#24246e",

        // 🎨 Brand Colors
        "brand-50": "#eaf3fb",
        "brand-100": "#d3e6f5",
        "brand-200": "#b7d5ef",
        "brand-300": "#9cc3e6",
        "brand-400": "#7eafdc",
        "brand-500": "#5d97c7",
        "brand-600": "#477eb0",
        "brand-700": "#386693",
        "brand-800": "#2c5276",
        "brand-900": "#1f3e5a",

        // 🎨 Gray Colors
        "gray-50": "#fafafa",
        "gray-100": "#f4f4f5",
        "gray-200": "#e4e4e7",
        "gray-300": "#d4d4d8",
        "gray-400": "#a1a1aa",
        "gray-500": "#71717a",
        "gray-600": "#52525b",
        "gray-700": "#3f3f46",
        "gray-800": "#27272a",
        "gray-900": "#151d48",

        // 🎨 Accent Colors
        "accent-50": "#edfdf9",
        "accent-100": "#c8f4e7",
        "accent-200": "#9bead3",
        "accent-300": "#6fdfc0",
        "accent-400": "#41d5ad",
        "accent-500": "#1bc29b",
        "accent-600": "#11997c",
        "accent-700": "#0a7360",
        "accent-800": "#064f44",
        "accent-900": "#032f29",

        // 🌈 Gradient colors
        "gradient-start": "#5d97c7",
        "gradient-end": "#477eb0",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
};

export default config;
