import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.white};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  box-shadow: 0px 4px 8px 0px #4d4d4d1a;
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 76rem;
`
