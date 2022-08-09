import React from "react";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../features/component/componentSlice";
import {middleScreen} from '../utils/Responsiveness'

const Watch = () => {
    const dispatch =useDispatch();
  return (
    <Wrapper className="main-section">
      <h1>CE QUE LE Directeur A À DIRE...</h1>
      <div className="watch_content">
        <div className="watch_content-video">
          <img src="/assets/images/presentation.jpg" alt="presentation" />
          <button className="watch_content-video-play" onClick={() => dispatch(openModal())}><FaPlay/></button>
        </div>
        <div className="watch_content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <span>Adel Hakim, <strong>P.D.G</strong></span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Watch;

const Wrapper = styled.section`
  padding: 100px 0;
  > h1 {
    text-transform: uppercase;
    color: var(--color-white);
    text-align: center;
    font-size: 30px;
  }

  .watch_content {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    ${middleScreen({flexDirection: 'column-reverse' , padding: '10px'})}
  }

  .watch_content-video {
    flex: 1;
    height: 300px;
    position: relative;
    img {
      width: 100%;
      max-height: 100%;
    }

    ::before{
        content: '';
        position: absolute;
        border: 2px solid var(--color-light);
        width: 100%;
        height: 100%;
        top: 7px;
        left: 7px;
        z-index: -1;
    }

    .watch_content-video-play{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;
        background-color: black;
        color: var(--color-white);
        font-size: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        border-radius: 50%;
        

        ::before{
            content: '';
            position: absolute;
            border: 2px solid var(--color-light);
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 50%;
        }

    }
  }

  .watch_content-text {
    flex: 1;

    p{
        font-size: 25px;
        font-weight: 700;
        color: white;
        font-style: italic;
    }

    span{
        font-size: 20px;
        font-weight: 600;
        color: var(--color-white);
        text-transform: uppercase;
        float: right;
        margin-top: 15px;

        strong{
            color: var(--color-light);
            opacity: 0.5;
           
           

        }

    }
  }
`;
