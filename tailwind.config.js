/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Libre_Calson_Text: ['Libre Caslon Text', 'sans-serif'],
        Libre_Calson_Display: ['Libre Caslon Display', 'sans-serif']
      },
      colors: {

        'primary': "#ECEEFF",
        "text-blue": "#042255",
        "btn-blue": "#243745",
        "bg-gray": "#F0F2F3",
        "footer": "#2A2F35",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/Frame 2.svg')",
        'card': "url('assets/images/Frame 9.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}