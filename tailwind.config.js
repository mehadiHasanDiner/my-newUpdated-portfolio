// @import url('https://fonts.googleapis.com/css2?family=Acme&family=Rowdies:wght@300;400;700&display=swap');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
};
