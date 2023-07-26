import { styled, css } from 'styled-components'

interface IPropsText {
  variant?: 'label' | 'small' | 'paragraph'
  isBold?: boolean
}

/**
 * @param variant default = font-size: 1rem(16px) | 'label' = font-size: 0.875rem(14px) | 'small' = font-size: 0.75rem(12px) | 'paragraph' = font-size: 0.875rem(14px) line-height: 171%
 * @param isBold Mudar o peso da fonte de 400 para 700
 * @param as Você pode escolher qual o tipo de texto quer usar como por exemplo <p> ou <label> default = p
 */

export const Text = styled.p<IPropsText>`
  font-size: 1rem;
  line-height: 150%;
  font-weight: ${props => (props.isBold ? '700' : '400')};

  ${props =>
    props.variant === 'label' &&
    css`
      font-size: 0.875rem;
      line-height: 114.28%;
    `}

  ${props =>
    props.variant === 'small' &&
    css`
      font-size: 0.75rem;
      line-height: 116.66%;
    `}

  ${props =>
    props.variant === 'paragraph' &&
    css`
      font-size: 0.875rem;
      line-height: 171.42%;
    `}
`
