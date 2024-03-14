import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {

  return(
    <nav className="nav">
      <a href="/" className='site-title'>Sense of Essence</a>

      <ul>
        <li><Link to='/samplings'>Sampling</Link></li>
        <li><Link to='/new'>New</Link></li>
        <li><Link to='/trending'>Trending</Link></li>
      </ul>
    </nav>
  )
}