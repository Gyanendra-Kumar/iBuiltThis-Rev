// app/fonts.ts
import { Edu_NSW_ACT_Cursive, Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
});

export const eduNswActCursive = Edu_NSW_ACT_Cursive({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-edu-nsw-act-cursive",
  adjustFontFallback: false,
});
