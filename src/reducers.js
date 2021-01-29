function searchReducer(state, action) {
    switch (action.type) {
        case 'PERFORM_SEARCH':
            const searchTerm = { searchTerm: action.searchTerm }
            return [searchTerm, ...state]

        default:
            return state
    }
}

export default function appReducer(state, action) {
    return {
        searchTerm: searchReducer(state.searchTerm, action)
    }
}