import React from "react";
import styled from "styled-components";

//local imports
import { services } from "../data/constants";
import { middleScreen } from "../utils/Responsiveness";
import Service from "./Service";

const Services = () => {
  return (
    <Wrapper className="main-section">
      <div className="main-section-title">
        <h3>Nos Services</h3>
        <div className="underline"></div>
        <p>Butterfly Production</p>
      </div>
      <div className="service_content">
        {services.map(service => {
            return <Service key={service.id} {...service}/>
        })}
      </div>
    </Wrapper>
  );
};

export default Services;
const Wrapper = styled.section`

.service_content{
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${middleScreen({gridTemplateColumns: '1fr', padding: '10px'})}
  gap: 40px;
  
}
`;
