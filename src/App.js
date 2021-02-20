import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainGrid from './features/main-grid/MainGrid'
import Detail from './features/detail/Detail'

import Footer from './core/footer/Footer';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';

import { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GridContext from './context/GridContext';
import GridStateReducer from 'reducer/GridStateReducer'

import FooterContext from './context/FooterContext';
import FooterReducer from 'reducer/FooterReducer';

import * as Constants from 'app-constants';

export default function App() {
  const { GRID_STATE_CATEGORIES, GRID_STATE_SEARCH_MODES } = Constants;

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
  const [ footerState ] = useReducer(FooterReducer, initalFooterState);

  return (
      <GridContext.Provider value={[gridState, gridDispatch]}>
        <div className="App">
          <Header />
          <Menu></Menu>
            <main className="pt-4 pb-4">
              <div className="container">
              <Router>
                <Switch>
                  <Route path="/detail/:id" component={Detail} />
                  <Route path="/" component={MainGrid} />
                </Switch>
              </Router>
              </div>
            </main>
            <FooterContext.Provider value={[footerState]}>
              <Footer />
            </FooterContext.Provider>
        </div>
      </GridContext.Provider>
  );
}
