import Header from './ui/layouts/Header';
// import Banner from './ui/components/Banner/Banner';
// import TrackList from './ui/layouts/Tracklist/Tracklist';
// import Footer from './ui/layouts/Footer/Footer';
import React, { useState } from 'react';

function App() {
  const [ search, setSearch]= useState("Welcome");

  function handleSearch(data) {
    setSearch(data);
  }

  return (
    <main>
      <Header onSearch={handleSearch} search={search} />
      {/* <Banner /> */}  
      {/* <TrackList /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
