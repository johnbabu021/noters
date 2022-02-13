module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/core/**/*.{js,ts,jsx,tsx}",
    "./components/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'green-dark':'#34d399',
      'white':'#fff',
      'gray-200':'#e5e7eb',
      'black':"#1c1c1e",
      'accent-color':"#10b981",
      transparent:"transparent"
    },
    screens:{
      'xxs':'100px',
      'xs':'373px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
