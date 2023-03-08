import styled from "styled-components"

const FooterWrapper = styled.footer`
background-color: black;
color: white;
text-align: center;
padding: 0.5rem;
`

const Footer = () => {
    return (
        <FooterWrapper>
            2022 Copyright. All rights reserved.
        </FooterWrapper>
    )
}

export default Footer