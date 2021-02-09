import React from 'react';
import './Paginator.scss';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import GridContext from 'context/GridContext';
import * as Constants from 'app-constants';

export default function Paginator() {
    fontawesome.library.add(faChevronLeft);
    fontawesome.library.add(faChevronRight);

    const [ state, dispatch ] = useContext(GridContext);
    const { current, total } = state;

    const { GRID_STATE_ACTIONS } = Constants;

    function paginationPrevious() {
        pageChange(current === 1 ? current : current - 1);
    };

    function paginationNext() {
        pageChange(current === total ? current : current + 1);
    };

    function pageChange(page) {
        dispatch({
            type: GRID_STATE_ACTIONS.PAGE_CHANGE,
            value: page
        })
    }

    function getPaginationNumberButtons() {
        switch (Number(total)) {
            case 2:
                switch (Number(current)) {
                    case 1:
                        return (
                            <React.Fragment>
                                <li className="page-item active page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current)) }>{ Number(current) }</a>
                                </li>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) + 1) }>{ Number(current) + 1 }</a>
                                </li>
                            </React.Fragment>
                        );
                    case total:
                        return (
                            <React.Fragment>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) - 1) }>{ Number(current) - 1 }</a>
                                </li>
                                <li className="page-item active page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current)) }>{ Number(current) }</a>
                                </li>
                            </React.Fragment>
                        )
                    default:
                        return;
                }
            default:    
                switch (Number(current)) {
                    case 1:
                        return (
                            <React.Fragment>
                                <li className="page-item active page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current)) }>{ Number(current) }</a>
                                </li>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) + 1) }>{ Number(current) + 1 }</a>
                                </li>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) + 2) }>{ Number(current) + 2 }</a>
                                </li>
                            </React.Fragment>
                        );
                    case total:
                        return (
                            <React.Fragment>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) - 2) }>{ Number(current) - 2 }</a>
                                </li>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) - 1) }>{ Number(current) - 1 }</a>
                                </li>
                                <li className="page-item active page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current)) }>{ Number(current) }</a>
                                </li>
                            </React.Fragment>
                        )
                    default:
                        return (
                            <React.Fragment>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) - 1) }>{ Number(current) - 1 }</a>
                                </li>
                                <li className="page-item active page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current)) }>{ Number(current) }</a>
                                </li>
                                <li className="page-item page">
                                    <a className="page-link" href="/#" onClick={ () => pageChange(Number(current) + 1) }>{ Number(current) + 1 }</a>
                                </li>
                            </React.Fragment>
                        )
                }
        }
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
                <li className={`page-item first ${current === 1 ? "disabled" : ""}`}>
                    <a className="page-link" href="/#" onClick={ () => pageChange(1) }>First</a>
                </li>
                <li className={`page-item previous ${current === 1 ? "disabled" : ""}`}>
                    <a className="page-link" href="/#" onClick={ () => paginationPrevious() } aria-label="Previous">
                        <span aria-hidden="true"><FontAwesomeIcon icon="chevron-left" /></span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                { getPaginationNumberButtons() }
                <li className={`page-item next ${current === total ? "disabled" : ""}`}>
                    <a className="page-link" href="/#" onClick={ () => paginationNext() } aria-label="Next">
                        <span aria-hidden="true"><FontAwesomeIcon icon="chevron-right"  /></span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
                <li className={`page-item last ${current === total ? "disabled" : ""}`}>
                    <a className="page-link" href="/#" onClick={ () => pageChange(total) }>Last</a>
                </li>
            </ul>
        </nav>
    )
}