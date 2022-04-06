import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (
            <Song song={song} key={index}/>
        )
    })

    return (
    <div>
        <h2>The list</h2>
        {songItems}
    </div>
    )
}


export default SongList