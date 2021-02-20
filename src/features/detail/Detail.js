import './Detail.scss';

import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import GridContext from 'context/GridContext';

import * as ApiService from 'services/ApiService'

export default function Detail() {
    const [ state, dispatch ] = useContext(GridContext);
    const { searchCategory } = state;

    let { id } = useParams();

    useEffect(() => {
        // setLoading(true);
        ApiService.retrieveDetail(searchCategory, id).then(response => {
            // setLoading(false);
        });
    });

    return (
        <p>Detail</p>
    )
}