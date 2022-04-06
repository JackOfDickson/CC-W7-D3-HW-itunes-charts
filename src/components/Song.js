import React from "react";

const Song = ({song}) => {

    return (
        <div>
            <li>{song.title.label}</li>

        </div>
    )
}

export default Song