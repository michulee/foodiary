import Card from "@components/elements/Card";
import Header2 from "@components/elements/Header2";
import Grid from "@components/layouts/Grid";
import Grid1x2 from "@components/layouts/Grid1x2";
import Slider from "@features/Slider";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [state, setState] = useState([]);
  const [photos, setPhotos] = useState([]);
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
              image={recipe["image"]}
              title={recipe["title"]}
              caption={recipe["caption"]}
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
    max-width: 1200px;
    margin: 0 auto 5rem auto;
  `;

  const ContentWrapper = styled.div`
  padding: 0 1rem;
  `

  return (
    <HomeWrapper>
      <Slider />

      <ContentWrapper>
        <Header2 value={"Featured"} />
        {/* TODO replace explicit components to be dynamic */}
        <Grid1x2
          left={
            <Card
              type={"New Article"}
              author={"by Emily Sepulveda"}
              title={
                "The Sweet and Juicy Truth About Watermelon: Health Benefits and Fun Facts"
              }
              image={
                "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              body={'Watermelon is a refreshing summer fruit that not only quenches your thirst but also has a number of health benefits. Here are some sweet and juicy facts about watermelon that you might not know.'}
            />
          }
          topRight={
            <Card
              type={"New Recipe"}
              author={"by Aiden Giovanni"}
              title={"Japanese milk bread"}
              image={
                "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
            />
          }
          bottomRight={
            <Card
              type={"New Article"}
              author={"by Jen Tino"}
              title={
                "From Farm to Table: The Best Stores for Affordable and Fresh Vegetables"
              }
              image={
                "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              }
            />
          }
        />
        <Header2 value={"Hot Recipes"} />
        {/* <Grid column={3} element={<Card/>}/> */}
        <Grid column={3} list={<CardList />} />
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
