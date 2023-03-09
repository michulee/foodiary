import styled from "styled-components/macro"

const Slider = () => {
    const Wrapper = styled.div`
    overflow: hidden;
    height: 100%;

    position: relative;
    `
    const Image = styled.img`
    display: block;
    max-height: 250px;
    width: 100%;
    object-fit: cover;
    position: relative;

    // FIXME not working
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0,0,0,1);
    }
    `

    const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    width: 100%;
    padding: 1rem;

    position: absolute;
    top: 0;
    left: 0;
    `

    const Badge = styled.div`
    background-color: #b50000; //red
    color: white;
    width: fit-content;
    padding: 0.2rem 0.5rem;
    `
    
    const Text = styled.p`
    background-color: black;
    color: white;
    width: fit-content;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0 0 0;
    `
    return(
        <Wrapper>
            <Image src={'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80'}/>
            <Content>
                <Badge>Recipe of the Day</Badge>
                <Text>{'Asian-styled fried chicken wings'}</Text>
            </Content>
        </Wrapper>
    )
}

export default Slider