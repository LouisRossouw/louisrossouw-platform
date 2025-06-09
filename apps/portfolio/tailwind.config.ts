import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/portfolio/**/*.{ts,tsx}", // This app
    "./packages/ui/**/*.{ts,tsx}", // Shared components
  ],
  presets: [require("@repo/ui/tailwind.config.ts")],
};
export default config;
