import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ results }) => {
    if (!results || results.length === 0) {
        return <p className="text-center">No characters found.</p>;
    }

    return results.map((character) => (
        <div key={character.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
                <img
                    src={character.image}
                    className="card-img-top"
                    alt={character.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Status: {character.status}</p>
                    <Link to={`/${character.id}`} className="btn btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    ));
};

export default Cards;
