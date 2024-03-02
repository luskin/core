import localFont from "next/font/local"

export const brandFont = localFont({
  src: "./AkzidenzMediumExtended.woff2",
  variable: "--font-brand",
})

export const bodyFont = localFont({
  src: [
    {
      path: "./SanFranciscoProRegular.woff2",
      weight: "400",
    },
    {
      path: "./SanFranciscoProSemiBold.woff2",
      weight: "600",
    },
    {
      path: "./SanFranciscoProBold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-body",
})
