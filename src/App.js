import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://xcountries-backend.labs.crio.do/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  return (
    <div className="App">
      {countries.length > 0 ? (
        countries.map((country) => (
          <div className="country-card" key={country.name}>
            <img src={country.flag} alt={`${country.name} flag`}  height='100px' width='100px' />
            <h2>{country.name}</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
