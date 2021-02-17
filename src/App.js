import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './core/footer/Footer';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import Loading from './shared/loading/Loading';

import Grid from './features/grid/Grid'

import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GridContext from './context/GridContext';
import GridStateReducer from 'reducer/GridStateReducer'

import FooterContext from './context/FooterContext';
import FooterReducer from 'reducer/FooterReducer';

import * as ApiService from './services/ApiService'
import * as Constants from 'app-constants';

export default function App() {
  const { GRID_STATE_ACTIONS, GRID_STATE_CATEGORIES, GRID_STATE_SEARCH_MODES } = Constants;

  const initialGridState = {
    current: 1,
    total: 3,
    searchTerm: '',
    searchMode: GRID_STATE_SEARCH_MODES.NAME_EQUAL,
    searchCategory: GRID_STATE_CATEGORIES.CHARACTERS,
    itemsPerPage: 20
  }

  const initalFooterState = '<a href="http://marvel.com">Data provided by Marvel. © 2014 MARVEL</a>';
  const [ gridState, gridDispatch ] = useReducer(GridStateReducer, initialGridState);
  const [ footerState, footerDispatch ] = useReducer(FooterReducer, initalFooterState);
  
  const [ loading, setLoading ] = useState(true);
  const [ elementList, setElementList ] = useState([]);

    
  useEffect(() => {
    setLoading(true);
    ApiService.retrieveList(gridState).then(response => {
      setLoading(false);
      setElementList(response.data.results);

      gridDispatch({
        type: GRID_STATE_ACTIONS.TOTAL_CHANGE,
        value: Math.ceil(response.data.total / gridState.itemsPerPage)
      });

      footerDispatch(response.attributionHTML);

    });
  }, [gridState.current, gridState.searchTerm, gridState.searchCategory, gridState.searchMode, gridState.itemsPerPage]);

  function getMainGrid() {
    if (loading) {
      return <Loading />
    }

    if (gridState.total === 0 && gridState.searchTerm !== '') {
      return <p>No items found for search term <b>"<u>{gridState.searchTerm}</u>"</b></p>
    }

    if (gridState.total === 0) {
      return <p>No items found.</p>;
    }

    return <Grid list={elementList}/>
  }

  function getSearchResultMsg() {
    if (gridState.searchTerm !== '' && gridState.total !== 0) {
      if (gridState.searchMode === GRID_STATE_SEARCH_MODES.NAME_EQUAL) {
        return <p>Showing search results for: <b>"<u>{gridState.searchTerm}</u>"</b></p>;
      }
      return <p>Showing search results starting by: <b>"<u>{gridState.searchTerm}</u>"</b></p>;
    }
  }

  return (
    <Router>
      <GridContext.Provider value={[gridState, gridDispatch]}>
        <div className="App">
          <Header />
          <Menu></Menu>
            <main className="pt-4 pb-4">
              <div className="container">
                { getSearchResultMsg() }
                { getMainGrid() }
              </div>
            </main>
            <FooterContext.Provider value={[footerState]}>
              <Footer />
            </FooterContext.Provider>
        </div>
      </GridContext.Provider>
    </Router>
  );
}
