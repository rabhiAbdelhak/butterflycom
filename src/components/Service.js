import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Service = ({ title, description, image, link }) => {
  return (
    <Wrapper image={image}>
      
      <h1>{title.fr}</h1>
      <div className="service_info">
        <p>{description.fr}</p>
        <button>
          Apprendre plus <FaArrowRight />
        </button>
        <div className="side-effect"></div>
      </div>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.article`
  position: relative;
  min-height: 260px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 25px 10px;
  background-image: url(${props => props.image});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;

  ::before{
    content: '';
    background: #63056bcc;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -90%;
    z-index: 2;
    transform: skewX(50deg);
    transition: var(--transition);
  }

  :hover::before{
    left: -50%;
  }

  ::after{
    content: '';
    background: var(--color-light);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -200%;
    z-index: 1;
    transform: skewX(-50deg);
    transition: var(--transition);
  }

  :hover::after{
    left: -90%;
  }
  
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 22px;
    position: relative;
    z-index:3;
  }

  .service_info{
   z-index: 3;
   width: 70%;
   height: 0;
   overflow: hidden;
   transition: var(--transition);
  }

  :hover .service_info{
    height: 100px;
  }
  p {
    color: white;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    margin: 8px 0;
  }

  button {
    background-color: var(--color-white);
    display: flex;
    gap: 10px;
    align-items: center;
    border: none;
    padding: 10px 5px;
    color: var(--color-light);
  }
`;
