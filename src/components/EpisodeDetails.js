import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import API_BASE_URL from "../api/api";
const EpisodeDetails = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState({});
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchEpisode = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/episodes/${id}`);
                const data = await res.json();
                setEpisode(data);

                // Fetch all characters in parallel
                const characterData = await Promise.all(
                    data.characters.map((url) => fetch(url).then((res) => res.json()))
                );
                setCharacters(characterData);
            } catch (err) {
                console.error("Error fetching episode or characters:", err);
            }
        };

        fetchEpisode();
    }, [id]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">{episode.name}</h1>
            <p className="text-center">Air date: {episode.air_date}</p>

            <div className="row">
                {characters.map((char) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={char.id}>
                        <Link to={`/${char.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100">
                                <img src={char.image} className="card-img-top" alt={char.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{char.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodeDetails;
