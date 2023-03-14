import Card from "@components/elements/Card";
import Grid from "@components/layouts/Grid";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FilterView = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        try {
          const getData = async () => {
            // ! Added a non-null assertion operator (!) after the getRecipes variable when passing it to the fetch method, since TypeScript does not know for sure that the environment variable will be defined at runtime.
            const response = await fetch(process.env.REACT_APP_GET_RECIPES!);
            const data = await response.json();
            setState(data);
          };
          getData();
        } catch (error) {
          console.error(error);
        }
      }, []);

    // OPTION 1: using fat arrow notation
    const CardList = (): JSX.Element => {
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