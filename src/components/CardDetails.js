import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE_URL from "../api/api";

const CardDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/characters/${id}`);
                const data = await res.json();
                setCharacter(data);
            } catch (err) {
                console.error("Failed to fetch character details:", err);
            }
        };
        fetchCharacter();
    }, [id]);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case "alive": return "text-success";
            case "dead": return "text-danger";
            default: return "text-info";
        }
    };

    const handlePrevious = () => {
        const prevId = parseInt(id) - 1;
        if (prevId < 1) {
            navigate("/826"); // Assume 826 is the last character ID in Rick and Morty
        } else {
            navigate(`/${prevId}`);
        }
    };

    const handleNext = () => {
        const nextId = parseInt(id) + 1;
        if (nextId > 826) {
            navigate("/1"); // Go to first character if next exceeds
        } else {
            navigate(`/${nextId}`);
        }
    };

    if (!character) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
                <img src={character.image} alt={character.name} className="card-img-top rounded" />
                <div className="card-body text-center">
                    <h2 className="card-title">{character.name}</h2>
                    <ul className="list-group list-group-flush mt-3 text-start">
                        <li className="list-group-item">
                            <strong>Status:</strong>{" "}
                            <span className={getStatusColor(character.status)}>
                                {character.status}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Species:</strong> {character.species}
                        </li>
                        <li className="list-group-item">
                            <strong>Gender:</strong> {character.gender}
                        </li>
                        <li className="list-group-item">
                            <strong>Location:</strong> {character.location?.name}
                        </li>
                        <li className="list-group-item">
                            <strong>Origin:</strong> {character.origin?.name}
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="mt-4 d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handlePrevious}>
                            Previous
                        </button>
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
