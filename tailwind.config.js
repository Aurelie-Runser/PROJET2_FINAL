module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
      colors: {
       green:{
        "450": "#08d57f",
        "550": "#049a5b",
       },
       red:{
        "550": "#ee4747",
       },
       blue:{
        "450": "#339ce3",
       },
       yellow:{
        "250": "#ffc107"
       }
       //gray = neutral-500
    
      },
      fontSize: {
       "2xs": "0.625rem",
       "xs": "0.75rem",
       "sm": "0.875rem",
       "base": "1rem",
       "lg": "1.125rem",
       "xl": "1.25rem",
       "2xl": "1.375rem",
       "3xl": "1.5rem",
       "4xl": "2rem",
       "5xl": "2.3125rem",
       "6xl": "2.375rem",
       "7xl": "3.2rem",
       "8xl": "4.25rem"
      },

      fontFamily: {
       "arial": "Arial",
      },
  },
  },
  
  plugins: [],
 }