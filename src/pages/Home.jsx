import { Link } from 'react-router-dom';

import beersImage from '../assets/beers.png'
import newBeerImage from '../assets/new-beer.png'
import randomBeerImage from '../assets/random-beer.png'


function Home() {
  return (
    <div>

      <div className='allbeers'>
        <img src={beersImage} alt="all-beers" />
        <h2><Link to="/beers">All Beers</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna tellus, imperdiet eget metus a, lacinia laoreet purus. Ut et mi purus. Nullam risus ligula, semper at interdum ac, pellentesque in felis. </p>
      </div>

      <div className='randombeer'>
        <img src={randomBeerImage} alt="random-beer" />
        <h2><Link to="/random-beer">Random Beer</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat est. Mauris sollicitudin egestas porttitor. Nullam iaculis sollicitudin nibh, at dictum enim lacinia eu.</p>
      </div>

      <div className='newbeer'>
        <img src={newBeerImage} alt="new-beer" />
        <h2><Link to="/new-beer">New Beer</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu viverra diam. Fusce at vulputate enim, a viverra metus. Nullam odio tortor, eleifend nec convallis ac, ultricies at lorem.</p>
      </div>
    </div>
  )
}

export default Home