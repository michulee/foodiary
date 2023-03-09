import { ReactElement, useEffect } from "react"
import styled from "styled-components/macro"

type GridProps = {
    left: ReactElement,
    topRight: ReactElement,
    bottomRight: ReactElement,
}
const Grid1x2 = ({left, topRight, bottomRight} : GridProps) => {
    const LeftGridItem = styled.div`
    grid-area: grid_left;
    max-height: 500px;
    `
    const TopRightGridItem = styled.div`
    grid-area: grid_top_right;
    `
    const BottomRightGridItem = styled.div`
    grid-area: grid_bottom_right;
    `

    const GridWrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-areas:
        "grid_left"
        "grid_top_right"
        "grid_bottom_right";
    
    @media screen and (min-width: 600px) {
        grid-template-areas:
            "grid_left grid_top_right"
            "grid_left grid_bottom_right";
    }
    `

    return(
        <GridWrapper>
            <LeftGridItem>{left}</LeftGridItem>
            <TopRightGridItem>{topRight}</TopRightGridItem>
            <BottomRightGridItem>{bottomRight}</BottomRightGridItem>
        </GridWrapper>
    )
}

export default Grid1x2