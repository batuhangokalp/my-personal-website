import React from 'react'
import { FooterDiv } from './footer.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                © {new Date().getFullYear() + " "}
                Batuhan Gökalp
                <br /><a href="mailto:bbatuhangokalp@gmail.com">bbatuhangokalp[at]gmail.com</a> <CustomEmoji label='mailbox' emoji='📩' />
            </FooterDiv>
        </>
    )
}

export default Footer