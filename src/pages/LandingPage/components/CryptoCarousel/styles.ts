import { Text } from '@/components/DefaultComponents/Text'
import { styled } from 'styled-components'

export const ContainerCrypto = styled.div`
  width: 100%;
  max-width: 22.5rem;
`

export const TextCrypto = styled(Text)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const HighlightTicker = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme['secondary-800']};
  font-weight: 400;
`

interface FloatValueText {
  value: number
}

export const FloatValueText = styled.span<FloatValueText>`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${props =>
    props.value >= 0
      ? props.theme['tertiary-700']
      : props.theme['quaternary-700']};
`
