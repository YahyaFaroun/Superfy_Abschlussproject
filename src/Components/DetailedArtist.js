import React, { Component } from 'react';
import './DetailedArticle.css';
import DetailedItem from './DetailedItem';


let data

let offset = Math.floor(Math.random() * 31);




const options = {
    headers: {
        Authorization: "Bearer BQBtNHAhiqe9Y2itCykdbTEVQI17_-NdeLJ3XlSVigANGCTTOiyQRcrZ_YdLrsj1izCKBYP2xzOBqKiUyUYkX_6Aoh3eMRnpjKzo8aCwCdUAHiqM_HBjpFtx91gTJ4jqiowxyERYoxKmXWapRv9asBroHUM6xpnGKDVOwiAKSuH9-63X2cYE5WChn9Y9wv4OPIlEFtklqnWuMKH_Wj1t8CK_U66dn7taVaPOOPIKi8-FQVcKP32S8EkBAbqCnke-tsy41UENrVuHxJTHUuHes5sdbvnYjlxp"
    }
};

class DetailedArtist extends Component {
    state = {
        dataDetails: [],

        isLoaded: false
    }

    componentDidMount() {
        fetch(`https://api.spotify.com/v1/artists/${this.props.match.params.id}/albums?offset=${offset}&limit=6&market=DE`, options)
            .then(res => res.json())
            .then(json => {
                let newArr = []
                newArr.push(json.items)
                console.log(json)
                console.log(newArr)

                this.setState({ dataDetails: newArr }, () => {
                    console.log(this.state.dataDetails)

                    data = this.state.dataDetails[0].map((elem, i) =>
                        //    <div className="albums">
                        //     <article>
                        //         <div className="container" key={i}>
                        //             <img src={elem.images[0].url} alt="" />
                        //             <div className="overlay">
                        //             <a href={elem.external_urls.spotify} className="text">Play Now</a>
                        //             </div>


                        //         </div>



                        //     </article>
                        // </div>

                        <DetailedItem
                            key={i}
                            images={elem.images}
                            external_urls={elem.external_urls}
                        />


                    )

                    this.setState({ isLoaded: true });
                })

            })
    }
    handleClear = (event) => {
        this.setState({ search: "" });
        window.location.reload(false)
        event.preventDefault();
    }
    render() {
        return (
            <div className="albums">

                <input className="butt_random" type="button" value="RANDOM" onClick={this.handleClear} />
                {this.state.isLoaded ? data : 'Is loading'}
            </div>
        );
    }
}

export default DetailedArtist;