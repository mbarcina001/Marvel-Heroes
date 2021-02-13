import axios from 'axios';

export async function retrieveList(state) {
    let params = {
        apikey: '5aa2c0e77f889786c7da67172ceb8a0c',
        hash: 'aad01e90cda078d91f314188521cd3da',
        ts: 1,
        offset: (state.current - 1) * state.itemsPerPage,
        limit: state.itemsPerPage
    }

    if (state.searchTerm) {
        params = {
            ...params,
            [state.searchMode]: state.searchTerm
        }
    }

    const response = await axios.get(`http://gateway.marvel.com/v1/public/${state.searchCategory}`, { params });
    return response.data;
}