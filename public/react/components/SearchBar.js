import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getBggSearch } from 'bgg-xml-api-client';

export const SearchBar = ({setResults}) => {
    const [formState, setFormState] = useState('');

	async function fetchBGGSearch(){
		try {
			const { data } = await getBggSearch({query:formState,type:"boardgame"});
            const limitedData = data.item.slice(0, 10);
            setResults(limitedData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	};
    
    const handleChange = (e) => {
        setFormState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBGGSearch();
    }

    return(
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="search">
                    <Form.Label>Search By Game Title</Form.Label>
                    <Form.Control type="text" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
  } 