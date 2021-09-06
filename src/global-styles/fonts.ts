import { css } from 'styled-components'
import GothamBlackOTF from '../fonts/Gotham-Black.otf'
import GothamBoldOTF from '../fonts/Gotham-Bold.otf'
import GothamBookOTF from '../fonts/Gotham-Book.otf'

export const fonts = css`
  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 800;
    src: url(${GothamBlackOTF});
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 600;
    src: url(${GothamBoldOTF});
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    src: url(${GothamBookOTF});
  }
`
