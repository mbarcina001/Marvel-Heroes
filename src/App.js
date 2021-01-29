import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './core/footer/Footer';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import Search from './core/search/Search';

import Landpage from './features/landpage/Landpage'
import { useEffect, useState } from 'react';

import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  const [ showSearchPane, setShowSearchPane ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    console.log(searchTerm);
    setShowSearchPane(false)
    // TODO: 6 calls to API
  }, [searchTerm])

  return (
    <Router>
      <div className="App">
        <Header handleOpenSearchPane={ () => setShowSearchPane(true) }/>
        <Menu></Menu>
        <main>
            <div className="container">
              <Search 
                visible={ showSearchPane }
                handleClose={ () => setShowSearchPane(false) }
                setSearchTerm={setSearchTerm}
              />
              
            </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
