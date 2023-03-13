import styled from "styled-components/macro"

type Props = {
    children?: React.ReactNode
}
// ! wrapping a <Form> tag causes blank screen, useSubmitImpl must be used within a data router, see https://reactrouter.com/en/6.9.0/routers/picking-a-router
const Form = ({children} : Props) => {
    const FormElement = styled.form`
    `
    return(
        <FormElement>{children}</FormElement>
    )
}

export default Form