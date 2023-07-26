import { ContentHeader, HeaderContainer } from './styles'
import logoImg from '@/assets/fullLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <ContentHeader>
        <img src={logoImg} alt="Logo Coin Synch" />
      </ContentHeader>
    </HeaderContainer>
  )
}
