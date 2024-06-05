/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'small': 'minmax(3em, 1fr) fit-content(10em) minmax(3em, 1fr) minmax(1em, 1fr) fit-content(10em) minmax(1em, 1fr)',
        'medium': 'calc(2em + 0.5vw) fit-content(10em) fit-content(10em) minmax(3em, 1fr) minmax(1em, 1fr) fit-content(10em) minmax(1em, 1fr) calc(2em + 0.5vw)',
        'large': '1fr fit-content(10em) fit-content(10em) minmax(1em, 1fr) fit-content(15em) minmax(1em, 1fr) minmax(10em, max-content) calc(2em + 0.5vw)'
      },
      gridTemplateRows: {
        'small': 'repeat(4, 10vh) minmax(1em, 1fr) fit-content(10em) minmax(2rem, min-content)',
        'medium': '  minmax(1em, 1fr) repeat(2, 10vh) minmax(2rem, min-content) fit-content(10em) fit-content(10em) minmax(2rem, min-content) minmax(1em, 1fr)',
        'large': '3rem repeat(2, 15vh) repeat(2, 10vh) calc(2em + 0.5vh)'
      },
      colors: {
        'uoc-corporate': '#000078',
        'uoc-masterbrand': '#73edff',
        'uoc-bg': '#b3f5ff',
        'primary': '#12372A',
        'secondary': '#436850',
        'tertiary': '#ADBC9F',
        'background': '#FBFADA',
        'success': '#28a745',
        'danger': '#dc3545',
        'warning': '#ffc107',
        'info': '#029b85',
        'light': '#f8f9fa',
        'dark': '#343a40',
        'bg-color-primary': '#1f4a3e',
        'subtitle-color': '#b3b3b3',
        'link-hover-color': '#0b1a13',
        'navbar-light-color': '#436850',
        'navbar-light-toggler-border-color': '#1f4a3e',
        'card-title-color': '#436850',
        'list-group-bg': '#1f4a3e',
      },
      fontFamily: {
        'helvet': ["Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]
      },
      fontSize: {
        'calc1': 'calc(10px + .8vw)',
        'calc2': 'calc(10px + .4vw)',
        'calc3': 'calc(1.375rem + 1.5vw)',
        'calc4': 'calc(10px + 1.2vw)',
        'calch1': 'calc(20px + 2.2vw)',
        'title': 'calc(1em + 4vw)',
        'subtitle': 'calc(1em + 0.5vw)'
      },
      minWidth: {
        '420': '420px',
      },
      screens: {
        'bk1': '768px',
        'bk2': '1024px'
      },
    },
  },
  plugins: [],
};
