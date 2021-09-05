import styled, { DefaultTheme } from 'styled-components'

type Color = keyof DefaultTheme['color']

export interface HeadlineProps {
  align?: 'left' | 'center' | 'right'
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  color?: Color
}

export const Headline = styled.h1<HeadlineProps>(
  ({ theme, level, align, color }) => {
    return {
      ...theme.typography.headline[level ?? 1],
      textAlign: align,
      color: theme.color[color ?? 'black'].default,
    }
  }
)
