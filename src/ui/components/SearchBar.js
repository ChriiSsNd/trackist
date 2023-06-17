import React from "react";

import './SearchBar.css';

const data = {
    type: "search",
    placeholder: "Search",
}

function SearchBar(props) {
    function clickHandler(event) {
        const val = event.target.previousSibling.value;
        props.dataSearch(val);
    }

    return (
        <div>
            <h2>{props.searchValue}</h2>
            <form action="#">
                <input
                    type={data.type}
                    placeholder={data.placeholder}
                />
                <button onClick={clickHandler}>search</button>
            </form>
        </div>
    );

}

export default SearchBar;
