import React from 'react';

import {
	SectionTitle,
	BashBlinkingCursor,
	PSBlinkingCursor,
	StackList,
	Techs,
	Tech,
	Bash,
	Bash2,
	Bash3,
	PsComponent,
} from './../section-card/section-card.styles';

import CustomLink from "../custom-link/custom-link.component";

const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Techs>
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #0db7ed' }}>React Native</Tech>,<Tech style={{ borderBottom: '3px solid #ff9900' }}>React</Tech>and<Tech style={{ borderBottom: '3px solid rgb(0, 0, 128' }}>Next.js</Tech>.
				</Techs>
				<Techs>
					I've knowledge on <Tech style={{ borderBottom: '3px solid #cf4f4f' }}>PostgreSQL</Tech>, <Tech style={{ borderBottom: '3px solid rgb(0, 128, 128' }}>Postman</Tech>, <Tech style={{ borderBottom: '3px solid rgb(128, 0, 0)' }}>Express.js</Tech>, <Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech>.
				</Techs>
				<Techs>
					He's my best friend now<Tech style={{ borderBottom: '3px solid #16a182' }}>ChatGPT</Tech>.
				</Techs>
			</StackList>
		</>
	);
}

export default SkillsCard;
