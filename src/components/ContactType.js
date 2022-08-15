import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openContact } from "../features/contact/contactSlice";

const ContactType = ({ id,type, formTitle, title, description, image }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper bg={image}>
      <div className="contact_information">
        <h1>{title.fr}</h1>
        <div className="contact_information-details">
          <p>{description.fr}</p>
          <button onClick={() => dispatch(openContact({type , title: formTitle.fr}))}>Procéder</button>
        </div>
      </div>
      <div className="bottom_butter"></div>
    </Wrapper>
  );
};

export default ContactType;

const Wrapper = styled.article`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  cursor: pointer;
  box-shadow: 3px 3px 7px rgb(255 255 255 / 0.1);
  min-height: 300px;
  padding: 20px 10px;
  flex: 1;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgb(0 0 0 /0.1), rgb(0 0 0/0.6));
    top: 0;
    left: 0;
    z-index: 0;
  }

  :hover::before{
    
  }

  ::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 270px;
    top: -200px;
    left: -200px;
    background-color: var(--color-purple);
    opacity: 0.8;
    border-top-right-radius: 50px;
    transform: skewX(-45deg);
    z-index: 2;
    transition: var(--transition);
  }

  :hover::after {
    top: 0;
  }
  .bottom_butter {
    position: absolute;
    width: 300px;
    height: 270px;
    bottom: -270px;
    left: -200px;
    background-image: linear-gradient(to bottom, var(--color-light) 0%,var(--color-light) 50%, var(--color-purple), var(--color-blue) 100%);
    border-bottom-right-radius: 50px;
    transform: skewX(45deg);
    z-index: 1;
    transition: var(--transition);
  }

  :hover .bottom_butter {
    bottom: 0;
  }

  .contact_information {
    position: relative;
    z-index: 3;
    h1 {
      text-transform: uppercase;
      color: var(--color-white);
    }

    p {
      color: var(--color-white);
      line-height: 1.5;
      font-size: 13px;
      margin: 10px 0;
    }

    button{
      color: var(--color-blue);
      background-color: white;
      padding: 10px 15px;
      text-transform: uppercase;

      :hover{
        background-color: var(--color-purple);
        color: var(--color-white);
      }
    }
  }

  .contact_information-details{
    transform: translateX(-200%);
    transition: var(--transition);
  }

  :hover .contact_information-details{
    transform: translateX(0%);
  }

  :hover{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;
