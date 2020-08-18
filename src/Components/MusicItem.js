import React from 'react';

import {
    Link
} from "react-router-dom";



const MusicItem = (props) => {
    return (
        <div className="music_container">
            <div className={props.color}>
                <Link to={`/artists/${props.id}`}><img src={props.images[0].url} alt="" /></Link>
                <h1 className="artist_name">{props.name}</h1>
                <p className="popularity">Popularity: {props.popularity}</p>
                <button className="delete" onClick={() => props.deleteArtist(props.id)}>delete</button>
            </div>
        </div>
    );
}

export default MusicItem;