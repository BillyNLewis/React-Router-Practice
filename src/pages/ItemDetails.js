import React, { useState, useEffect } from 'react';
import '../components/styles.css';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const [joke, setJoke] = useState({});
  // useParams hook allows us to access the URL parameter of the current Route
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    function fetchData() {
      fetch(`https://sv443.net/jokeapi/v2/joke/Any?type=single&idRange=${id}`)
        .then((response) => response.json())
        .then((jsonData) => setJoke(jsonData));
    }
    fetchData();
  }, [id]);
  console.log(joke);
  return (
    <div>
      <h1>{joke.id}</h1>
      <h2>{joke.joke}</h2>
    </div>
  );
}
export default ItemDetails;
