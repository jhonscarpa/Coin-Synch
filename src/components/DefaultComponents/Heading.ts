import { styled, css } from 'styled-components'

interface IPropsHeading {
  variant?: 'secondary' | 'tertiary' | 'quaternary' | 'quinary'
  isBold?: boolean
}

/**
 * @param variant default = font-size: 3rem(48px) | 'secondary' = font-size: 2.5rem(40px) | 'tertiary' = font-size: 2rem(32px) | 'quaternary' = font-size: 1.5rem(24px) | 'quinary'= font-size: 1.25rem(20px)
 * @param isBold Mudar o peso da fonte de 400 para 700
 * @param as Você pode escolher qual o tipo de header quer usar do h1 ao h5 para cada variante o default é h2
 */

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
