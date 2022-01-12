import React from 'react';

import './airplane scc.css'

const Airplane = (props) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = props.airplane;
    console.log(props.airplane)
    return (
        <div className={'airplane'}>
            <h2>{mission_name} {launch_year}</h2>
            <img src={mission_patch_small} alt=""/>
        </div>
    );
};

export default Airplane;