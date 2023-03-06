import styled from "styled-components"
import SideNav from "../../features/SideNav"

const Wrapper = styled.div`
height: 100vh;
`

const MainLayout = () => {
    return(
        <Wrapper>
            <SideNav/>
        </Wrapper>
    )
}

export default MainLayout