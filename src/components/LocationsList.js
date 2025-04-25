import React from "react";
import { Link } from "react-router-dom";

const LocationList = ({ results }) => {
    if (!results || results.length === 0) {
        return <div className="text-center">No Locations Found</div>;
    }

    return (
        <>
            {results.map((location) => (
                <div key={location.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card p-3 shadow">
                            <h5>{location.name}</h5>
                            <p>Type: {location.type}</p>
                            <p>Dimension: {location.dimension}</p>
                            <Link to={`/locations/${location.id}`} className="btn btn-primary">
                                More Info
                            </Link>
                        </div>
                </div>
            ))}
        </>
    );
};

export default LocationList;
