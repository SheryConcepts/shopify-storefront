module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Default Tailwind screens
      'xxsm':'320px',
      'xxs': '375px',
      'xxs1':'390px',
      'xs1':'465px', // Custom Double Extra extra small screens
      'xs': '498px',   // Custom Extra small screens
      'xsm':'520px',  // Custom Extra  small screens
      'sm': '640px',
      'md': '768px',
      'md1':'820px',
      'md2':'852px',
      'lg': '1024px',
      'lg2': '990px', // Custom screen size
      'xl': '1280px',
      'xl2':'1180px',
      '2xl': '1440px',
      '3xl':'1520px', // Custom 2xl screens
      '4xl':'1660px',
      '5xl':'1820px',
      '6xl':'2000px',
    },
    extend: {
      spacing: {
        // Define custom spacing values if needed
      },
    },
  },
  plugins: [],
};