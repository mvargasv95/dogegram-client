import { createGlobalStyle } from 'styled-components'
import PressStart from './pressStart.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Press Start';
        src: local('Press Start'), local('PressStart'),
        url(${PressStart}) format('truetype')
    }
`
