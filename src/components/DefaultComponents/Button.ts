import { styled } from 'styled-components'

interface IPropsButton {
  width?: string
  isBold?: boolean
  size?: 'sm' | 'md'
}

/**
 * @param width Definir o tamanho do botão em rem caso coloque px ira dar erro
 * @param isBold Mudar o peso da fonte de 400 para 700
 * @param size sm | md muda o tamanho da fonte sm = 0.875rem(14px) md: default = 1rem(16px)
 */

export const Button = styled.button<IPropsButton>`
  all: unset;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.white};
  font-weight: ${props => (props.isBold ? 700 : 400)};
  font-size: ${props => (props.size === 'sm' ? '0.875rem' : '1rem')};
  width: ${props => (props.width ? props.width : 'auto')};
  padding: 0.5rem 1.5rem;
  border-radius: 32px;
  background: ${props => props.theme['primary-500']};
`
