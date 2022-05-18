import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/nunito-sans-v12-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-sans-v12-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/nunito-sans-v12-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-sans-v12-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/nunito-sans-v12-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-sans-v12-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local(''),
       url('/fonts/nunito-sans-v12-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/nunito-sans-v12-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Montserrat Light'), local('Montserrat-Light'),
       url('/fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'),
}

@font-face {
  font-family: 'TimesNewRoman';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('TimesNewRoman Regular'), local('TimesNewRoman-Regular'),
       url('/fonts/times-new-roman.ttf') format('ttf'),
}

@font-face {
  font-family: 'TimesNewRoman';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('TimesNewRoman Bold'), local('TimesNewRoman-Bold'),
       url('/fonts/times-new-roman-bold.ttf') format('ttf'),
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
       url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'),
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`
