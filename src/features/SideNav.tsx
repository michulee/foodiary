import Home from "@groups/Home"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
flex-direction: column;
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
interface LinkProps {
    to: string;
    element: JSX.Element;
    children: React.ReactNode;
}
const SideNav = () => {
    return(
        <>
        <Nav>
            <Link to='/' element={<Home/>}>Home</Link>
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