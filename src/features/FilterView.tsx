import Card from "@components/elements/Card";
import Grid from "@components/layouts/Grid";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// ** FilterView reads the parameter, and based on what page it is, it displays the items
// ** /recipe or /recipe/page/1 shows 3
const FilterView = () => {
    // Why to use useLocation: https://stackoverflow.com/a/57989245
    // Solution: https://stackoverflow.com/a/62389224
    const location = useLocation()
    const [state, setState] = useState([]);
    let { pageID = 1} = useParams();
    console.log('pageID: ', pageID)


    useEffect(() => {
        try {
          const getData = async () => {
            // ! Added a non-null assertion operator (!) after the getRecipes variable when passing it to the fetch method, since TypeScript does not know for sure that the environment variable will be defined at runtime.

            // TODO need to use context or redux? to add sort
            // const response = await fetch(process.env.REACT_APP_GET_RECIPES! + `/?sort=${sort}?pageID=${pageID}`);
            const response = await fetch(process.env.REACT_APP_GET_RECIPES! + `?pageID=${pageID}`);
            const data = await response.json();
            console.log('data length: ', data.length)
            setState(data);
          };
          getData();
        } catch (error) {
          console.error(error);
        }
      }, [location]);

    // OPTION 1: using fat arrow notation
    const CardList = (): JSX.Element => {
        // ! needs to use loader to query data from db
        // ! needs to use actions to call X data on each page

        const filtered = 0;
        return (
        <>
            {state.map((recipe) => {
            // ??? recipe.title doesn't work but recipe['title'] does
            return (
                <Card
                key={uuidv4()}
                image={recipe["image"]}
                title={recipe["title"]}
                caption={recipe["caption"]}
                />
            );
            })}
        </>
        );
    };
    return(
        <>
            <Grid list={<CardList />} />
        </>
    )
}

export default FilterView