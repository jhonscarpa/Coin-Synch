import { styled } from 'styled-components'

interface IPropsHeader {
  showShadow: boolean
}

export const HeaderContainer = styled.div<IPropsHeader>`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.white};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;

  box-shadow: ${props =>
    props.showShadow ? ' 0px 4px 8px 0px #4d4d4d1a' : 'none'};
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 76rem;
`

export const ContentNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      font-size: 0.875rem;
      color: ${props => props.theme['text-base']};
      font-weight: 400;
      cursor: pointer;
    }
  }
`

export const ContentDataAndAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const SingInButton = styled.button`
  all: unset;
  font-size: 0.875rem;
  line-height: 114.28%;
  font-weight: 400;
`
