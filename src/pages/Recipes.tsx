import Container from "@components/elements/Container"
import FilterBar from "@components/elements/FilterBar"
import FilterView from "@features/FilterView"

const Recipes = () => {
    return(
        <Container>
            <FilterBar/>
            <FilterView/>
        </Container>
    )
}

export default Recipes