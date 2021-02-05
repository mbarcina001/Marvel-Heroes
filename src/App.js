import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './core/footer/Footer';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import Search from './core/search/Search';

import Landpage from './features/landpage/Landpage'
import { useEffect, useState } from 'react';
import { useImmerReducer  } from "use-immer";

import { BrowserRouter as Router } from 'react-router-dom';

import PaginatorContext from './context/PaginatorContext';
import GridStateReducer from 'reducer/GridStateReducer'

export default function App() {
  const [ showSearchPane, setShowSearchPane ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  const initialState = {
    current: 2,
    total: 3
  }
  const [state, dispatch] = useImmerReducer (GridStateReducer, initialState);

  useEffect(() => {
    setShowSearchPane(false)
    // TODO: 6 calls to API
  }, [searchTerm])

  return (
    <Router>
      <div className="App">
        <Header handleOpenSearchPane={ () => setShowSearchPane(true) }/>
        <Menu></Menu>
        <PaginatorContext.Provider value={[state, dispatch]}>
          <main className="mt-4 mb-4">
              <div className="container">
                <Search 
                  visible={ showSearchPane }
                  handleClose={ () => setShowSearchPane(false) }
                  setSearchTerm={setSearchTerm}
                />
                <Landpage />
              </div>
          </main>
        </PaginatorContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}
