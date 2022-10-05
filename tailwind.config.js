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
        "input-box-color": "#f4e1be",
        "placeholder-color": "#c7b596",
      },
      fontFamily: {
        // archivo: ['"Archivo"'],
        alatsi: ['"Alatsi"'],
        nanum_gothic: ['"Nanum Gothic"', "sans-serif"],
      },
      gridTemplateRows: {
        9: "repeat(9, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-9": "span 9 / span 9",
      },
      cursor: {
        // copy: "url(/images/copy-cursor.png), pointer",
        copy: "url(/images/copy-cursor.png) 20 20, pointer",
      },
    },
  },
  plugins: [],
};
