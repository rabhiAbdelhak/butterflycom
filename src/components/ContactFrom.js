import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { services } from "../data/constants";
import { closeContact } from "../features/contact/contactSlice";
import { largeScreen, middleScreen, mobileScreen } from "../utils/Responsiveness";

const ContactForm = () => {
  const {contactType, title, contactFormIsOpen} = useSelector(store => store.contact);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper className="flex_center" show={contactFormIsOpen}>
      <form onSubmit={handleSubmit}>
        <h4>{title}</h4>
        <div className="form-groups">
          <div className="form-group">
            <label>Nom</label>
            <input type="text" name="name"  />
          </div>
          <div className="form-group">
            <label>Prénom</label>
            <input type="text" name="name" />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        {contactType !== 'join' && <div className="form-groups">
          <div className="form-group">
            <label>Fonction</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Organization</label>
            <input type="email" name="email" />
          </div>
        </div>}
        {contactType === 'service' && <><div className="form-group">
          <label>Choisir un Service</label>
          <select value={2}>
            {services.map((service) => {
                const {id, title} = service;
                return <option value={id}>{title.fr}</option>
            })}
          </select>
        </div>
        <div className="form-group">
            <label>définir Votre besoin</label>
            <textarea />
        </div></>}
        {contactType === 'join' && <><div className="form-group">
            <label>Lettre de motivation</label>
            <textarea />
        </div>
        <div className="form-group">
            <label>Joindre Votre CV</label>
            <input type='file' />
        </div></>}
        {contactType === 'testimonial' && <div className="form-group">
            <label>Ecrire Votre témoiniage</label>
            <textarea />
        </div>}
        {contactType === 'inform' && <div className="form-group">
            <label>Ecrire Votre Message</label>
            <textarea />
        </div>}
        <button className="submit-btn">Submit</button>
        <button type="button" className="close-form" onClick={() => dispatch(closeContact())}><FaWindowClose/></button>
      </form>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.8);
  top: 0;
  left: 0;
  z-index: 11;
  transition: var(--transition);
  transform: scale(${props => props.show ? '1' : '0' });
  
  form {
    background-color: white;
    width: 50vw;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    max-width: 600px;
    ${largeScreen({width: '80vh'})};
    ${middleScreen({width: '80vw'})};
    ${mobileScreen({width: '98vw'})};

    .close-form{
        position: absolute;
        background-color: transparent;
        color: tomato;
        top: 15px;
        right: 15px;
        font-size: 20px;
    }
    
    h4{
        color: var(--color-light);
        font-family: 'Poppins';
        text-transform: uppercase;
        margin: 15px 0;
        text-align: center;
        font-size: 18px;
        opacity: 0.7;
    }
    .form-groups {
      display: flex;
      gap: 20px;
      ${mobileScreen({flexDirection: 'column', gap: '10px'})}
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      flex: 1;
      label {
        font-size: 13px;
        color: grey;
        text-transform: capitalize;
      }

      input {
        padding: 8px 5px;
        border: 1px solid lightgrey;
        color: var(--color-blue);

        :focus {
          outline: none;
          border: 1px solid var(--color-light);
          border-left-width: 5px;
        }
      }

      select{
        padding: 8px 5px;
        color: grey;
      }

      textarea{
        height: 150px;
      }
    }
  }
`;
