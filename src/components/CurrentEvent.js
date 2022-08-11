import React from "react";
import styled from "styled-components";

//local imports
import { FaArrowRight } from "react-icons/fa";
import { largeScreen, middleScreen, mobileScreen } from "../utils/Responsiveness";

const CurrentEvent = () => {
  return (
    <Wrapper>
      <div className="hero_current-event">
        <h3>L'evénement en cours (Préparation)</h3>
        <button>
          <FaArrowRight className="icon"/>
          FALA
        </button>
      </div>
    </Wrapper>
  );
};

export default CurrentEvent;

const Wrapper = styled.section`
  padding: 50px 0;
  .hero_current-event {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    background-color: var(--color-white);
    padding: 25px 15px;
    z-index: 9;
    width: 60%;
    overflow: hidden;
    ${middleScreen({width: '90%'})}

    h3 {
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
      ${largeScreen({fontSize: '15px'})};
      ${mobileScreen({fontSize: '13px'})};
    }

    button {
      background-color: transparent;
      color: var(--color-blue);
      border: none;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 28px;
      gap: 10px;

      .icon{
        font-size: 14px;
      }
    }

    ::before {
      content: "";
      width: 50%;
      height: 200%;
      background-image: linear-gradient(
        to left,
        var(--color-light) 0%,
        var(--color-light) 50%,
        var(--color-blue) 100%
      );
      position: absolute;
      right: -100px;
      top: 50%;
      transform: translateY(-50%) skewX(-20deg);
    }
  }
`;
