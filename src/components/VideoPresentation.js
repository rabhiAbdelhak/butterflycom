import React from "react";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openModal } from "../features/component/componentSlice";

const VideoPresentation = () => {
    const dispatch =useDispatch();
  return (
    <Wrapper className="watch_content">
      <div className="watch_content-video">
        <img src="/assets/images/presentation.jpg" alt="presentation" />
        <button
          className="watch_content-video-play"
          onClick={() => dispatch(openModal())}
        >
          <FaPlay />
        </button>
      </div>
    </Wrapper>
  );
};

export default VideoPresentation;

const Wrapper = styled.div`
    flex: 1;
    height: 300px;
    position: relative;
    img {
      width: 100%;
      height: 300px;
    }

    ::before {
      content: "";
      position: absolute;
      border: 2px solid var(--color-light);
      width: 100%;
      height: 100%;
      top: 7px;
      left: 7px;
      z-index: -1;
    }

    .watch_content-video-play {
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

      ::before {
        content: "";
        position: absolute;
        border: 2px solid var(--color-light);
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 50%;
      }
  }
`;
