/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      boxShadow: {
        'pricingShadow': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {

        inter: ['Inter']
      },

    },
  },
  plugins: [],
}