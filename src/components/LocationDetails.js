import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import API_BASE_URL from "../api/api";

const LocationDetails = () => {
    const { id } = useParams();
    const [location, setLocation] = useState({});
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/locations/${id}`);
                const data = await res.json();
                setLocation(data);

                const characters = await Promise.all(
                    data.residents.map((url) => fetch(url).then(res => res.json()))
                );
                setResidents(characters);
            } catch (err) {
                console.error("Error fetching location:", err);
            }
        };

        fetchLocation();
    }, [id]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-3">{location.name}</h1>
            <p className="text-center mb-4">Type: {location.type} | Dimension: {location.dimension}</p>

            <div className="row">
                {residents.map((char) => (
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

export default LocationDetails;
