import styled, { CSSProperties } from 'styled-components'

export type BodySize = 'small' | 'default' | 'large'

const bodySizes = {
  small: 0,
  default: 1,
  large: 2,
}

export interface BodyProps {
  size?: BodySize
  bold?: boolean
  align?: CSSProperties['textAlign']
}

export const Body = styled.p<BodyProps>(
  ({ theme, size = 'default', align = 'left', bold }) => {
    return {
      ...theme.typography.body[bodySizes[size]],
      fontWeight: bold ? 600 : 400,
      textAlign: align,
    }
  }
)
