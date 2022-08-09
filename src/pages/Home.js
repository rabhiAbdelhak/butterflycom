import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CurrentEvent, Hero, Membres , Modal, Services, Watch} from '../components';

const Home = () => {
  const {ModalIsOpen} = useSelector(store => store.component)
  return (
    <Wrapper>
        <Hero/>
        <CurrentEvent/>
        <Membres/>
        <Services/>
        <Watch/>
        {ModalIsOpen && <Modal/>}
    </Wrapper>
  )
}

export default Home
const Wrapper = styled.section`

`