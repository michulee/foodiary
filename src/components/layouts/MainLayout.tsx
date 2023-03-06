import styled from "styled-components"
import SideNav from "@features/SideNav"
import Modules from "@features/Modules"
import View from "@features/View"

const Wrapper = styled.div`
height: 100vh;

display: grid;
grid-template-columns: 60px 150px 1fr;
`

const MainLayout = () => {
    return(
        <Wrapper>
            <SideNav/>
            <Modules/>
            <View/>
        </Wrapper>
    )
}

export default MainLayout