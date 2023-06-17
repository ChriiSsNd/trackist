import React from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import Login from "../components/Login";

function Header(props) {
    return (
        <header className="flex justify-between items-center">
            <Logo />
            <div className="flex gap-4 w-1/2">
                <SearchBar dataSearch={props.onSearch} searchValue={props.search} />
                <FilterButton />
            </div>
            <Login />
        </header>
    );
}

export default Header;