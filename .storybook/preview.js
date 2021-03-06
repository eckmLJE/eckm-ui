import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import { GlobalStyles } from '~/global-styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  backgrounds: { grid: { cellSize: 16 } },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
