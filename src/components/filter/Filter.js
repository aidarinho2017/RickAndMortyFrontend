import React from "react";

const Filter = ({ setGender, setSpecies, setStatus, updatePageNumber }) => {
    const handleChange = (setter) => (e) => {
        setter(e.target.value);
        updatePageNumber(1);
    };

    return (
        <div className="d-flex gap-3 flex-wrap justify-content-center mb-4">
            <select className="form-select w-auto" onChange={handleChange(setGender)}>
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            <select className="form-select w-auto" onChange={handleChange(setSpecies)}>
                <option value="">All Species</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
                <option value="humanoid">Humanoid</option>
                <option value="poopybutthole">Poopybutthole</option>
                <option value="robot">Robot</option>
                <option value="mythological">Mythological</option>
                <option value="animal">Animal</option>
                <option value="disease">Disease</option>
                <option value="cronenberg">Cronenberg</option>
                <option value="planet">Planet</option>
                <option value="unknown">Unknown</option>
            </select>

            <select className="form-select w-auto" onChange={handleChange(setStatus)}>
                <option value="">All Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
};

export default Filter;
