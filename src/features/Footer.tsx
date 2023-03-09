import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components/macro"

const FooterWrapper = styled.footer`
background-color: black;
color: white;
text-align: center;
padding: 0.5rem;
`
const Nav = styled.nav`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
gap: 1rem;
@media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
`

const NavSection = styled.div`
display: flex;
flex-direction: column;

// FIXME doesn't work
// Link {
//     color: white;
// }

a {
    color: white;
}
`

const LinkHeader = styled.span`
`

const Copyright = styled.p`
`

const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <Nav>
                <NavSection>
                    <LinkHeader>Contact</LinkHeader>
                    <Link to='/'>Home</Link>
                    <Link to='/recipes'>Recipes</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact Us</Link>
                </NavSection>
                <NavSection>
                    <LinkHeader>Recipes</LinkHeader>
                    <Link to='/dessert'>Dessert</Link>
                    <Link to='/healthy'>Healthy</Link>
                    <Link to='/drinks'>Drinks</Link>
                    <Link to='/breakfast'>Breakfast</Link>
                    <Link to='/lunch'>Lunch</Link>
                    <Link to='/dinner'>Dinner</Link>
                </NavSection>
            </Nav>
            <Copyright>2022 Copyright. All rights reserved.</Copyright>
        </FooterWrapper>

        <Routes>
            <Route path='/dessert'/>
            <Route path='/healthy'/>
            <Route path='/drinks'/>
            <Route path='/breakfast'/>
            <Route path='/lunch'/>
            <Route path='/dinner'/>
        </Routes>
        </>
    )
}

export default Footer