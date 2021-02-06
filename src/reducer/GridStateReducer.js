import * as Constants from 'app-constants';

export default function GridStateReducer(draft, action) {
    const { GRID_STATE_ACTIONS } = Constants;

    console.log(draft);
    console.log(action);
    
    switch (action.type) {
        case GRID_STATE_ACTIONS.PAGE_CHANGE:
            draft.current = action.value;
            return;
        case GRID_STATE_ACTIONS.SEARCH_TERM_CHANGE:
            draft.searchTerm = action.value;
            return;
        case GRID_STATE_ACTIONS.CATEGORY_CHANGE:
            draft.searchCategory = action.value;
            return;
        default:
            return;
    }
}