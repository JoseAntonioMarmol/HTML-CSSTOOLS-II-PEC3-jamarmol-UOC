/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        'bg-color-primary': '#ceefe3',
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
        'subtitle': 'calc(1em + 0.5vw)',
        'xxs': ['0.7rem', '1rem'],
      },
      minWidth: {
        '420': '420px',
      },
      screens: {
        'sm': { max: '767px' },
        'md': { min: '768px', max: '1023px' },
        'lg': {min: '1024px'},
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
