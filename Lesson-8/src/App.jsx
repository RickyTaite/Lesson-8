import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Update the searchTerm state here

  };

  return (
    <div>
      <h1>Search App</h1>
      <Search onSearch={handleSearch} />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
      id="search"
      type="text"
      value={searchTerm}
      // Add value and 
      
      props.onSearch={handleSearch}
      
      // onChange here
      />
      </div>
  );  
}

export default App
