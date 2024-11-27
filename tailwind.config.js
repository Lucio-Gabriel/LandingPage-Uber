/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/src/assest/bguber.png')",
        city: "url('/src/assest/bg-city.png')",
      },
    },
  },
  plugins: [],
};

