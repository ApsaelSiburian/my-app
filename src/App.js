import { useEffect, useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=10')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(err => console.error('Error fetching photos:', err));
  }, []);

  return (
    <div>
      <h1>Galeri Foto</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.download_url} alt={photo.author} width="150" />
            <p>{photo.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
