/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: "#fbc66f",
          purple: "#c1a8e6",
          orange: "#f37925",
          beige: "#e6d3b3",
          blue: "#91c4ce",
          black: "#1a1a17",
        },
      },
      fontFamily: {
        // archivo: ['"Archivo"'],
        alatsi: ['"Alatsi"'],
        nanum_gothic: ['"Nanum Gothic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
