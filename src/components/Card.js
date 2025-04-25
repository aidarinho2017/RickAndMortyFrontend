import React from "react";
import { Link } from "react-router-dom";

const Card = ({ results = [], page }) => {
    if (!results || results.length === 0) {
        return <p className="text-center">No Characters Found.</p>;
    }

    return results.map((character) => (
        <div key={character.id} className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card">
                <img
                    src={character.image}
                    alt={character.name}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <Link to={`${page}${character.id}`} className="btn btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    ));
};

export default Card;
