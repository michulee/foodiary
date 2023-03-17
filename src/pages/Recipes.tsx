import Container from "@components/elements/Container"
import FilterBar from "@components/elements/FilterBar"
import FilterView from "@features/FilterView"
import styled from "styled-components/macro"

const Wrapper = styled.div`
padding: 1rem;
`

const Recipes = () => {
    return(
        <Container>
            <Wrapper>
                <FilterBar/>
                <FilterView/>
            </Wrapper>
        </Container>
    )
}

export default Recipes