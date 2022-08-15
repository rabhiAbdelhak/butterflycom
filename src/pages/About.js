import React from "react";
import { FaArrowDown, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { NewsLetter, VideoPresentation } from "../components";
import { middleScreen, mobileScreen } from "../utils/Responsiveness";
import { existants } from "../data/constants";

const About = () => {
  return (
    <Wrapper>
      <section className="about_image">
        <img src="/assets/images/events.jpg " alt="about" />
      </section>
      <div className="about_line"></div>
      <div className="about_menu">
        <ul>
          <li>
            <a href="#vision">
              Strategie Butterfly <FaArrowDown className="icon" />
            </a>
          </li>
          <li>
            <a href="#find">
              Que trouvrais tu ? <FaArrowDown className="icon" />
            </a>
          </li>
          <li>
            <a href="#why">
              Pourquoi Nous ? <FaArrowDown className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="about_strategy main-section simple_paragraph" id="vision">
        <div className="about_strategy_intro">
          <div className="about_strategy_line"></div>
          <h1>On s'interesse à La societe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ead minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolor eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in
          </p>
        </div>
        <VideoPresentation />
      </div>
      <NewsLetter />
      <Presentation float={true} bg="marketing.jpg">
        <div className="presentation-intro simple_paragraph">
          <div className="presentation_line"></div>
          <h1>Ce que nous fait Spécial</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ead minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolor eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolor ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolor ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolor
          </p>
        </div>
      </Presentation>
      <div className="about_find main-section" id="find">
        <div className="about_find-title">
          <div className="about_find-title-line"></div>
          <h1>Vous Trouverez</h1>
          <div className="about_find-content">
            {existants.map((existant) => {
              return (
                <article key={existant.id}>
                  <h4>
                    {existant.count} <FaPlus className="icon" />
                  </h4>
                  <p>{existant.content.fr}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <Presentation float={false} bg="events.jpg" id="why">
        <div className="presentation-intro simple_paragraph">
          <div className="presentation_line"></div>
          <h1>Pour Quoi Butterfly ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ead minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolor eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolor ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
      </Presentation>
      <div className="about_bottom flex_center">
        <article className="about_bottom-content">
          <h1>Butterfly Team A votre Service</h1>
          <button>Contactez Nous</button>
        </article>
      </div>
    </Wrapper>
  );
};

export default About;
const Wrapper = styled.section`
  .about_image {
    height: 50vh;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .about_line {
    height: 30px;
    width: 100%;
    background-color: var(--color-light);
    transform: rotate(0.8deg);
    margin-top: -10px;
  }

  .about_menu {
    background-color: var(--color-blue);
    margin-top: -5px;

    ul {
      display: flex;
      gap: 10px;
      padding: 30px 40px;
      ${middleScreen({
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      })}

      li a {
        display: flex;
        align-items: center;
        padding: 5px 15px;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        cursor: pointer;

        :hover .icon {
          transform: translateY(10px);
        }

        .icon {
          font-size: 13px;
          margin-left: 5px;
          transition: var(--transition);
        }
      }
    }
  }

  .about_strategy {
    display: flex;
    ${middleScreen({ flexDirection: "column" })}
    gap: 50px;
  }

  .about_strategy_line {
    width: 40%;
    height: 3px;
    background-image: linear-gradient(
      to right,
      var(--color-light),
      var(--color-blue)
    );
    margin-bottom: 10px;
  }

  .about_strategy_intro {
    flex: 1;
  }

  .about_find {
    padding: 120px 0;
  }

  .about_find-title {
    text-align: center;
    .about_find-title-line {
      width: 150px;
      height: 3px;
      background-image: linear-gradient(
        to right,
        var(--color-light),
        var(--color-blue)
      );
      margin: 15px auto;
    }

    h1 {
      color: white;
      text-transform: uppercase;
      font-size: 35px;
    }
  }

  .about_find-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;

    article {
      text-align: center;
      flex: 1;
      min-width: 250px;

      h4 {
        font-size: 45px;
        color: var(--color-white);
        .icon {
          font-size: 20px;
          color: var(--color-light);
          opacity: 0.4;
        }
      }

      p {
        font-size: 30px;
        text-transform: uppercase;
        color: var(--color-white);
      }
    }
  }

  .about_bottom {
    min-height: 500px;
    background-image: url("assets/images/about_bottom.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-clip: content-box;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: radial-gradient(rgb(0 0 0 / 0.4), rgb(0 0 0));
      z-index: 1;
    }

    .about_bottom-content{
      position: relative;
      z-index:2;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      h1{
        color: var(--color-white);
        text-transform: uppercase;
        font-size: 30px;
      }
      button{
        padding: 10px 25px;
        color: var(--color-blue);
        background-color: var(--color-white);
        border: none;
        font-size: 20px;
        font-family: 'agency';
        letter-spacing: 1px;
        transition: var(--transition);

        :hover{
          background-color: var(--color-blue);
          color: var(--color-white);
        }
      }

    }
  }
`;

const Presentation = styled.section`
  flex: 1;
  display: flex;
  padding: 0 50px;
  justify-content: ${(props) => (props.float ? "flex-end" : "flex-start")};
  ${middleScreen({padding: '0 30px', justifyContent: 'center'})};
  ${mobileScreen({padding: '0 10px'})};
 
  min-height: 400px;
  background-image: url(${(props) => "assets/images/" + props.bg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;

  .presentation-intro {
    width: 50%;
    background-image: radial-gradient(var(--color-blue), var(--color-purple));
    padding: 30px;
    position: relative;
    bottom: auto;
    overflow: hidden;
    ${middleScreen({width: '90%'})};
    ${mobileScreen({width: '100%'})};

    ::before {
      content: "";
      position: absolute;
      height: 30px;
      width: 100%;
      left: 0;
      bottom: -10px;
      transform: rotate(0.8deg);
      background-color: var(--color-blue-light);
    }

    
  }

  .presentation_line {
    width: 40%;
    height: 3px;
    background: var(--color-white);
    margin-bottom: 10px;
  }
`;
