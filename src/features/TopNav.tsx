import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

const Nav = styled.nav`
display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
padding: 0.5rem 1rem;
background-color: black;

a {
    text-decoration: none;
    color: white;
}
a:hover, a:focus {
    color: pink;
}
`

const TopNav = () => {
    const Logo = styled.img`
    `
    const Wrapper = styled.div`
    displa
    `

    // TODO possible to swap out components at different media queries?

    return(
        <>
        <Wrapper>
            {/* <Logo src={''}/> */}
            <Nav>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </Nav>
        </Wrapper>
        <Routes>
            <Route path='/'/>
            <Route path='/recipes'/>
            <Route path='/about'/>
            <Route path='/blog'/>
            <Route path='/contact'/>
        </Routes>
        </>
    )
}

export default TopNav