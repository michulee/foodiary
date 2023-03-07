import Card from "@components/elements/Card"
import Header2 from "@components/elements/Header2"
import Grid from "@components/layouts/Grid"
import { ReactElement, useEffect, useState } from "react"

const Home = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        try {
            const getData = async () => {
                // ! Added a non-null assertion operator (!) after the getRecipes variable when passing it to the fetch method, since TypeScript does not know for sure that the environment variable will be defined at runtime.
                const response = await fetch(process.env.REACT_APP_GET_RECIPES!)
                const data = await response.json()
                setState(data)
            }
            getData();
        } catch (error) {
            console.error(error)
        }
    }, [])

    // const CardList = () : JSX.Element => (
    //     state.map((recipe) => {
    //         <Card image={''} caption={''} text={''}/>
    //     })
    // )

    const CardList = (): JSX.Element => {
        return (
            <>
                {
                    state.map((recipe) => {
                        return <Card image={''} caption={''} text={recipe['_id']} />
                    })
                }
            </>
        )
    }

    // const CardList = () : JSX.Element => (
    //     <div>Test</div>
    // )

    return (
        <>
            <Header2 value={"Featured"} />

            <Header2 value={"Hot Recipes"} />
            {/* <Grid column={3} element={<Card/>}/> */}
            <Grid column={3} list={<CardList />} />
            {/* <Grid column={3}/>
                <CardList/>
            <Grid/> */}
        </>
    )
}

export default Home