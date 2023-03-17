import Input from "@components/elements/Input"
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from "react"

const AdminDashboard = () => {
    // need to initialize it with {}, so that ...prevState can be read
    const [data, setData] = useState({})

    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [caption, setCaption] = useState()

    const handleChange = (event : ChangeEvent) => {
        // setData((prevState) => ({
        //     ...prevState,
        //     [event.target]: event.target.value
        // }))
    }

    // type SubmitProps = {
    //     event: FormEvent
    // }
    // const handleSubmit = async (event : SubmitProps) => {
    const handleSubmit = async (event : FormEvent) => {
        event.preventDefault();
        console.log("EVENT: ", event.target)
        try {
            const options = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' }
                // body: JSON.stringify(body)
            }
            // const response = await fetch(process.env.REACT_APP_GET_RECIPES!, options);
        } catch (error) {
            console.error(error)            
        }
    }

    return(
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <Input type='text' label='Title' htmlFor='title' name='title'/>
                    <Input type='text' label='Image' htmlFor='image' name='image'/>
                    <Input type='text' label='Caption' htmlFor='caption' name='caption'/>
                </fieldset>
                <button type="submit">Create</button>
            </form>
    )
}

export default AdminDashboard