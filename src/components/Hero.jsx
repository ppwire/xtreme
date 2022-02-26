import styled from 'styled-components';
import { Container } from './Container.styled'

const HeroStyled = styled.section`
      background-image: url('/img/hero.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
   `
const HeroWrapper = styled.div`
      margin-bottom: 1rem;
   `

const HeroText = styled.h1`
      font-size:3rem;
      font-weight: 500;
      flex-shrink: 1;
   `

const HeroBtn = styled.button`
      font-size: 2rem;
      font-weight: 300;
      border-bottom:1px solid black;
   `

function Hero() {
   return (
      <HeroStyled>
         <Container>
            <HeroWrapper>
               <HeroText>Learn extreme sport </HeroText>
               <HeroText>online course anywhere</HeroText>
            </HeroWrapper>
            <HeroBtn>Enroll now</HeroBtn>
         </Container>
      </HeroStyled>
   )
}

export default Hero