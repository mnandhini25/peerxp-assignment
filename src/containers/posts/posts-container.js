import React from 'react';
import CardComponent from '../../shared/components/card';
import { Box, Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const PostsContainer = () => {
    const appState = useSelector((state) => state);
  let postsState = appState.posts;
    return (
        <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
      <Container maxWidth={false}>
      <Grid container spacing={3}>
          {postsState?.cardList?.length
            ? postsState.cardList.map((card, cardIndex) => {
              
                return (
                    
                    <Grid item lg={3} sm={6} xl={3} xs={12} key={cardIndex}>
                    <a href={card.url} target="_blank" style={{textDecorationLine: 'none'}}>
                    <CardComponent data={card} />
                    </a>
                  </Grid>
                    
                  
                );
              
               
              })
            : ""}
        </Grid>
      </Container>
      </Box>
    )
}

export default PostsContainer;