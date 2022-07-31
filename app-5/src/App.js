import React from 'react';
import Image from './Components/Image';
import './App.css';

function App() {
  const imgSrc = "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div>
      <Image item={imgSrc} />
    </div>
  );
}

export default App;
