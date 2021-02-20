import Grid from 'features/grid/Grid'
import Loading from 'shared/loading/Loading';

import { useContext, useState, useEffect } from 'react';

import GridContext from 'context/GridContext';
import FooterContext from 'context/FooterContext';

import * as ApiService from 'services/ApiService'
import * as Constants from 'app-constants';


export default function MainGrid() {
    // const [ footerState, footerDispatch ] = useContext(FooterContext);
    const [ gridState, gridDispatch ] = useContext(GridContext);
    const { searchTerm, total, searchMode } = gridState;

    const [ loading, setLoading ] = useState(true);
    const [ elementList, setElementList ] = useState([]);

    const { GRID_STATE_ACTIONS, GRID_STATE_SEARCH_MODES } = Constants;

    useEffect(() => {
      setLoading(true);
      ApiService.retrieveList(gridState).then(response => {
        setLoading(false);
        setElementList(response.data.results);
  
        gridDispatch({
          type: GRID_STATE_ACTIONS.TOTAL_CHANGE,
          value: Math.ceil(response.data.total / gridState.itemsPerPage)
        });
  
        // footerDispatch(response.attributionHTML);
  
      });
    }, [gridState.current, gridState.searchTerm, gridState.searchCategory, gridState.searchMode, gridState.itemsPerPage]);

    function getMainGrid() {
      if (loading) {
        return <Loading />
      }
  
      if (total === 0 && searchTerm !== '') {
        return <p>No items found for search term <b>"<u>{searchTerm}</u>"</b></p>
      }
  
      if (total === 0) {
        return <p>No items found.</p>;
      }
  
      return <Grid list={elementList}/>
    }
    
    function getSearchResultMsg() {
      if (searchTerm !== '' && total !== 0) {
        if (searchMode === GRID_STATE_SEARCH_MODES.NAME_EQUAL) {
          return <p>Showing search results for: <b>"<u>{searchTerm}</u>"</b></p>;
        }
        return <p>Showing search results starting by: <b>"<u>{searchTerm}</u>"</b></p>;
      }
    }

    return (
      <div>
        { getSearchResultMsg() }
        { getMainGrid() }
      </div>
    )
}