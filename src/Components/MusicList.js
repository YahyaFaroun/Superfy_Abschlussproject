import React, { Component } from 'react';
// import MusicItem from './MusicItem';


const url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6%2C3fMbdgg4jU18AjLCKBhRSm%2C6tbjWDEIzxoDsBA1FuhfPW%2C5pKCCKE2ajJHZ9KAiaK11H%2C2QsynagSdAqZj3U9HgDzjD%2C3qm84nBOXUEQ2vnTfUTTFC%2C27T030eWyCQRmDyuvr1kxY%2C58lV9VcRSjABbAbfWS6skp%2C3WrFJ7ztbogyGnTHbHJFl2%2C22bE4uQ6baNwSHPVcDxLCe"
const options = {
  headers: {
    Authorization: "Bearer BQDl3W7HzYkPBu7wVZg28E6LFA33D5OHFaAdQeu9TGqnor9bxRMhQz14_iLlV6uMc7763agLvFSGuat1H4Re_XRWcIFdPL_ocNhzsyBg6qByVFq19ViirN5DPldSjbsJj-B7Zg9Yaij7ehe_v90qKEsA920wkxrqUppXwDMT-rQpYphloLzPv5qg6RiwaYHhAGFhKEqDqM4GxqgZr8HG0NqZLFPUmHvr0VJoVzx_JdekcpIRunve0jPZ3WKKufb7oyMUAd0aOfY9QunD28lNbEWLLrqeiiAl"
  }
};

class MusicList extends Component {
  state = {
data: []
  }
  
    componentDidMount() {
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ data: json.artists });
        console.log(json)
      })
  }

  render() { 
    return ( 
        <div className="grid">
            {/* {this.state.data.map((elt, i) =>
                <MusicItem
                    key={i}
                    images={elt.images}
                    name={elt.name}
                    popularity={elt.popularity}
                />
            
            
            
            )} */}
            
      </div>
     );
  }
}
 
export default MusicList;