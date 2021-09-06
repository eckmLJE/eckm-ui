import styled, { CSSProperties } from 'styled-components'

export interface HeadlineProps {
  /** Sets the `text-align` CSS property */
  align?: CSSProperties['textAlign']
  /** Sets the typography scale level */
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const Headline = styled.h1<HeadlineProps>(
  ({ theme, level = 1, align = 'left' }) => {
    return {
      ...theme.typography.headline[level],
      textAlign: align,
    }
  }
)
