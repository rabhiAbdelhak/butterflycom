import React from 'react'
import styled from 'styled-components';
import { CurrentEvent, Hero, Membres , NewsLetter, Services, Watch} from '../components';

const Home = () => {
  return (
    <Wrapper>
        <Hero/>
        <CurrentEvent/>
        <Membres/>
        <Services/>
        <Watch/>
        <NewsLetter/>
    </Wrapper>
  )
}

export default Home
const Wrapper = styled.section`

`