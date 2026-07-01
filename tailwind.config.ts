import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { base:"#070A12", panel:"#111625", cyan:"#48D0F5", blue:"#4671FF", purple:"#9257FA", green:"#35E599", muted:"#9CA8BF" }, boxShadow:{ glow:"0 0 80px rgba(72,208,245,.25)", panel:"0 24px 80px rgba(0,0,0,.32)" } } },
  plugins: [],
};
export default config;
