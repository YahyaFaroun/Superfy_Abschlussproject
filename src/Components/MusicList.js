import React, { Component } from 'react';
import MusicItem from './MusicItem';


const url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6%2C3fMbdgg4jU18AjLCKBhRSm%2C6tbjWDEIzxoDsBA1FuhfPW%2C5pKCCKE2ajJHZ9KAiaK11H%2C2QsynagSdAqZj3U9HgDzjD%2C3qm84nBOXUEQ2vnTfUTTFC%2C27T030eWyCQRmDyuvr1kxY%2C58lV9VcRSjABbAbfWS6skp%2C3WrFJ7ztbogyGnTHbHJFl2%2C22bE4uQ6baNwSHPVcDxLCe"
const options = {
  headers: {
    Authorization: "Bearer BQBJbrKPXE5hKFKDJYr6ohBiDHbOhAnisL8PNsgaNxKPuNpSh5Xr0ngdDHtH6Q6lVXhxTPzqtGEBdQkV6zQqV7M3TeDNZv-RHL9b-7-oAFnjPVl1wKN3EbWmhg42fSD-IQIXRjj0RdiVDdzXJ6g3DnOxDoAR4Oa5RyfqviBRvDBdILWzPFABBJv9FaH2JwI4p-U-rstdasnlloBZWoVF0uH05rm2xG4kp6ErD16EQ3OYtDNm4kKoFnUDrO4UbbW3gPyiNm_P-WwYoOC6l9skWGroMojrfeAz"
  }
};

class MusicList extends Component {
  state = {
    data: [],
    color: ["red", "blue", "green", "green", "red", "blue", "red", "blue", "green", "green", "red", "blue"],
    fromAtoZ: true,
    descending: true
  }
  
    componentDidMount() {
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ data: json.artists });
        console.log(this.state.data)
      })
    }
  
  handleColor = () => {
    console.log(this.state.color)
    const num = Math.floor(Math.random() * 3); 
    console.log(num)
    if (num==0) {
      this.state.color="red"
    } else {
      this.state.color="blue"
    }
  }
  handleSort = () => {
    if (this.state.fromAtoZ) {
        const newData = this.state.data.slice()
        newData.sort((elt1, elt2) => {
            let a = elt1.name.toUpperCase()
            let b = elt2.name.toUpperCase()
            if (a < b) {
                return -1
            } else if (a > b) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({ data: newData });
        this.setState({ fromAtoZ: !this.state.fromAtoZ });
    } else {
        const newData = this.state.data.slice()
        newData.sort((elt1, elt2) => {
            let a = elt1.name.toUpperCase()
            let b = elt2.name.toUpperCase()
            if (a < b) {
                return 1
            } else if (a > b) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({ data: newData });
        this.setState({ fromAtoZ: !this.state.fromAtoZ });
    }
  }
  handlePopularity = () => {
if (this.state.descending) {
  const newData = this.state.data.sort((a, b) => {
    return b.popularity - a.popularity
})
  this.setState({ data: newData });
  this.setState({ descending: !this.state.descending  });
  console.log(this.state.data)
  
} else {
  const newData = this.state.data.sort((a, b) => {
    return a.popularity - b.popularity
})
  this.setState({ data: newData });
  this.setState({ descending: !this.state.descending  });
console.log(this.state.data)
}
  }
  
  deleteArtist = (id) => {
    console.log(id)
    const newData = this.state.data.filter(elt => elt.id !== id)
    this.setState({ data: newData  });
  }


  render() { 
    return ( 
      <main>
        <input type="button" value="Sort by name" onClick={this.handleSort}/>
        <input type="button" value="Sort by popularity" onClick={this.handlePopularity}/>
        <div className="grid1">
            {this.state.data.map((elt, i) =>
                <MusicItem
                    key={i}
                    images={elt.images}
                    name={elt.name}
                    popularity={elt.popularity}
                    id={elt.id}
                    color={this.state.color[i]}
                    deleteArtist={this.deleteArtist}
           
      
                />
            
            
            
            )}
            
        </div>
        </main>
     );
  }
}
 
export default MusicList;