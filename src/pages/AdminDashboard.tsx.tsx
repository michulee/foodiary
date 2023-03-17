import Input from "@components/elements/Input"
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react"

const AdminDashboard = () => {
    // need to initialize it with {}, so that ...prevState can be read
    const [data, setData] = useState({})

    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [caption, setCaption] = useState()

    const [collection, setCollection] = useState('')
    const [request, setRequest] = useState('')

    const [inputs, toggleInputs] = useState(false)

    const handleRequestChange = (event: any) => {
        setRequest(event.target.value)
    }

    const handleCollectionChange = (event: any) => {
        setCollection(event.target.value)
    }

    const handleChange = (event: ChangeEvent) => {
        // setData((prevState) => ({
        //     ...prevState,
        //     [event.target]: event.target.value
        // }))
    }

    // type SubmitProps = {
    //     event: FormEvent
    // }
    // const handleSubmit = async (event : SubmitProps) => {
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log("COLLECTION: ", collection)
        console.log('REQUEST: ', request)
        try {
            // const options = {
            //     method: request,
            //     headers: { 'Content-Type': 'application/json' }
            //     // body: JSON.stringify(body)
            // }
            // const response = await fetch(process.env.REACT_APP_GET_RECIPES!, options)
            //     .then((response) => setData(response.json()));

            const response = await fetch(process.env.REACT_APP_GET_RECIPES!)
                .then((response) => setData(response.json()));

            // console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    const TableHead = () => {

        return (
            <></>
        )
    }
    const TableBody = () => {
        return (
            <>
                {data && console.log(data)}
            </>
        )
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <label htmlFor="collection">Collection</label>
                    <select name="collection" id="collection" onChange={handleCollectionChange}>
                        <option value="">Please choose an option</option>
                        <option value="recipes">recipes</option>
                        <option value="featured">featured</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="request">HTTP Request</label>
                    <select name="request" id="request" onChange={handleRequestChange}>
                        <option value="" selected disabled>Please choose a HTTP request</option>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </fieldset>
                {inputs ?
                    <fieldset>
                        <Input type='text' label='Title' htmlFor='title' name='title' />
                        <Input type='text' label='Image' htmlFor='image' name='image' />
                        <Input type='text' label='Caption' htmlFor='caption' name='caption' />
                    </fieldset>
                    : null}
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        </>
    )
}

export default AdminDashboard