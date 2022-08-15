import React from "react";
import styled from "styled-components";
import { ContactForm, ContactType } from "../components";
import { contacts } from "../data/constants";
import { largeScreen, middleScreen, mobileScreen } from "../utils/Responsiveness";

const Contact = () => {
  return (
    <Wrapper>
      
      <div className="contact-image-holder">
        <img src='assets/images/contact.jpg'/>
        <div className="page_intro">
           <h1>Contactez-Nous</h1>
           <p>On est disponible pour toutes echanges d'information, d'exprience ou demandes de service</p>
        </div>
        <div className="contact_underline"></div>
      </div>
      <h1 className="section-title"> Contactez Nous en fonction de votre besoin</h1>
      <div className="contact_types main-section">
        {contacts.map((contact) => {
          return <ContactType key={contact.id} {...contact} />;
        })}
      </div>
      <div className="main-section">
        <div className="contact_info">
          <h2>Ou Contactez nous directement : </h2>
          <p> contact@butterflycom-events.com</p>
          <p> +213 76 73 84 03 / +213 669 76 18 76</p>
          <p> Samedi - jeudi 09:00 - 19:00</p>
        </div>
      </div>
      <ContactForm/>
    </Wrapper>
  );
};

export default Contact;
const Wrapper = styled.section`
  .contact_types {
    display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   ${largeScreen({gridTemplateColumns: '1fr 1fr 1fr'})};
   ${middleScreen({gridTemplateColumns: '1fr 1fr'})};
   ${mobileScreen({gridTemplateColumns: '1fr'})}
    gap: 40px;
    min-height: 300px;
    padding: 100px 0;
  }

  .contact_info{
    color: var(--color-white);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .contact-image-holder{
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
    img{
      height: 100%;
      width: 100%;
    }
  }

  .contact_underline{
    width: 100%;
    height: 40px;
    background-color: var(--color-light);
    transform: rotate(0.5deg);
    position: absolute;
    left: 0;
    bottom: -10px;
  }
  
  .page_intro{
    position: absolute;
    z-index: 1;
    bottom: 100px;
    padding: 20px;
    width: 50%;
    background-image: linear-gradient(to bottom, #63056bbb, #cc1a58bb);
    ${mobileScreen({width: '100%'})}

    h1{
      font-size: 50px;
      text-transform: uppercase;
    }

    p{
      color: var(--color-white);
      font-weight: 400;
      font-size: 22px;
      min-height: 150px;
    }

  }
  
`;
