module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      cursive: ['Great Vibes', 'cursive'],
    },
    extend: {
      colors: {
        dark: "#131414",
        black: {
          DEFAULT:'#090909',
          alt: '#101010'
        },
        white: {
          DEFAULT:'#ffffff',
          alt: "#e2e2e2"
        },
        primary: {
          DEFAULT: "aliceblue"
        },
        design: {
          DEFAULT: "#FBAE18"
        },
        develop: {
          DEFAULT: "#0ea5e9"
        },
        blog: {
          DEFAULT: "#6E6E73"
        },
      },
      backgroundImage: {
        'hero-image': "url('https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80')",
        'podcast-card': "url('https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'blog-hero': "url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')",
        'store': "url('https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2391&q=80')",
        'notfound': "url('https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
