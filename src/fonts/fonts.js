import { createGlobalStyle, css } from 'styled-components'
import PressStart from './pressStart.ttf'
import Muli from './muli.ttf'

export default createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      height: auto
    }
    @font-face {
        font-family: 'Press Start';
        src: local('Press Start'), local('PressStart'),
        url(${PressStart}) format('truetype')
    }
    @font-face {
        font-family: 'Muli';
        src: local('Muli'), local('Muli'),
        url(${Muli}) format('truetype')
    }
`
