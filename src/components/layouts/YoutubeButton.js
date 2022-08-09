import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const YoutubeButton = () => {
  return (
    <Link className="navbar_youtube-Link" href="/">
      Visitez La chaine youtube <FaArrowRight className="icon" />
    </Link>
  );
};

export default YoutubeButton;

const Link = styled.a`
  display: block;
  padding: 10px 15px;
  text-transform: capitalize;
  background-color: var(--color-blue);
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  font-size: 13px;
  /* box-shadow: 8px 8px 7px var(--color-purple), -8px -8px 7px var(--color-blue),
    8px 0px 7px var(--color-blue), 0px 8px 7px var(--color-blue); */
  transition: var(--transition);
  :hover {
    background-color: #ff0000;
    color: var(--color-white);
  }

  .icon {
    font-size: 13px;
    transition: var(--transition);
  }
  :hover .icon {
    transform: translateX(10px);
  }
`;
