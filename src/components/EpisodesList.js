import React from "react";
import { Link } from "react-router-dom";

const EpisodesList = ({ episodes }) => {
    return (
        <div className="row">
            {episodes?.map((episode) => (
                <div className="col-12 col-md-6 mb-3" key={episode.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5>{episode.name}</h5>
                            <p>Air Date: {episode.air_date}</p>
                            <Link to={`/episodes/${episode.id}`} className="btn btn-primary">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EpisodesList;
