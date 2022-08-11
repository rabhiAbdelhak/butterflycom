import React from "react";
import styled from "styled-components";
import HeroImagesContainer from "./HeroImagesContainer";
import YoutubeButton from "./layouts/YoutubeButton";

const Hero = () => {
  return (
    <Wrapper className="main-section">
      <div className="hero_introduction">
        <h4>un small titre pour attirer l'attention des utilisateurs</h4>
        <h1>
          Big titre qui represente l'ensemle des services de l'entreprise, aussi
          les adventages
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet,
        </p>
        <YoutubeButton/>
      </div>
      <HeroImagesContainer />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
padding-top: 60px;
position: relative;
overflow: hidden;
.hero_introduction{
    width: 70%;
    position: relative;
    z-index: 9;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    
    h4{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        color: var(--color-light);

    }

    h1{
        color: var(--color-white);
        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
    }

    p{
        font-size: 17px;
        color: white;
        font-weight: 200;
        line-height: 1.7;
        text-align: justify;
    }
}


`;
