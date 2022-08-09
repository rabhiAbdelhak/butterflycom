import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//local imports
import { links } from "../data/constants";
import { largeScreen } from "../utils/Responsiveness";
import YoutubeButton from "./layouts/YoutubeButton";

const Menu = () => {
  return (
    <Wrapper>
      {links.map((item, index) => {
        return (
          <Item>
            <Link key={index} to={item.link}>
              {item.title.fr}
            </Link>
          </Item>
        );
      })}
      <YoutubeButton/>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.ul`
  display: flex;
  ${largeScreen({display: 'none'})}
  
  li:last-of-type{
    margin-right: 10px;
  }
`;

const Item = styled.li`
  a {
    display: block;
    padding: 15px 15px 25px;
    color: var(--color-blue);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    transition: 0.5s;
    border-bottom: 4px solid transparent;

    :hover {
     border-bottom: 4px solid var(--color-light);
    }
  }
`;
