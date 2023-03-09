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
    return(
        <>
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact Us</Link>
        </Nav>
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