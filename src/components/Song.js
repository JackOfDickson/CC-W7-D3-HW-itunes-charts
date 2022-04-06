import React from "react";

const Song = ({song}) => {

    return (
        <li>
            <p>{song.title.label}</p>
            <img src={song['im:image'][2].label}/>
        </li>
    )
}

export default Song