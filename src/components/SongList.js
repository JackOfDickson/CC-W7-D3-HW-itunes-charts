import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (
            <Song song={song} key={index} position={index+1}/>
        )
    })

    return (
    <ol className="top-20-list">
        {songItems}
    </ol>
    )
}


export default SongList