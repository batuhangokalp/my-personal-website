import React, { useState } from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SubTitle,
  ItemList,
  Item,
  Date,
  BoldText,
  Edulist,
} from "./../section-card/section-card.styles";

import CustomEmoji from "./../custom-emoji/custom-emoji.component";
import CustomLink from "../custom-link/custom-link.component";
import useStyles from "./journey-card.styles";

const SeeMoreLink = styled.div`
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #b85c5c;
    outline-width: 0;
  }
`;
const ItemContainer = styled.div`
  position: relative;
  padding-left: 30px;
`;

const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #413f3f;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 15px;
  z-index: 1;
  @media (max-width: 768px) {
    top: 12px;
  }
`;

const Line = styled.div`
  width: 2px;
  background-color: #413f3f;
  position: absolute;
  left: 7px;
  top: 27px;
  height: 25px;
  z-index: 0;
  @media (max-width: 768px) {
    top: 22px;
  }
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: -3px;
  align-self: center;
  border: 0.4px solid #181a1b;
  padding: 0px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const JourneyCard = () => {
  const classes = useStyles();
  const [loadedMore, setLoadedMore] = useState(false);

  return (
    <>
      <SectionTitle>Experiences</SectionTitle>
      <ItemList style={{ marginTop: "30px" }}>
        <Item>
          <span className={classes.presentText}>
            <CustomLink targetUrl="http://www.orcabs.com/">
              Orca Business Solutions
            </CustomLink>
          </span>
        </Item>

        <ItemContainer>
          <Dot />
          <Item>
            Software Developer <Date>(Feb 2023 – Nov 2024 )</Date>
          </Item>
        </ItemContainer>

        <Item>
          <CustomLink targetUrl="https://www.beymengroup.com/tr/">
            Beymen Group
          </CustomLink>
        </Item>

        <ItemContainer>
          <Item>
            <Dot />
            System Support Assistant Specialist <Date>(July 2022 – Feb 2023)</Date>
          </Item>
        </ItemContainer>

        <Item>
          <CustomLink targetUrl="https://rdc.com.tr/">RDC Partner</CustomLink>
        </Item>

        <ItemContainer>
          <Item>
            <Dot />
            Software Developer Intern <Date>(March 2022 – July 2022)</Date>
          </Item>
        </ItemContainer>

        {!loadedMore && (
          <SeeMoreLink onClick={() => setLoadedMore(true)}>
            Education &#8629;
          </SeeMoreLink>
        )}
        {loadedMore && (
          <>
            <SubTitle>Education</SubTitle>
            <Edulist>
              <Item>
                <CustomEmoji label="graduation" emoji="🎓" /> Graduated from{" "}
                <BoldText>Trakya University</BoldText> / Computer Engineering.
              </Item>
            </Edulist>
          </>
        )}
      </ItemList>
    </>
  );
};

export default JourneyCard;
