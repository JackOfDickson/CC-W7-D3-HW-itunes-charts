import React, {useState, useEffect} from "react";
import SongList from "../components/SongList";

const MusicChartBox = () => {

    useEffect(() => {
        fetchSongs()
    })

    const [songs, setSongs] = useState("")

    const fetchSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => setSongs(data.feed.entry))
    }

    return (
    <>
        <h1>TOP 20 SONGS!!!</h1>
        <SongList/>
    </>
    )
}

export default MusicChartBox