import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import './Header.css'

export default function Header() {

  const responsiveNav = useRef()

  function responsiveNavFunc() {
    responsiveNav.current.classList.toggle("responsiveNav")
  }

  return(
    <>
    <div className="header">
        <Link to="/" className='site-title'>Sense of Essence</Link>

        <div className="ul" ref={responsiveNav}>
          <Link to='/samplings'>Sampling</Link>
          <Link to='/new'>New</Link>
          <Link to='/trending'>Trending</Link>
        <button className="close" onClick={responsiveNavFunc}>
          <FaTimes />
        </button>
        </div>

      <button className='open'  onClick={responsiveNavFunc}>
        <IoMenu />
      </button>

    </div>
    </>
  )
}