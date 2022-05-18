export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius100: '0.4rem',
    radius200: '2rem',
    radius300: '5rem'
  },
  font: {
    family:
      "Nunito Sans, Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    sizes: {
      xxsmal: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '3.4rem',
      xxlarge: '4.8rem',
      xxxlarge: '6rem'
    }
  },
  buttonPadding: {
    xxsmall: '1rem 1.5rem ',
    xsmall: '1.4rem 3.5rem ',
    small: '1.4rem 4.5rem ',
    medium: '1.4rem 7.5rem ',
    large: '1.4rem 13rem ',
    xlarge: '1.4rem 35rem'
  },
  colors: {
    blue: {
      10: '#0030CC',
      15: '#0036E6',
      20: '#003CFF',
      25: '#1A50FF',
      30: '#3363FF',
      35: '#4D77FF',
      40: '#668AFF',
      45: '#809EFF',
      50: '#99B1FF',
      55: '#B3C5FF',
      60: '#CCD8FF',
      65: '#E6ECFF'
    },
    gray: {
      10: '#0F0D15',
      15: '#1D1929',
      20: '#34303E',
      25: '#4A4754',
      30: '#615E69',
      35: '#77757F',
      40: '#8E8C94',
      45: '#A5A3A9',
      50: '#BBBABF',
      55: '#D2D1D4',
      60: '#E8E8EA',
      65: '#F9F9F9'
    },
    green: {
      10: '#18BA92',
      15: '#1BD2A4',
      20: '#1EE9B6',
      25: '#35EBBD',
      30: '#4BEDC5',
      35: '#62F0CC',
      40: '#78F2D3',
      45: '#8FF4DB',
      50: '#A5F6E2',
      55: '#BCF8E9',
      60: '#D2FBF0',
      65: '#E9FDF8'
    },
    orange: {
      10: '#CC5801',
      15: '#E66301',
      20: '#FF6E01',
      25: '#FF7D1A',
      30: '#FF8B34',
      35: '#FF9A4D',
      40: '#FFA867',
      45: '#FFB780',
      50: '#FFC599',
      55: '#FFD4B3',
      60: '#FFE2CC',
      65: '#FFF1E6'
    },
    pink: {
      10: '#C80068',
      15: '#E10075',
      20: '#FA0082',
      25: '#FB1A8F',
      30: '#FB339B',
      35: '#FC4DA8',
      40: '#FC66B4',
      45: '#FD80C1',
      50: '#FD99CD',
      55: '#FEB3DA',
      60: '#FECCE6',
      65: '#FFE6F3'
    },
    purple: {
      10: '#AE59C6',
      15: '#C364DF',
      20: '#D96FF8',
      25: '#DD7DF9',
      30: '#E18CF9',
      35: '#E49AFA',
      40: '#E8A9FB',
      45: '#ECB7FC',
      50: '#F0C5FC',
      55: '#F4D4FD',
      60: '#F7E2FE',
      65: '#FBF1FE'
    },
    red: {
      10: '#C32021',
      15: '#DC2425',
      20: '#F42829',
      25: '#F53E3E',
      30: '#F65354',
      35: '#F76969',
      40: '#F87E7F',
      45: '#F87E7F',
      50: '#FBA9A9',
      55: '#FCBFBF',
      60: '#FDD4D4',
      65: '#FEEAEA'
    },
    yellow: {
      10: '#CCB243',
      15: '#E6C84C',
      20: '#FFDE54',
      25: '#FFE165',
      30: '#FFE576',
      35: '#FFE887',
      40: '#FFEB98',
      45: '#FFEFAA',
      50: '#FFF2BB',
      55: '#FFF5CC',
      60: '#FFF8DD',
      65: '#FFFCEE'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
}

type ColorOptionsType = {
  10: string
  15: string
  20: string
  25: string
  30: string
  35: string
  40: string
  45: string
  50: string
  55: string
  60: string
  65: string
}
export type ThemeColorsType = {
  blue: ColorOptionsType
  gray: ColorOptionsType
  green: ColorOptionsType
  orange: ColorOptionsType
  pink: ColorOptionsType
  purple: ColorOptionsType
  red: ColorOptionsType
  yellow: ColorOptionsType
}
