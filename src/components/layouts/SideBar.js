import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../../data/constants";
import {xtraLargeScreen} from "../../utils/Responsiveness"
import SocialMedia from "./SocialMedia";
import YoutubeButton from "./YoutubeButton";

const SideBar = () => {
  const {SideBarIsOpen} = useSelector(store => store.component);
  return (
    <Wrapper show={SideBarIsOpen}>
      <div className="overlay"></div>
      <ul className="sidebar_menu">
        {links.map((item) => {
          return (
            <li key={item.id} className="sidebar_menu-item">
              <Link to={item.link}>{item.title.fr}</Link>
            </li>
          );
        })}
      </ul>
      <SocialMedia/>
      <YoutubeButton/>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  position: fixed;
  top: 115px;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  transform:  ${props => !props.show ? 'translateX(150%)' : 'translateX(-50%)'};
  width: 95vw;
  height: calc(100vh - 115px);
  overflow-y: auto;
  background-color: rgb(0 0 0 / 0.9);
  z-index: 10;
  transition: var(--transition);
  ${xtraLargeScreen({display: 'none'})};

  .sidebar_menu {
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
    width: 100%;
    margin-bottom: 30px;
  }

  .sidebar_menu-item {

    a{
        display: block;
        padding: 15px 20px;
        color: white;
        border-top: 1px solid #404040;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 700;
    }
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: -1;
  }

`;
