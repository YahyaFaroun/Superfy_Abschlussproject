import React, { Component } from 'react';


import MusicItem from './MusicItem';



const options = {
    headers: {
        Authorization: "Bearer BQB3ViBCyJYh9hJxT6Ry1FKxl43TzBt-rmp3UdhekFR8QE5pS6InhdgS1XuNoCGj4_L6Sn1O5ZaYzzcs3Mm0N8Wbyd6scr2jiTzeHR4a6P26ZMRRJYe8Op5fhaZa8m18CWNo2d6rUkVGYo3xx7XWuK5zu3gJDNwMdemz3xPB9kujNGwbt4hzoOfCa6iG2V7wMMNYCAtJ2Vvwrhza43-BMWFIEhKJSmn93auBmUK_aYLqY05U3iFjweZbCs-leBF7hR4NApeTeHXPWCuzhNnFqFk2MUMbmHaF"
    }
};
class Search extends Component {
    state = {
        search: "",
        data: [],
        color: ["red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue", "red", "blue"],
        isLoading: true
    }
    handleArtist = (event) => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
    }

    handleSubmit = (event) => {
        fetch(`https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`, options)
            .then(res => res.json())
            .then(json => {
                const newArr = json.artists
                console.log(`newArr:`, newArr)

                this.setState({ data: newArr }, () => console.log("test", this.state.data));
                this.setState({ data: this.state.data.items }, () => {

                    console.log(`data:`, this.state.data)
                    this.setState({ isLoading: !this.state.isLoading });


                })

            })




        event.preventDefault();
    }
    handleClear = (event) => {
        this.setState({ search: "" });
        window.location.reload(false)
        event.preventDefault();
    }

    deleteArtist = (id) => {
        console.log(id)
        const newData = this.state.data.filter(elt => elt.id !== id)
        this.setState({ data: newData });
    }


    render() {
        return (
            <div>
                <article className="search">
                    <form className="in" action="">
                        <input id="input" type="text" placeholder='Search for an artist....' onChange={this.handleArtist} />
                        <input className='butt' type="button" value="SEARCH" onClick={this.handleSubmit} />
                        <input className="butt_clear" type="button" value="CLEAR" onClick={this.handleClear} />
                    </form>
                </article>
                <div className="grid1">
                    {this.state.isLoading ? '' : this.state.data.map((elt, i) =>
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