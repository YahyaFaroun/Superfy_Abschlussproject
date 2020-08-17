import React from 'react';

const DetailedItem = (props) => {
    return ( 

                        <article>
                            <div className="container">
                                <img src={props.images[0].url} alt="" />
                                <div className="overlay">
                                <a href={props.external_urls.spotify} className="text">Play Now</a>
                                </div>
                            {/* <a href={elem.external_urls.spotify}>   <img src={elem.images[0].url} alt="" /></a> */}
               
                            </div>
        
    
                     
                        </article>
                  
     );
}
 
export default DetailedItem;