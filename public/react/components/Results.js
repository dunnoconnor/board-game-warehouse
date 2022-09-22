import React from 'react';
import Container from 'react-bootstrap/Container';
import { BGGCard } from './BGGCard';

export const Results = ({results}) => {

    return(
		  <Container>
		{results.map((bggItem, index) => (<BGGCard bggItem={bggItem} key={index} ></BGGCard>))}
      </Container>
    )
  } 