import { styled, css } from 'styled-components'

interface IPropsText {
  variant?: 'label' | 'small' | 'paragraph'
  isBold?: boolean
}

export const Text = styled.h2<IPropsText>`
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
