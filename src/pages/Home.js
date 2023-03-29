import React from 'react'
import Layout from '../component/Layout/Layout'
import img from '../images/mainimg.jpeg'
import {Link} from "react-router-dom"
const home = () => {
  return (
    <div>
      <Layout/>
      <div className='Home'>
        <div className='homeitem'>
            <div><h4 className='hometitle'>Discover your taste</h4></div>
            <div><h1 className='homesub'>Eat healthy and Natural Food</h1></div>
            <div className='btn'>

            <Link to={"/Menu"}>Discover Menu</Link>
              
            </div>
            </div>
            <div className='Homeimg'>
              <img src={img} width="700rem" height="500rem"></img>
            </div>
      </div>
    </div>
  )
}

export default home
