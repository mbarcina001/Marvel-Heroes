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

import * as Constants from 'app-constants';

export default function App() {
  const { GRID_STATE_ACTIONS, GRID_STATE_CATEGORIES, GRID_STATE_SEARCH_MODES } = Constants;

  const initialState = {
    current: 1,
    total: 3,
    searchTerm: '',
    searchMode: GRID_STATE_SEARCH_MODES.NAME_EQUAL,
    searchCategory: GRID_STATE_CATEGORIES.CHARACTERS,
    itemsPerPage: 20
  }
  const [ state, dispatch ] = useReducer(GridStateReducer, initialState);
  
  const [ loading, setLoading ] = useState(true);
  const [ elementList, setElementList ] = useState([]);

    
  useEffect(() => {
    setLoading(true);
    fetch(`http://gateway.marvel.com/v1/public/${state.searchCategory}?apikey=5aa2c0e77f889786c7da67172ceb8a0c&hash=aad01e90cda078d91f314188521cd3da&ts=1&offset=${(state.current - 1) * state.itemsPerPage}${state.searchTerm ? '&' + state.searchMode +'=' + state.searchTerm : ''}`)
      .then(response => response.json())
      .then(response => {
        setElementList(response.data.results);

        dispatch({
          type: GRID_STATE_ACTIONS.TOTAL_CHANGE,
          value: Math.ceil(response.data.total / state.itemsPerPage)
        })

        setLoading(false);
      });
  }, [state.current, state.searchTerm, state.searchCategory, state.searchMode]);

  function getMainGrid() {
    if (loading) {
      return <Loading />
    }

    if (state.total === 0) {
      return <p>No items found</p>
    }

    return <Grid list={elementList}/>
  }

  return (
    <Router>
      <GridContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Menu></Menu>
            <main className="pt-4 pb-4">
              <div className="container">
                { getMainGrid() }
              </div>
            </main>
          <Footer />
        </div>
      </GridContext.Provider>
    </Router>
  );
}
