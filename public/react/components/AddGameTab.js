import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { SearchBar } from './SearchBar';
import { Results } from './Results';


export const AddGameTab = () => {
    const [results, setResults] = useState(null);

    return(
        <Container>
            <SearchBar setResults={setResults}/>
            {results ? <Results results={results}/> : <div></div>}
        </Container>

    )
  } 