import GRID_STATE_ACTIONS from 'constants';

export default function GridStateReducer(draft, action) {
    switch (action.type) {
        case GRID_STATE_ACTIONS.PAGE_CHANGE:
            draft.current = action.value;
            return;
        case GRID_STATE_ACTIONS.SEARCH_TERM_CHANGE:
            // TODO
            return
        case GRID_STATE_ACTIONS.CATEGORY_CHANGE:
            // TODO
            return
        default:
            return
    }
}