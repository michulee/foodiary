import styled from "styled-components/macro"

// ! difference between React.ReactNode and Grid's ReactElement?
type Props = {
    children?: React.ReactNode
}
const Container = ({children} : Props) => {
    const ContainerElement = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    `
    return(
        <ContainerElement>{children}</ContainerElement>
    )
}

export default Container