import * as Constants from 'app-constants';

export default function GridStateReducer(state, action) {
    const { GRID_STATE_ACTIONS } = Constants;
    
    switch (action.type) {
        case GRID_STATE_ACTIONS.PAGE_CHANGE:
            return {
                ...state,
                current: action.value
            };
        case GRID_STATE_ACTIONS.SEARCH_TERM_CHANGE:
            return {
                ...state,
                current: 1,
                searchTerm: action.value
            };
        case GRID_STATE_ACTIONS.CATEGORY_CHANGE:
            return {
                ...state,
                current: 1,
                searchCategory: action.value
            };
        case GRID_STATE_ACTIONS.SEARCH_MODE_CHANGE:
            return {
                ...state,
                searchMode: action.value
            };
        case GRID_STATE_ACTIONS.TOTAL_CHANGE:
            return {
                ...state,
                total: action.value
            };
        case GRID_STATE_ACTIONS.ITEMS_PER_PAGE_CHANGE:
            return {
                ...state,
                itemsPerPage: action.value
            };
        default:
            return state;
    }
}