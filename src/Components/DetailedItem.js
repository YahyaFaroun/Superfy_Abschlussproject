import React from 'react';

const DetailedItem = (props) => {
    return (

        <article>
            <div className="container_albums">
                <img src={props.images[0].url} alt="" />
                <div className="overlay">
                    <a href={props.external_urls.spotify} className="text">Play Now</a>
                </div>
           

            </div>



        </article>

    );
}

export default DetailedItem;