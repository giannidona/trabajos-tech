/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        eRed: "#870c0c",
        eGray: "#1d1d1d",
      },
    },
  },
  plugins: [],
};
