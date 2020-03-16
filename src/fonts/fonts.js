import { createGlobalStyle, css } from 'styled-components'
import PressStart from './pressStart.ttf'

export default createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
    }
    @font-face {
        font-family: 'Press Start';
        src: local('Press Start'), local('PressStart'),
        url(${PressStart}) format('truetype')
    }
`
