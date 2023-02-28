import React from 'react'
import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date,
	BoldText
} from './../section-card/section-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from '../custom-link/custom-link.component'
import useStyles from './journey-card.styles'

const JourneyCard = () => {
	const classes = useStyles()

	return (
		<>
			<SectionTitle><CustomEmoji label='computer' emoji='💻' /> Experiences</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
				<CustomEmoji label='graduation' emoji='🏛️' /> <span className={classes.presentText}> Frontend Developer at <CustomLink targetUrl='http://www.orcabs.com/'>OrcaBusinessSolution</CustomLink>. <Date>(Apr 2023 – )</Date></span>
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
				<CustomEmoji label='graduation' emoji='🛍' /> Retail System Officer at <CustomLink targetUrl='https://www.beymen.com/'>Beymen Group</CustomLink>. <Date>(Jul 2019 – Mar 2022)</Date>
				</Item>
				<Item>
				<CustomEmoji label='graduation' emoji='💻' /> Software Developer Intern at <CustomLink targetUrl='https://www.matras.com/'>RDC Partner</CustomLink>. <Date>(Mar 2022 – Jul 202)</Date>
				</Item>
				<>
				<SectionTitle><CustomEmoji label='computer' emoji='💻' /> Education</SectionTitle>
				<Item>
							<CustomEmoji label='graduation' emoji='🎓' /> Graduated from <BoldText>Trakya University</BoldText> in Computer Engineering. <Date>(2022)</Date>
				</Item>
				</>
			</ItemList>
		</>
	)
}

export default JourneyCard