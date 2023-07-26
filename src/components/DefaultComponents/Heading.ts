import { styled, css } from 'styled-components'

interface IPropsHeading {
  variant?: 'secondary' | 'tertiary' | 'quaternary' | 'quinary'
  isBold?: boolean
}

export const Heading = styled.h2<IPropsHeading>`
  font-size: 3rem;
  line-height: 116.66%;
  letter-spacing: -1px;
  font-weight: ${props => (props.isBold ? '700' : '400')};

  ${props =>
    props.variant === 'secondary' &&
    css`
      font-size: 2.5rem;
      line-height: 120%;
    `}

  ${props =>
    props.variant === 'tertiary' &&
    css`
      font-size: 2rem;
      line-height: 125%;
      letter-spacing: normal;
    `}
  ${props =>
    props.variant === 'quaternary' &&
    css`
      font-size: 1.5rem;
      line-height: 133.33%;
      letter-spacing: normal;
    `}
  ${props =>
    props.variant === 'quinary' &&
    css`
      font-size: 1.25rem;
      line-height: 120%;
      letter-spacing: normal;
    `}
`
