import React, { Component } from 'react';

import MusicItem from './MusicItem';



const options = {
    headers: {
        Authorization: "Bearer BQBET-g_w6JqnrMKwamsnF4ccrKs42kIJaeTS0byUMK7t6otPASropoUmikzKEveNgllokirzTfWw31MF24ATPFSimhRSx6d3mNNHE14aUQaRRtc7GA2JzKFGDRmf5esFIU-mr3FLgpOLhZlPEyWeEJ47Xs4U24dux3YeeADxTes1Tk4dgtl_frrAd0GHKacUfSHDFHhWsa2UfejeYkSkjK_0MNlWuMyeRaV_VkD2dwE32oNucFAq-vbLHQQLPx3bUgSkFolwGJY7DPAJrkm437_Y1w7Zhe8"
    }
};
class Search extends Component {
    state = {
        search: "",
        data: [],
        color: ["red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue", "red", "blue"],
        isLoading:true
    }
    handleArtist = (event) => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
}

    handleSubmit = (event) => {
        fetch(`https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`, options)
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            // this.setState({ data: this.state.data.push(json.artists) });
            // console.log(typeof(json.artists))
            const newArr = json.artists
            console.log(`newArr:`, newArr)
            
            this.setState({ data: newArr }, () => console.log("test", this.state.data));
            this.setState({ data:this.state.data.items  }, () => {

                console.log(`data:`, this.state.data)
                this.setState({ isLoading:!this.state.isLoading  });
         

        })
            
          })
    

  

        event.preventDefault();
    }
    // handleClear = (event) => {
    //     this.setState({ search: "" });
    //     event.preventDefault();
    // }
      
  deleteArtist = (id) => {
    console.log(id)
    const newData = this.state.data.filter(elt => elt.id !== id)
    this.setState({ data: newData  });
  }

              
render() {
    return (
        <div>
            <form action="">
                <input id="text" type="text" placeholder='Search for an artist....' onChange={this.handleArtist} />

                <input id="bot1" type="button" value="SEARCH" onClick={this.handleSubmit} />
{/* 
                <input id="bot1" type="button" value="CLEAR SEARCH" onClick={this.handleClear} /> */}
            </form>
            <div className="grid1">
{this.state.isLoading?'loading':this.state.data.map((elt, i) =>
                <MusicItem
                    key={i}
                    images={elt.images}
                    name={elt.name}
                    popularity={elt.popularity}
                    id={elt.id}
                    color={this.state.color[i]}
                    deleteArtist={this.deleteArtist}
           
      
                />)}

            
        </div>
        </div>
    );
}
}

export default Search;