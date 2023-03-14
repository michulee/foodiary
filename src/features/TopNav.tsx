import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import logo from 'logo.svg'
import Login from "@pages/Login"
import Home from "@pages/Home"
import Register from "@pages/Register"
import Contact from "@pages/Contact"

const Nav = styled.nav`
display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
padding: 0.5rem 1rem;

a {
    text-decoration: none;
    color: white;
}
a:hover, a:focus {
    color: pink;
}
`

const Nav2 = styled.nav`
display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
padding: 0.5rem 1rem;

margin-left: auto;

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
    display: block;
    width: 25px;
    margin: 5px;
    `
    const Wrapper = styled.div`
    display: flex;
    background-color: black;
    padding: 0 1rem;
    `

    // TODO possible to swap out components at different media queries?

    return(
        <>
        <Wrapper>
            <Nav>
                <Link to='/'><Logo src={logo}/></Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </Nav>
            <Nav2>
                <Link to='/login'>Login</Link>
            </Nav2>
        </Wrapper>

        {/* FIXME try to make content between nav and footer, but have routes at top at App.tsx  */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes'/>
            <Route path='/about'/>
            <Route path='/blog'/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </>
    )
}

export default TopNav