import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PhotoGallery from '../PhotoGallery/PhotoGallery.jsx'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar';


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
      <AppBar color="secondary" position="sticky">
        <h1 className="App-title">Meaningful Moments</h1>
      </AppBar >
      <Container maxWidth='md' className="photoGallery">
        <PhotoGallery allPhotos={allPhotos} getPhotos={getPhotos} />
      </Container>
    </div>
  );
}

export default App;
