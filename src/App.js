import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './core/footer/Footer';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';

import Grid from './features/grid/Grid'
import { useEffect, useReducer } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GridContext from './context/GridContext';
import GridStateReducer from 'reducer/GridStateReducer'
import * as Constants from 'app-constants';

export default function App() {
  const { GRID_STATE_CATEGORIES } = Constants;

  const initialState = {
    current: 1,
    total: 3,
    searchTerm: '',
    searchCategory: GRID_STATE_CATEGORIES.CHARACTERS
  }
  const [state, dispatch] = useReducer(GridStateReducer, initialState);

  useEffect(() => {
    console.log(state);
    // TODO: make correspondent call to API
  }, [state])

  return (
    <Router>
      <GridContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Menu></Menu>
            <main className="mt-4 mb-4">
              <div className="container">
                <Grid />
              </div>
            </main>
          <Footer />
        </div>
      </GridContext.Provider>
    </Router>
  );
}
