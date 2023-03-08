import Card from "@components/elements/Card";
import Header2 from "@components/elements/Header2";
import Grid from "@components/layouts/Grid";
import Grid1x2 from "@components/layouts/Grid1x2";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [state, setState] = useState([]);
  const [featured, setFeatured] = useState([]);

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
              image={""}
              title={recipe["title"]}
              caption={recipe["_id"]}
            />
          );
        })}
      </>
    );
  };

  // OPTION 2: using fat arrow notation shortcut
  // const CardList = () : JSX.Element => (
  //     <>
  //     {
  //     state.map((recipe) => {
  //         return <Card key={uuidv4()} image={''} title={recipe['title']} caption={recipe['_id']} />
  //     })
  //     }
  //     </>
  // )

  const FeaturedList = () => {
    const list: Array<ReactElement> = state.map((recipe) => {
      return (
        <Card
          key={uuidv4()}
          image={""}
          title={recipe["title"]}
          caption={recipe["_id"]}
        />
      );
    });

    // console.log('typeof: ', typeof list)

    // setFeatured(list)
  };

  const HomeWrapper = styled.div`
    margin: 1rem;
    height: 100%;
  `;

  return (
    <HomeWrapper>
      <Header2 value={"Featured"} />
      {/* TODO replace explicit components to be dynamic */}
      <Grid1x2
        left={<Card title={"Left card"} />}
        topRight={<Card title={"Top right card"} />}
        bottomRight={<Card title={"Bottom right card"} />}
      />

      <Header2 value={"Hot Recipes"} />
      {/* <Grid column={3} element={<Card/>}/> */}
      <Grid column={3} list={<CardList />} />
    </HomeWrapper>
  );
};

export default Home;
