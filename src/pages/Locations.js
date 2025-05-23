import React, {useState, useEffect, useContext} from "react";
import Pagination from "../components/pagination/Pagination";
import LocationList from "../components/LocationsList";
import Search from "../components/search/Search";
import {ThemeContext} from "../components/themes/ThemeContext";
import API_BASE_URL from "../api/api";

const Locations = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [fetchedData, setFetchedData] = useState({ info: {}, results: [] });
    const { theme } = useContext(ThemeContext);
    const api = `${API_BASE_URL}/locations?page=${pageNumber}&name=${search}`;

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(api);
                const data = await res.json();
                setFetchedData(data);
            } catch (error) {
                console.error("Failed to fetch locations:", error);
                setFetchedData({ info: {}, results: [] });
            }
        })();
    }, [api]);

    const { info, results } = fetchedData;

    return (
        <div className="container mt-4" data-bs-theme={theme}>
            <h1 className="text-center mb-4">Locations</h1>
            <Search setSearch={setSearch} updatePageNumber={setPageNumber} />
            <div className="row">
                <LocationList results={results} />
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={setPageNumber}
            />
        </div>
    );
};

export default Locations;
