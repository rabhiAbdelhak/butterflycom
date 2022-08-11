import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { largeScreen, xtraLargeScreen } from '../../utils/Responsiveness';
import { FaBars, FaWindowClose } from 'react-icons/fa';

//local imports 
import Logo from '../Logo';
import Menu from '../Menu';
import SocialMedia from './SocialMedia';
import { openSideBar, closeSideBar } from '../../features/component/componentSlice';

const Navbar = () => {
  const {SideBarIsOpen} = useSelector(store => store.component);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Logo/>
      <Menu/>
      <div className='navbar_social-links'>
       <SocialMedia/>
      </div>
      {
        !SideBarIsOpen ? (
        <button className='navbar_toggle-btn' onClick={() => dispatch(openSideBar())}><FaBars/></button>
        ) : 
        (
          <button className='navbar_toggle-btn' onClick={() => dispatch(closeSideBar())}><FaWindowClose/></button>
        )
      }
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.header`
position: sticky;
top: 0;
left:0;
width: 100%;
z-index: 10;
background-color: rgb(255 255 255);
min-height: 115px;
padding: 15px 25px 0;
display: flex;
align-items: flex-end;
justify-content: space-between;
${largeScreen({alignItems: 'center'})};

.navbar_social-links{
position: absolute;
top: 15px;
right: 15px;
${largeScreen({display: 'none'})};
}

.navbar_toggle-btn{
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: var(--color-blue);
    cursor: pointer;
    ${xtraLargeScreen({display: 'none'})};
}
`