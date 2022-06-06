module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'pacifico': ['Pacifico', 'sans-serif'],
    },
    fontSize: {
      lato_base: [
        '0.875rem', // 14px
        {
          lineHeight: '120%',
          letterSpacing: '0.1em',
        }
      ],
      lato_header: [
        '1.25rem', // 20px
        {
          lineHeight: '120%',
          letterSpacing: '0.1em',
        }
      ],
      lato_subheader_lg: [
        '1.625rem', // 26px
        {
          lineHeight: '120%',
        }
      ],
      lato_subheader_md: [
        '1.375rem', // 22px
        {
          lineHeight: '120%',
        }
      ],
      lato_subheader_sm: [
        '1rem', // 16px
        {
          lineHeight: '120%',
        }
      ],
      lato_subheader_xs: [
        '0.75rem', // 12px
        {
          lineHeight: '120%',
        }
      ],
      lato_footer: [
        '1.125rem', // 18px
        {
          lineHeight: '40px',
        }
      ],
      lato_footer_md: [
        '0.75rem', // 12px
        {
          lineHeight: '30px',
        }
      ],
      pacifico_header_lg: [
        '3.75rem', // 60px
        {
          lineHeight: '175.6%',
        }
      ],
      pacifico_header_sm: [
        '1.625rem', // 26px
        {
          lineHeight: '175.6%',
        }
      ],
      pacifico_header_xs: [
        '1.125rem', // 18px
        {
          lineHeight: '175.6%',
        }
      ],
      pacifico_header2_lg: [
        '2.5rem', // 40px
        {
          lineHeight: '175.6%',
        }
      ],
      pacifico_header2_md: [
        '1.375rem', // 22px
        {
          lineHeight: '175.6%',
        }
      ],
      pacifico_header2_sm: [
        '1.25rem', // 20px
        {
          lineHeight: '175.6%',
        }
      ],
    },
    extend: {
      colors: {
        green: '#10504F',
        gray_1: '#EFEFEF',
        gray_2: '#C6C6C6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
