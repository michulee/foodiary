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

            {/* dependent on second level route */}
            {/* 1) check URL every click and show view */}
            {/* 2) make <Modules/> and <View/> in one component and toggle state */}
            <View/>
        </Wrapper>
    )
}

export default MainLayout