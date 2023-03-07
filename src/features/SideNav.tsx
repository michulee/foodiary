import { Link } from "react-router-dom"
import styled from "styled-components"

import Button from '@components/elements/Button'
import { useState } from "react"

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

const SideNav = ({}) => {
    const [toggle, setToggle] = useState(false)

    const handleCreateGroup = () => {
        setToggle(!toggle)
    }

    return(
        <>
            <Nav>
                <Button value={'+'}/>
                <Link to='/math'>Math</Link>
                <Link to='/recipes'>Science</Link>
            </Nav>
        </>
    )
}

export default SideNav