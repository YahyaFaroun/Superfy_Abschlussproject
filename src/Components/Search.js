import React, { Component } from 'react';

import MusicItem from './MusicItem';



const options = {
    headers: {
        Authorization: "Bearer BQDt4KTA5Ll-7ESz5EHs6nrO6DN5tqHl99dD0FKWEjRtUoMSdS0cdTiyvZ123dxYJ-XeY4TaLFE_eWWb_CLHYYJfXjVCbILczc71ZIOFIfU4pVU_3HbGP_a8_mfJHmBEc2v9rhVvYHwI6F3IMNuFXIMrWUluWweLfmk4pXejtGjO7Qu9yJP-kT-hOm27uav7dRa2SI-QMqzvNohdek1JJfWqXDzTV8F4CnqrVFfvSr72pNpCYb9zQncGDmLdSdlCSYnNTRMQVdWoR2MYRWoIIyiXpyeT2MFn"
    }
};
class Search extends Component {
    state = {
        q: "",
        search: "",
        data: [],
        color: ["red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue","red", "blue", "green", "green", "red", "blue", "red", "blue"],
    }
    handleArtist = (event) => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
}

    handleSubmit = (event) => {
        this.setState({ q: this.state.search });
        console.log(this.state.q);
        event.preventDefault();
    }
    handleClear = (event) => {
        this.setState({ search: "" });
        this.setState({ q: "" });
        event.preventDefault();
    }
      
  deleteContact = (id) => {
    console.log(id)
    const newData = this.state.data.filter(elt => elt.id !== id)
    this.setState({ data: newData  });
  }

  
        componentDidMount() {
            fetch(`https://api.spotify.com/v1/search?q=${this.state.q}&type=artist`, options)
                .then(res => res.json())
                .then(json => {
                    // console.log(json);
                    this.setState({ data: this.state.data.push(json.artists) });
                    console.log(this.state.data)
                  })
                }
              
render() {
    return (
        <div>
            <form action="">
                <input id="text" type="text" placeholder='Search for an artist....' onChange={this.handleArtist} />

                <input id="bot1" type="button" value="SEARCH" onClick={this.handleSubmit} />

                <input id="bot1" type="button" value="CLEAR SEARCH" onClick={this.handleClear} />
            </form>
            <div className="grid1">
            {this.state.data.map((elt, i) =>
                <MusicItem
                    key={i}
                    images={elt.images}
                    name={elt.name}
                    popularity={elt.popularity}
                    id={elt.id}
                    color={this.state.color[i]}
                    deleteContact={this.deleteContact}
           
      
                />
                
            
            
            
            )}
            
        </div>
        </div>
    );
}
}

export default Search;