import React from 'react'

import {
	Title,
	Snippet,
	Description,
	SocialIcons,
	MainContainer,
} from './snippet-card.styles'

import CustomIcon from './../custom-icon/custom-icon.component'
import CustomLink from './../custom-link/custom-link.component'
import LinkedinLogo from '../../images/social/linkedin_light.png'
import GithubLogo from '../../images/social/github_light.png'
import TwitterLogo from '../../images/social/twitter_light.png'
import ReactRotatingText from 'react-rotating-text'

const SnippetCard = () => {
	return (
		<MainContainer>
			<div>
				<Title>Hi, I'm Batuhan.</Title>
				<Snippet>Frontend Developer at <CustomLink targetUrl='http://www.orcabs.com/'>OrcaBusinessSolution</CustomLink> <br /> </Snippet>
				<Description>
				I am a Software Developer who is curious in the field of Web and Database, constantly improves himself on React and C# and follows current technologies.<br />
				I love <b><ReactRotatingText items={['React', 'coffee.', 'HTML.', 'basketball.', 'CSS.']} /></b>
				</Description>
				<SocialIcons>
					<CustomIcon
						className={"linkedin"}
						targetUrl='https://www.linkedin.com/in/batuhangokalp/'
						imageSource={LinkedinLogo}
						altDescription='linkedin'/>
					<CustomIcon
						className={"github"}
						targetUrl='https://github.com/batuhangokalp'
						imageSource={GithubLogo}
						altDescription='github' />
					<CustomIcon
						className={"twitter"}
						targetUrl='https://twitter.com/bbatuhangokalp'
						imageSource={TwitterLogo}
						altDescription='twitter' />
				</SocialIcons>
			</div>
		</MainContainer>
	)
}

export default SnippetCard