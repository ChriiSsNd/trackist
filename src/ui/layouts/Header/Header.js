import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

function Header(props) {
    return (
        <div>
            <h1>Trackist</h1>
            <SearchBar dataSearch={props.onSearch} searchValue={props.search}/>
        </div>
    );
}

export default Header;