import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
flex-direction: column;
height: 100%;
gap: 2rem;
align-items: center;
padding: 0.5rem 1rem;
background-color: rgba(0,0,0,0.8);

a {
    text-decoration: none;
    color: white;
}
a:hover, a:focus {
    color: pink;
}
`

const Modules = ({}) => {
    return(
        <>
            <Nav>
                <Link to='/recipes/week1'>Week 1</Link>
                <Link to='/recipes/week2'>Week 2</Link>
            </Nav>
        </>
    )
}

export default Modules