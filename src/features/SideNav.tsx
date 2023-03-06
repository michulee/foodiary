import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
flex-direction: column;
max-width: 60px;
height: 100%;
gap: 2rem;
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

const SideNav = () => {
    return(
        <>
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/recipes'>Recipes</Link>
        </Nav>
        <Routes>
            <Route path='/'/>
            <Route path='/recipes'/>
        </Routes>
        </>
    )
}

export default SideNav