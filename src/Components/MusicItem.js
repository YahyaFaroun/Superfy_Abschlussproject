import React from 'react';


const MusicItem = (props) => {
    return (
        <div>
            <img src={props.images[0].url} alt="" />
            <h1>Artist: {props.name}</h1>
            <p>Popularity: {props.popularity}</p>
        </div>
      );
}
 
export default MusicItem;