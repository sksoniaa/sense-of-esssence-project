import './Header.css'

export default function Header() {

  return(
    <nav className="nav">
      <a href="/" className='site-title'>Sense of Essence</a>

      <ul>
        <a href='/fragrance'>Fragrance</a>
        <a href='/sampling'>Sampling</a>
        <a href='/new'>New</a>
        <a href='/trending'>Trending</a>
      </ul>


    </nav>
  )
}