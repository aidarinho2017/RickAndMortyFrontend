import React, {useState, useEffect, useContext} from "react";
import Pagination from "../components/pagination/Pagination";
import Cards from "../components/Cards";
import Search from "../components/search/Search";
import Filter from "../components/filter/Filter";
import {ThemeContext} from "../components/themes/ThemeContext";
import API_BASE_URL from "../api/api";

const Home = () => {
    const [pageNumber, updatePageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [fetchedData, updateFetchedData] = useState({ info: {}, results: [] });
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const { theme } = useContext(ThemeContext);


    const api = `${API_BASE_URL}/characters?page=${pageNumber}&name=${search}&gender=${gender}&species=${species}&status=${status}`;

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
        <div className="container mt-4" data-bs-theme={theme}>
            <h1 className="text-center mb-4">Characters</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <Filter
                setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}
                updatePageNumber={updatePageNumber}
            />

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
