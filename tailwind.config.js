// Example `tailwind.config.js` file

module.exports = {
  important: true,
  theme: {
    // screens: {
    //   'xs': '460px',
    // },
    
    inset: {
      '0':'0',
    '1/2': '50%' ,
    '1/3': '30%' ,
    '2': '.5rem' ,
    '3': '2rem' ,
    '1' : "1rem"
    },
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#ff5a00',
        footerbg:"#141e73",
        textcolor:"#212121",
        greylight: "#757575",
        secondary:"#00a53c",
        greenhover: "#1789167",
        primaryhover:"#FF9459",
        third:"#212121",
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
      spacing: {
        '84': '21rem',
        'm4': '-4px',
        '96': '24rem',
        'mincontent': 'min-content',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%',
        '4/5': '80%',
      },
      fontSize: {
        'tiny': '.675rem',
            
      },
      zIndex: {
        '200': 200,
        '300': 300,
      }
      
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}