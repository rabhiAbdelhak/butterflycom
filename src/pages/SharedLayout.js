import React from 'react';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
import { Footer, Navbar, SideBar } from '../components';

const SharedLayout = () => {
  return (
    <Wrapper>
       <Navbar/>
       <SideBar/>
       <Outlet/>
       <Footer/>
    </Wrapper>
  )
}

export default SharedLayout

const Wrapper = styled.section`

`