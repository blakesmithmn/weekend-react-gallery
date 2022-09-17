import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PhotoGallery from '../PhotoGallery/PhotoGallery.jsx'

function App() {
  let [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    axios.get('/gallery')
      .then(response => {
        setAllPhotos(response.data);
        console.log(allPhotos);
        console.log('GET Success:', response.data);
      })
      .catch(error => {
        alert('error getting items:');
        console.log(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <PhotoGallery allPhotos={allPhotos} />
    </div>
  );
}

export default App;
