import React from 'react';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
import { Footer, Navbar, SideBar, Modal } from '../components';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const {ModalIsOpen} = useSelector(store => store.component)
  return (
    <Wrapper>
       <Navbar/>
       <SideBar/>
       <Outlet/>
       {ModalIsOpen && <Modal/>}
       <Footer/>
    </Wrapper>
  )
}

export default SharedLayout

const Wrapper = styled.section`

`