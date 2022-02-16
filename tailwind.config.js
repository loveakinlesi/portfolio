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
        dark: "#000000",
        black: {
          DEFAULT:'#090909',
          alt: '#101010'
        },
        primary: {
          DEFAULT: "#9333EA"
        },
        design: {
          DEFAULT: "#FBAE18"
        },
        develop: {
          // DEFAULT: "#4EAB5F"
          DEFAULT: "#0ea5e9"
        },
        blog: {
          DEFAULT: "#6E6E73"
        },
      },
      backgroundImage: {
        'hero-image-dark': "url('https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')",
        'hero-image': "url('https://images.unsplash.com/photo-1581985283743-abc20b6d8993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')",
        'podcast-card-dark': "url('https://images.unsplash.com/photo-1590602846581-7d3eec520d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
        'podcast-card': "url('https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'about-1': "url('https://images.unsplash.com/photo-1524649114690-a68ddc31db41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
        'about-1-dark': "url('https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80')",
        'blog-hero': "url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')",
        'blog-hero-dark': "url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')",
        'cci': "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')",
        'develop-image': "url('https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')",
        'design-image': "url('https://images.unsplash.com/photo-1579547945156-1f19a38202b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
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
