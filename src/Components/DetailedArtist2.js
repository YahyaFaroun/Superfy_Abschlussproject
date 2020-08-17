import React, { Component } from 'react';
import './DetailedArticle2.css';


let temporary = [
    {
        popularity: 1,
        name: 'Scream',
        artist: 'Michael Jackson',
        images: 'https://i.scdn.co/image/ab67616d0000b273cde37cfdee48dc0eae1e2ab8',
    }
]


class DetailedArtist2 extends Component {
    state = {temporary:temporary}
    render() { 
        return (
            <section>
                <div>
                    <img src="https://i.scdn.co/image/ab67616d0000b273cde37cfdee48dc0eae1e2ab8" alt=""/>
                    <div>
                        <h2>01. Scream</h2>
                    </div>
                </div>
                <article>
                    <h4>Artist Biography</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, cupiditate magnam. 
                        Obcaecati facilis dicta consequuntur aperiam tempore soluta accusamus, illum voluptatum placeat. 
                        Alias maxime enim mollitia recusandae placeat magni dignissimos pariatur ut officia iusto, quam harum consequuntur voluptas similique ea doloribus inventore! 
                        Sint voluptatem earum voluptate? Ut quisquam, voluptatibus ratione nostrum cupiditate beatae molestiae natus quo dolorem est minus voluptas praesentium 
                        sapiente quae alias ipsum adipisci magnam quaerat eius distinctio amet molestias accusamus fugit minima! Adipisci unde commodi quasi nihil vel ea dolore aliquam, 
                        velit quos nemo atque delectus voluptates inventore at error deleniti. Cum ducimus, at perspiciatis ipsum, id perferendis iste hic expedita aut temporibus quibusdam? 
                        Ab atque ipsam corporis commodi aliquid? Aut excepturi magnam sint! Laborum, corporis! Nam suscipit libero iure aspernatur temporibus qui aut est rem magnam, 
                        assumenda itaque laborum mollitia sint perferendis tempora amet explicabo voluptatum, odit dolore quia eum distinctio? Voluptatum laudantium praesentium est nulla 
                        non incidunt nostrum accusantium exercitationem in quae autem officia vero quidem assumenda, sequi similique placeat ullam ipsum modi suscipit, sit voluptates! 
                        Doloribus officiis omnis at, eos earum illo quisquam vitae amet, consequatur ratione consequuntur excepturi molestias enim assumenda distinctio asperiores. Rem, 
                        voluptas dolorem. Accusantium quo rem minus eveniet quaerat earum.
                    </p>
                </article>
            </section>
          );
    }
}
 
export default DetailedArtist2;