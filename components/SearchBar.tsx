"use client";

import { useState } from "react";

import {SearchManufacturer} from "./";

const SearchBar = () => {
    const [manufacture, setManufacture] = useState('');
    const handleSearch = () => {}
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="serchbar__item">
                <SearchManufacturer
                    manufacture={manufacture}
                    setManufacture={setManufacture}
                />
            </div>
        </form>
    )
}

export default SearchBar