/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#81C784'
        }
      },
	  animation:{
		  'lslide': 'lslide 1s ease-out 1',
		  'rslide': 'rslide 1s ease-out 1',
		  'uslide': 'uslide 1s ease-out 1',
	  },
	  
	  keyframes:{
		  lslide:{
			  '0%':{transform: 'translateX(40%)'},
			  '100%':{transform: 'translateX(0)'},
		  },
		  rslide:{
			  '0%':{transform: 'translateX(-40%)'},
			  '100%':{transform: 'translateX(0)'},
		  },
		  uslide:{
			  '0%':{opacity: '0.4', transform: 'scale(0.9)'},
			  '100%':{opacity: '1',transform: 'scale(1)'},
		  },
	  }
    },
  },
  plugins: [],
}

