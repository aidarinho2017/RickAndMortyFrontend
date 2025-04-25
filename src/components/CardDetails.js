import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(`http://localhost:8080/characters/${id}`);
                const data = await res.json();
                setCharacter(data);
            } catch (err) {
                console.error("Failed to fetch character details:", err);
            }
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mt-4">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} className="img-fluid" />
            <ul className="mt-3">
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Location: {character.location?.name}</li>
                <li>Origin: {character.origin?.name}</li>
            </ul>
        </div>
    );
};

export default CardDetails;
