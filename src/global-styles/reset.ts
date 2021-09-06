import { css } from 'styled-components'

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    text-rendering: optimizeSpeed;
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  *:focus {
    scroll-margin-bottom: 8vh;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`
