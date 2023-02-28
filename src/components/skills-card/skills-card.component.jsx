import React from 'react'
import {
	SectionTitle,
	StackList,
	Item,
	Tech,
} from './../section-card/section-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'

const SkillsCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='tool' emoji='🛠' /> Technology Stack</SectionTitle>
			<StackList>
				<Item>
					I'm currently focused on <Tech style={{ borderBottom: '3px solid #f0db4f' }}>C# .NET</Tech>, <Tech style={{ borderBottom: '3px solid #00b336' }}>React</Tech>and<Tech style={{ borderBottom: '3px solid #7a1d5c' }}>TyperScript</Tech>.
				</Item>
				<Item>
					I've knowledge on <Tech style={{ borderBottom: '3px solid #454545' }}>Microsoft SQL Server</Tech>, <Tech style={{ borderBottom: '3px solid #21618C' }}>HTML5</Tech>, <Tech style={{ borderBottom: '3px solid #008080' }}>CSS3</Tech>, <Tech style={{ borderBottom: '3px solid #000080' }}>Bootsrap</Tech>, <Tech style={{ borderBottom: '3px solid #800000' }}>Selenium</Tech>.
				</Item>
				<Item>
					I'm learning about <Tech style={{ borderBottom: '3px solid #956505' }}>Docker</Tech>and<Tech style={{ borderBottom: '3px solid #7a1d5c' }}>C# . Net</Tech>to get certification in this field.
				</Item>
			</StackList>
		</>
	)
}

export default SkillsCard
