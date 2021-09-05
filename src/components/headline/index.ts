import styled from 'styled-components'

export interface HeadlineProps {
  align?: 'left' | 'center' | 'right'
}

export const Headline0 = styled.h1<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[0], textAlign: align }
})
export const Headline1 = styled.h1<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[1], textAlign: align }
})
export const Headline2 = styled.h2<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[2], textAlign: align }
})
export const Headline3 = styled.h3<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[3], textAlign: align }
})
export const Headline4 = styled.h4<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[4], textAlign: align }
})
export const Headline5 = styled.h5<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[5], textAlign: align }
})
export const Headline6 = styled.h6<HeadlineProps>(({ theme, align }) => {
  return { ...theme.typography.headline[6], textAlign: align }
})
