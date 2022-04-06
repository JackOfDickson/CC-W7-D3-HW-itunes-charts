import React from "react";

const Song = ({song, position}) => {

    return (
        <li className='song-item'>
            <h2>{position}</h2>
            <p>{song.title.label}</p>
            <img src={song['im:image'][2].label}/>
        </li>
    )
}

export default Song