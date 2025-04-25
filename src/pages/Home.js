import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";
import Cards from "../components/Cards";
import Search from "../components/search/Search";

const Home = () => {
    const [pageNumber, updatePageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [fetchedData, updateFetchedData] = useState({ info: {}, results: [] });

    const api = `http://localhost:8080/characters?page=${pageNumber}&name=${search}`;

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(api);
                const data = await res.json();
                updateFetchedData(data);
            } catch (err) {
                console.error("Error fetching data:", err);
                updateFetchedData({ info: {}, results: [] }); // fallback to empty on error
            }
        })();
    }, [api]);

    const { info, results } = fetchedData;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Characters</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="row">
                <Cards results={results} page="/" />
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
            />
        </div>
    );
};

export default Home;
