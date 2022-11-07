import { Link } from 'react-router-dom';

import homeImage from "../assets/home.png"

function Header() {
  return (
    <div>
        <Link to={'/'}><img src={homeImage} alt="" /> </Link>

    </div>
  )
}

export default Header