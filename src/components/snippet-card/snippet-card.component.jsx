import React from "react";
import {
  Title,
  Snippet,
  Description,
  SocialIconsContainer,
  SocialIcons,
  MainContainer,
  ImageContainer,
} from "./snippet-card.styles";
import ReactRotatingText from "react-rotating-text";
import CustomIcon from "./../custom-icon/custom-icon.component";
import CustomLink from "./../custom-link/custom-link.component";
import LinkedinLogo from "../../images/social/linkedin_light.png";
import GithubLogo from "../../images/social/github_light.png";
import PP from "./../../images/pp.png";

const SnippetCard = () => {
  return (
    <MainContainer>
      <div>
        <Title>
          Hi, I'm Batuhan.<CustomLink></CustomLink>
        </Title>
        <Snippet>Full-Stack Developer</Snippet>
        <Description>
          I am a software developer with a strong interest in mobile and web
          technologies, particularly in modern frameworks like React, Next.js,
          and React Native. I am always open to improving myself and focusing on
          developing user-friendly and high-performance applications.
          <br />I{" "}
          <b>
            <ReactRotatingText
              items={[
                "love React.",
                "love swimming.",
                "enjoy working on solving errors.",
                "love basketball.",
                "enjoy working on troubleshooting issues.",
              ]}
            />
          </b>
        </Description>
        <SocialIconsContainer>
          <SocialIcons>
            <CustomIcon
              className={"linkedin"}
              targetUrl="https://www.linkedin.com/in/batuhangokalp/"
              imageSource={LinkedinLogo}
              altDescription="linkedin"
            />
          </SocialIcons>
          <SocialIcons>
            <CustomIcon
              className={"github"}
              targetUrl="https://github.com/batuhangokalp"
              imageSource={GithubLogo}
              altDescription="github"
            />
          </SocialIcons>
        </SocialIconsContainer>
      </div>
      <ImageContainer>
        <img src={PP} alt="profile" />
      </ImageContainer>
    </MainContainer>
  );
};

export default SnippetCard;
