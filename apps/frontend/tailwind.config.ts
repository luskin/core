import type { Config } from "tailwindcss"

interface ColorSwatch {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
}
export interface MshpTailwindConfig extends Config {
  theme: Config["theme"] & {
    colors: {
      slate: ColorSwatch
      accent: ColorSwatch
      success: ColorSwatch
      error: ColorSwatch
      warning: ColorSwatch
      information: ColorSwatch
      update: ColorSwatch
    }
  }
}

const config: MshpTailwindConfig = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    colors: {
      slate: {
        1: "#FCFCFD",
        2: "#F9F9FB",
        3: "#F2F2F5",
        4: "#EBEBEF",
        5: "#E4E4E9",
        6: "#DDDDE3",
        7: "#D3D4DB",
        8: "#B9BBC6",
        9: "#8B8D98",
        10: "#7E808A",
        11: "#60646C",
        12: "#1C2024",
      },
      accent: {
        1: "#F7FEFB",
        2: "#F1FDF7",
        3: "#EAFCF4",
        4: "#E2F9EE",
        5: "#CEF5E2",
        6: "#A7E7C8",
        7: "#87DCB3",
        8: "#32C37D",
        9: "#00A857",
        10: "#00904A",
        11: "#006F39",
        12: "#003D20",
      },
      success: {
        1: "#FBFEFC",
        2: "#F2FCF5",
        3: "#E9F9EE",
        4: "#DDF3E4",
        5: "#CCEBD7",
        6: "#B4DFC4",
        7: "#92CEAC",
        8: "#5BB98C",
        9: "#30A46C",
        10: "#299764",
        11: "#18794E",
        12: "#193B2D",
      },
      error: {
        1: "#FFFCFC",
        2: "#FFF7F7",
        3: "#FFEFEF",
        4: "#FFE5E5",
        5: "#FDD8D8",
        6: "#F9C6C6",
        7: "#F3AEAF",
        8: "#EB9091",
        9: "#E5484D",
        10: "#D93D42",
        11: "#C62A2F",
        12: "#641723",
      },
      warning: {
        1: "#FEFDFB",
        2: "#FFF9ED",
        3: "#FFF3D0",
        4: "#FFECB7",
        5: "#FFE0A1",
        6: "#F5D08C",
        7: "#E4BB78",
        8: "#D6A35C",
        9: "#FFC53D",
        10: "#F4AE0A",
        11: "#915930",
        12: "#4F3422",
      },
      information: {
        1: "#FBFCFF",
        2: "#F6F9FF",
        3: "#EFF5FF",
        4: "#E1ECFF",
        5: "#DCE8FD",
        6: "#BAD3FF",
        7: "#8AB3FF",
        8: "#6097FD",
        9: "#4F8DFF",
        10: "#2371FF",
        11: "#1255CF",
        12: "#023289",
      },
      update: {
        1: "#FDFCFE",
        2: "#FBFAFF",
        3: "#F5F2FF",
        4: "#EDE9FE",
        5: "#E4DEFC",
        6: "#D7CFF9",
        7: "#C4B8F3",
        8: "#AA99EC",
        9: "#6E56CF",
        10: "#5F44D6",
        11: "#422CB4",
        12: "#2F265F",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
