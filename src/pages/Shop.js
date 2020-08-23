import React, { useState, useEffect } from 'react';
import '../components/styles.css';
import { Link } from 'react-router-dom';

function Shop() {
  const [joke, setJoke] = useState([]);

  function fetchData() {
    fetch(
      'https://sv443.net/jokeapi/v2/joke/Any?type=single&idRange=0-20&amount=6'
    )
      .then((response) => response.json())
      .then((jsonData) => setJoke(jsonData.jokes));
  }
  console.log(joke);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* passing a URL parameter using Link component. 
      We can access it later with useParams */}
      {joke.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.id}</Link>
        </h1>
      ))}
    </div>
  );
}
export default Shop;
