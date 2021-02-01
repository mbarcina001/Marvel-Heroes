import React from 'react';
import './Paginator.scss';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import PaginatorContext from 'context/PaginatorContext';

export default function Paginator() {
    fontawesome.library.add(faChevronLeft);
    fontawesome.library.add(faChevronRight);

    const { current, total} = useContext(PaginatorContext)

    function paginationFirst() {
        // TODO
    };

    function paginationPrevious() {
        // TODO
    };

    function paginationPage(page) {
        // TODO
    };

    function paginationNext() {
        // TODO
    };

    function paginationLast() {
        // TODO
    };

    function getPaginationNumberButtons() {
        console.log(current);
        console.log(total);
        switch (Number(current)) {
            case 1:
                return (
                    <React.Fragment>
                        <li className="page-item active page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current)) }>{ Number(current) }</a>
                        </li>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) + 1) }>{ Number(current) + 1 }</a>
                        </li>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) + 2) }>{ Number(current) + 2 }</a>
                        </li>
                    </React.Fragment>
                );
            case total:
                return (
                    <React.Fragment>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) - 2) }>{ Number(current) - 2 }</a>
                        </li>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) - 1) }>{ Number(current) - 1 }</a>
                        </li>
                        <li className="page-item active page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current)) }>{ Number(current) }</a>
                        </li>
                    </React.Fragment>
                )
            default:
                return (
                    <React.Fragment>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) - 1) }>{ Number(current) - 1 }</a>
                        </li>
                        <li className="page-item active page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current)) }>{ Number(current) }</a>
                        </li>
                        <li className="page-item page">
                            <a className="page-link" href="/#" onClick={ () => paginationPage(Number(current) + 1) }>{ Number(current) + 1 }</a>
                        </li>
                    </React.Fragment>
                )
        }
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
                <li className="page-item first disabled">
                    <a className="page-link" href="/#" onClick={ () => paginationFirst() }>First</a>
                </li>
                <li className="page-item previous disabled">
                    <a className="page-link" href="/#" onClick={ () => paginationPrevious() } aria-label="Previous">
                        <span aria-hidden="true"><FontAwesomeIcon icon="chevron-left" /></span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                { getPaginationNumberButtons() }
                <li className="page-item next">
                    <a className="page-link" href="/#" onClick={ () => paginationNext() } aria-label="Next">
                        <span aria-hidden="true"><FontAwesomeIcon icon="chevron-right"  /></span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
                <li className="page-item last">
                    <a className="page-link" href="/#" onClick={ () => paginationLast() }>Last</a>
                </li>
            </ul>
        </nav>
    )
}