import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import logo from 'logo.svg'
import Login from "@pages/Login"
import Home from "@pages/Home"
import Register from "@pages/Register"
import Contact from "@pages/Contact"
import Recipes from "@pages/Recipes"
import AdminDashboard from "@pages/AdminDashboard.tsx"
import About from "@pages/About"
import Page404 from "@pages/Page404"
import { useState } from "react"
import FilterView from "./FilterView"


const MobileNav = styled.nav`
// display: flex;
`
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

const Logo = styled.img`
display: block;
width: 25px;
margin: 5px;
`
const Wrapper = styled.div`
display: flex;
background-color: black;
padding: 0 1rem;

position: fixed;
width: 100%;
z-index: 1;
top: 0;
left: 0;

@media screen and (min-width: 800px) {

}
`

const MenuIcon = styled.span`
color: #FFFFFF;
@media screen and (min-width: 1200px) {
    // display: none;
}
`



const TopNav = () => {
    const [menu, toggleMenu] = useState(false)

    const Dropdown = styled.div`
    display: flex;
    cursor: pointer;
    // display: ${menu ? 'block' : 'none'}
    `
    return(
        <>
        <Wrapper>
            <Link to='/'><Logo src={logo}/></Link>
            <MobileNav>
                {/* <MenuIcon onClick={() => toggleMenu(!menu)} className="material-symbols-outlined">menu</MenuIcon> */}
                <Dropdown>
                    <Nav>
                        <Link to='/recipe'>Recipes</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                    </Nav>
                    <Nav2>
                        {/* <Link to='/login'>Login</Link> */}
                    </Nav2>
                </Dropdown>
            </MobileNav>
        </Wrapper>

        {/* FIXME try to make content between nav and footer, but have routes at top at App.tsx  */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='recipe' element={<Recipes/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blog' element={<Page404/>}/>
            <Route path='contact' element={<Page404/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='admin' element={<AdminDashboard/>}/>
            <Route path='pages/:pageID' element={<Recipes/>}/>
        </Routes>
        </>
    )
}

export default TopNav