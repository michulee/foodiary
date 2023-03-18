import Container from "@components/elements/Container"
import FilterBar from "@components/elements/FilterBar"
import FilterView from "@features/FilterView"
import Pagination from "@features/Pagination"
import styled from "styled-components/macro"

const Wrapper = styled.div`
margin-top: 5rem;
padding: 1rem;
position: relative;
`

const Recipes = () => {
    return(
        <Container>
            <FilterBar/>
            <Wrapper>
                <FilterView/>
                <Pagination itemsPerPage={3} items={14} max={5}/>
            </Wrapper>
        </Container>
    )
}

export default Recipes