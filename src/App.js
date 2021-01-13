import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './core/header/Header';
import Footer from './core/footer/Footer';
import Search from './core/search/Search';

import Landpage from './features/landpage/Landpage'
import { useEffect, useState } from 'react';

function App() {
  const [ showSearchPane, setShowSearchPane ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  function handleOpenSearchPane() {
    setShowSearchPane(true);
  }

  function handleCloseSearchPane() {
    setShowSearchPane(false);
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    console.log(searchTerm);
    // TODO: 6 calls to API
  }, [searchTerm])

  return (
    <div className="App">
      <Header handleOpenSearchPane={handleOpenSearchPane}/>

      <main>
        <div className="container">
          <Search visible={showSearchPane} handleClose={handleCloseSearchPane} handleSearch={handleSearch}/>
          <Landpage />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
