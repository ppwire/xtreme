import styled from 'styled-components';
import { Container } from './Container.styled'

const Logo = styled.h1`
   font-size:2rem;
`

const NavStyled = styled.nav`
   position: absolute;
   margin-top: 2rem;
`

function Nav() {


   return (
      <NavStyled>
         <Container>
            <Logo >Xtreme</Logo>
         </Container>
      </NavStyled>
   )
}

export default Nav