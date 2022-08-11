import React, { useState } from "react";
import styled from "styled-components";
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
 
//local imports
import { membres } from "../data/constants";
import { largeScreen, xtraLargeScreen } from "../utils/Responsiveness";
import Membre from "./Membre";

const Membres = () => {
  const [selectedId, setSelectedId] = useState(0);
  

  const checkId = (number) => {
    console.log(number)
    if(number >= membres.length){
      return 0
    }
    if(number < 0){
      return membres.length-1;
    }
    return number;
  }

  return (
    <Wrapper className="main-section">
      <div className="main-section-title">
        <h3>Qui va vous servir</h3>
        <div className="underline"></div>
        <p>Butterfly Team</p>
      </div>
      <div className="membres_content">
        <div className="membres_content-list">
          <ul>
            {membres.map((membre, index) => {
              return (
                <li
                  key={membre.id}
                  onClick={() => setSelectedId(index)}
                  className={`membres_content-list-item ${index === selectedId ? 'active' : ''}`}
                  data-name = {membre.nom.fr}
                >
                  {membre.nom.fr}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="membres_content-btn previous" onClick={() => setSelectedId(checkId(selectedId - 1))}><MdNavigateBefore/></button>
        <button className="membres_content-btn next" onClick={() => setSelectedId(checkId(selectedId + 1))}><MdNavigateNext/></button>
        <div className="membres_content-member">
          <Membre {...membres[selectedId]} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Membres;

const Wrapper = styled.section`
 
  .membres_content {
    display: flex;
    margin-top: 60px;
    position: relative;
  }
  
  .membres_content-member {
    flex: 2;
  }

  .membres_content-list {
    flex: 1;
    min-height: 200px;
    display: flex;
    align-items: center;
    ${largeScreen({display: 'none'})}
    ul{
        width: 100%;
    }
  }

  .membres_content-list-item {
    font-size: 35px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0;
    color: var(--color-white);
    position: relative;
    cursor: pointer;

    
  }

  .membres_content-list-item.active{
    border-bottom: 3px solid var(--color-light);
    color: var(--color-light);
    ::before{
      content: attr(data-name);
      font-size: 120px;
      position: absolute;
      z-index: -1;
      color: var(--color-light);
      opacity: 0.1;
      top: 30px;
      left: -50px;
      width: 300%;
      height: 200%;
      top: 50%;
      transform: translateY(-50%);

    }
  }

  .membres_content-btn{
    ${xtraLargeScreen({display: 'none'})}
    position: absolute;
    top: 150px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: none;
    color: var(--color-light);
    font-size: 30px;
    border-radius: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    opacity: 0.2;
    transition: var(--transition);
    :hover{
      opacity: 1;
    }
  }

  .membres_content-btn.next{
    right: 0px;
  }

`;
