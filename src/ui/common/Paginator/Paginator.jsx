import React from 'react';
import Button from '@material-ui/core/Button';

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let leftPortionPageNumber = (props.portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = props.portionNumber * props.portionSize;

    const incrementPage = () => {
        props.nextPortion(props.portionNumber + 1)
    }
    const decrementPage = () => {
        props.prevPortion(props.portionNumber - 1)
    }

    const setFirstPage = () => {
        props.firstPortion(1)
    }


    return (
        <div>
            {props.portionNumber > 1 &&
            <>
                <Button color="secondary" onClick={setFirstPage}>first</Button>
                <Button color="secondary" onClick={decrementPage}>Prev</Button>
            </>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <Button
                        key={p}
                        onClick={() => {
                            props.onPageChanged(p);
                        }}>{p}</Button>
                })}
            {portionCount > props.portionNumber &&
            <Button color="secondary" onClick={incrementPage}>Next</Button>}
        </div>
    )
}


export default Paginator;

