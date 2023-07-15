/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],

          "primary": "#32D095",

          "secondary": "#7ED2B3",

          "accent": "#C5F4E3",

          "neutral": "#828BA0",

          "base-100": "#FFFFFF",

          "info": "#CCCBD3",

          "success": "#80CED1",

          "warning": "#EFD8BD",

          "error": "#E58B8B",
        },
      },
      "autumn",
      "light"
    ],
  },
  plugins: [require("daisyui")],
}

