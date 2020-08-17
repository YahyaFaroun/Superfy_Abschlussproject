import React, { Component } from 'react';

let data

let offset = Math.floor(Math.random() * 21); 



// const url = 'https://api.spotify.com/v1/artists/${this.props.id}'

const options = {
  headers: {
    Authorization: "Bearer BQDUwLgYqwZh6WGlUCrhS0VLJurqeHV7HzEjXOJYmBHmTMTD2wTgoR8QozvuWnyXqKDCEzabBGBDDkvBDL65WIIUAsU_ZxHFUv6BNUCeVZwo4zD8OERmdkIT0iS0tH5mA-k2b97qglMN0henpVhHJC959AtJ1tPKD14uPVENoxrPy4yGjJlqlVR0Sa3tZOt6QolzICDLF0f0AOETQ_OxvNAYVKoxL3y5sH0xePzRKzwOYQiCdN3vGF6a348FZBiIRNh3c_La2pjPjvyI_jUaSlSDqBRAF4G9"
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