import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-f.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <img src={LogoTitle} alt="developer" />
          errand
          <br />
          web developer
        </h1>
        <h2>FrontEnd Developer / JavaScript and Python </h2>
        <Link to="/contact" className="flat-button">
          {' '}
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
