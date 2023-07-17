import { colors } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   'cel': {'max': '400px'}
    // },
    extend: {
      spacing: {
        14: "3.5rem",
        "125px": "125px",
        "100": "600px"
      },

      colors: {
        hoverspt: "#18D760",
        "purple-main": "#2d46B9",
        "green-main": "#1ED760",
      },

      backgroundImage: {
        "csgo-theme": "url('/img/csgo/banner.png')",
        "spotify-theme": "url('/img/spotify/bursts.svg')",
        "spotify-theme-mobile": "url('/img/spotify/bursts-mobile.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },

      backgroundPosition: {
        banner: "46% 4%",
        "banner-mobile": "top 25% center",
      },

      fontSize: {
        "9xl": "9rem",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
