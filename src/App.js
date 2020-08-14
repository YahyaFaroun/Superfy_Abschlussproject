import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import MusicList from './Components/MusicList';

      


const App = () => {
  return ( 
      <div>
      <Header />
      <MusicList />
      <Footer />
    </div>
   );
}
 
export default App;


// const url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6"
// const options = {
//   headers: {
//     Authorization: "Bearer BQDl3W7HzYkPBu7wVZg28E6LFA33D5OHFaAdQeu9TGqnor9bxRMhQz14_iLlV6uMc7763agLvFSGuat1H4Re_XRWcIFdPL_ocNhzsyBg6qByVFq19ViirN5DPldSjbsJj-B7Zg9Yaij7ehe_v90qKEsA920wkxrqUppXwDMT-rQpYphloLzPv5qg6RiwaYHhAGFhKEqDqM4GxqgZr8HG0NqZLFPUmHvr0VJoVzx_JdekcpIRunve0jPZ3WKKufb7oyMUAd0aOfY9QunD28lNbEWLLrqeiiAl"
//   }
// };

// class App extends Component {
//   state = {

//   }
  
//     componentDidMount() {
//     fetch(url, options)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         // this.setState({ data: json });
//         // console.log(this.state.data)
//       })
//   }

//   render() { 
//     return ( 
//       <div>

//         <Footer />
//       </div>
//      );
//   }
// }
 
// export default App;

// const url = "https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj";

// const options = {
//   headers: {
//     Authorization: "Bearer BQActX6IfEgVtsZnvD-k4Pzz1p9pzqg5xdMbZ1K0IZN9mWgqefXX2zRb8Y3TJGHUjaHvlwOObIKnL72Uyb1iSUP0rIBtX788O5YrloBZ1XkiCW_7K01Mo7bDaAOaFXRjKpTAKbjcxKoyRmRwyc5oTl2Z5opKMyHGvUcuWhnLc9NfkgLr3O9kOjyIfV3HtqQsj8ziBX7kPlvtejjnhSueIxTOlLclLPskjhO8E1JhrzSRfO4rMp0Tv9-DbJ_SE4HHxZ2SQoorNEQffP-s4Pc1-psBrcnufbET"
//   }
// };

// class App extends Component {
//   state = {
// data: {}
//   }
//   componentDidMount() {
//     fetch(url, options)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         this.setState({ data: json });
//         console.log(this.state.data)
//       })
//   }
//   render() {
//     return (
//       <div>
//         {this.state.data.name}
//       </div>
//     );
//   }
// }

// export default App;


