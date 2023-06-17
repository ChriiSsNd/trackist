import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const data = {
    type: "text",
    placeholder: "Search favorite music",
    maxLength: "68",
}

function SearchBar(props) {

    return (
        <div className="w-full bg-white">
            <form action="#" className="shadow-md rounded-md px-4 py-2 border border-gray-100 h-10 flex">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-gray-400 mr-2 align-middle" />
                <input
                    type={data.type}
                    maxLength={data.maxLength}
                    placeholder={data.placeholder}
                    className="w-full bg-transparent outline-none placeholder:text-sm placeholder:italic placeholder:font-normal text-gray-600 font-medium caret-gray-600"
                />
            </form>
        </div>
    );

}

export default SearchBar;
