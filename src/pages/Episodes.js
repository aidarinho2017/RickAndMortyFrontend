import React, {useContext, useEffect, useState} from "react";
import EpisodesList from "../components/EpisodesList";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";
import {ThemeContext} from "../components/themes/ThemeContext";
import API_BASE_URL from "../api/api";

const Episodes = () => {
    const [pageNumber, updatePageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [fetchedData, updateFetchedData] = useState({ info: {}, results: [] });
    const { theme } = useContext(ThemeContext);

    const api = `${API_BASE_URL}/episodes?page=${pageNumber}&name=${search}`;

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(api);
                const data = await res.json();
                updateFetchedData(data);
            } catch (err) {
                console.error("Error fetching episodes:", err);
                updateFetchedData({ info: {}, results: [] }); // fallback
            }
        })();
    }, [api]);

    const { info, results } = fetchedData;

    return (
        <div className="container mt-4" data-bs-theme={theme}>
            <h1 className="text-center mb-4">Episodes</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <EpisodesList episodes={results} />
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
            />
        </div>
    );
};

export default Episodes;
