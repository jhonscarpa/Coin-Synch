import { useEffect, useState } from 'react'
import {
  ContentButtons,
  ContentDataAndAccount,
  ContentHeader,
  ContentNavigation,
  HeaderContainer,
  SingInButton,
} from './styles'
import logoImg from '@/assets/fullLogo.svg'
import { Button } from '@/components/DefaultComponents/Button'
import { CryptoCarousel } from '../CryptoCarousel'

export function Header() {
  const [showShadowScroll, setShowShadowScroll] = useState<boolean>(false)

  useEffect(() => {
    function scrollPosition() {
      window.scrollY > 10
        ? setShowShadowScroll(true)
        : setShowShadowScroll(false)
    }
    window.addEventListener('scroll', scrollPosition)
  }, [])

  return (
    <HeaderContainer showShadow={showShadowScroll}>
      <ContentHeader>
        <ContentNavigation>
          <img src={logoImg} alt="Logo Coin Synch" />
          <nav>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Top Cryptos</a>
              </li>
            </ul>
          </nav>
        </ContentNavigation>
        <ContentDataAndAccount>
          <CryptoCarousel />
          <ContentButtons>
            <SingInButton>Sing in</SingInButton>
            <Button size="sm">Sing up</Button>
          </ContentButtons>
        </ContentDataAndAccount>
      </ContentHeader>
    </HeaderContainer>
  )
}
