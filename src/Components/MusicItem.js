import React, { Component } from 'react';
import { SpotifyApiContext } from 'react-spotify-api';

class MusicItem extends Component {
    state = { 
        data: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    }
    render() { 
        return (<div>
    
        </div > 
        );
    }
}
 
export default MusicItem;