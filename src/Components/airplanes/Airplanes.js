import React, {useEffect, useState} from 'react';

import Airplane from "../airplane/Airplane";

const Airplanes = () => {

    const [airplane, setAirplane] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((value) => value.json())
            .then(value => setAirplane(value))
    },[]);

    return (

        <div>
            {
                airplane.map(value => value.launch_year !== "2020" ? <Airplane key={value.mission_name} airplane={value}/> : '')
            }
        </div>
    );
};

export default Airplanes;