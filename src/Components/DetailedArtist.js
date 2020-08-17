import React, { Component } from 'react';

let data



// const url = 'https://api.spotify.com/v1/artists/${this.props.id}'

const options = {
  headers: {
    Authorization: "Bearer BQBOAHnVRW8Sszx6IRUnhv7nIQF5MHT5z2x2TSIqgfujwawSbpdemAIF5ra4bVHCyhkT41urfZfaJ528dtMoKrBnIXEqUCpFR5-JLgbaSrfCJkSIO5RYREWqnOQOCs_EfRZzEERQGnzdmfoCjKODZjc105e5tVEbrDIR3FDdPREQ8wM1AOBPHcEaxLj5fxArJdXxhFKpRo8DaVSe4s35Ml197S8MR4Wq7g7RlMbcfqcP_xVUts1NWOUYNx2hLgBDqdgaX5ANdJqBCieKqUz5NO_eGEYdZDhE"
  }
};

class DetailedArtist extends Component {
    state = { 
        dataDetails: {},
        
        isLoaded: false
    }

    componentDidMount() {
        fetch(`https://api.spotify.com/v1/artists/${this.props.match.params.id}/albums?limit=2`,options)
        .then(res => res.json())
        .then(json => {
            let newArr = []
                newArr.push(json)
                this.setState({ dataDetails: newArr }, () => {
                    data = this.state.dataDetails.map((elem,i) =>
                        <article key={i}>
                            <h2>{elem.items[0].name}</h2>
                            {/* <a href={elem.external_urls}>   <img src={elem.images[0].url} alt="" /></a> */}
        
    
                     
                        </article>
                    )
                    this.setState({ isLoaded: true });
                })
      
        })
    }

    render() { 
        return ( 
            <div>
                   {this.state.isLoaded ? data : 'Is loading'}
            </div>
         );
    }
}
 
export default DetailedArtist;