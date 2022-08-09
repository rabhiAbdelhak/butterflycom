import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src='/assets/images/identity/Logo-Couler.png' alt='logo'/>
      </div>
      <div className="footer_content">
        <div className="footer_box">
          <a href="/">Contact Us</a>
          <a href="http://www.traitdunionmagazine.com/">
            Trait Union (Notre Magazine)
          </a>
          <a href="/">Nos Evènement</a>
        </div>
        <div className="footer_box">
          <SocialMedia />
          <p>@2022 BUTTERFLYCOM</p>
        </div>
        <div className="footer_box">
          <p>Email.Butterfly@gmail.com</p>
          <p>+213-542-78-18-35</p>
          <p>Dimanche - Jeudi 08:00 - 18:00</p>
        </div>
      </div>
      
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  min-height: 220px;
  background-color: var(--color-white);
  padding: 30px 100px;
  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    img{
      width: 110px;
      height: 100px;
    }
  }
  .footer_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .footer_box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p,
  a {
    color: var(--color-purple);
    font-weight: 600;
    cursor: pointer;
  }

  a:hover {
    color: var(--color-light);
  }
`;
