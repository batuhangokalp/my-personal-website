import React from "react";

import {
  SectionTitle,
  StackList,
  Techs,
  Tech,
} from "./../section-card/section-card.styles";

const SkillsCard = () => {
  return (
    <>
      <SectionTitle>Technology Stack</SectionTitle>
      <StackList>
        <Techs>
          I'm currently focused on
          <Tech style={{ borderBottom: "3px solid #0db7ed" }}>React</Tech>,
          <Tech style={{ borderBottom: "3px solid #ff9900" }}>
            React Native
          </Tech>
          ,<Tech style={{ borderBottom: "3px solid #16a182" }}>Express.js</Tech>
          and
          <Tech style={{ borderBottom: "3px solid rgb(0, 0, 128" }}>
            MongoDB
          </Tech>
          .
        </Techs>
        <Techs>
          I've knowledge on{" "}
          <Tech style={{ borderBottom: "3px solid #cf4f4f" }}>PostgreSQL</Tech>,{" "}
          <Tech style={{ borderBottom: "3px solid rgb(0, 128, 128" }}>
            Postman
          </Tech>
          ,{" "}
          <Tech style={{ borderBottom: "3px solid rgb(128, 0, 0)" }}>
            Next.js
          </Tech>
          , <Tech style={{ borderBottom: "3px solid #0db7ed" }}>Docker</Tech>.
        </Techs>
        <Techs>
          Additionally, I enjoy building interfaces using{" "}
          <Tech style={{ borderBottom: "3px solid #06b6d4" }}>
            Tailwind CSS
          </Tech>
          ,{" "}
          <Tech style={{ borderBottom: "3px solid #722ed1" }}>Ant Design</Tech>{" "}
          and{" "}
          <Tech style={{ borderBottom: "3px solid #f50057" }}>Material UI</Tech>
          .
        </Techs>
      </StackList>
    </>
  );
};

export default SkillsCard;
