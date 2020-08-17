import React, { Component } from 'react';

let data

let offset = Math.floor(Math.random() * 21); 



// const url = 'https://api.spotify.com/v1/artists/${this.props.id}'

const options = {
  headers: {
    Authorization: "Bearer BQD_PcP6XYsOUV9OF8elT5HnHqfAWCRLCAi0Cj2p3nIBOfw_YV03qaImEyqf4N1__cpDnP8y5NtttpSe4JC-DeCmPhx91ZficDCnvbApMiR_-HhUzIWazwP3OQ3v0FBux5eCjAkQ83HomP3r480lqjHG7XENFtJ72tzHXpzeghqrULWHINsT6Ia8wSyJhNy4f_JWjPuOR6EZl1rPsRTmBtTzeyN1aklpMoXeX25x6pAFkJjXmw2aHKm88Gvead_6pdECm3g1UvXtCXKxLB4xd5T4npYfCG81"
  }
};

class DetailedArtist extends Component {
    state = { 
        dataDetails: [],
        
        isLoaded: false
    }

    componentDidMount() {
        fetch(`https://api.spotify.com/v1/artists/${this.props.match.params.id}/albums?offset=${offset}&limit=6&market=DE`,options)
        .then(res => res.json())
        .then(json => {
            let newArr = []
            newArr.push(json.items)
            console.log(json)
            console.log(newArr)
            
            this.setState({ dataDetails: newArr }, () => {
                console.log( this.state.dataDetails)
                data = this.state.dataDetails[0].map((elem, i) =>
                       
                        <article key={i}>
                            <h2>{elem.name}</h2>
                            <a href={elem.external_urls.spotify}>   <img src={elem.images[0].url} alt="" /></a>
                            <h1>{elem.album_type}</h1> 
               
        
    
                     
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