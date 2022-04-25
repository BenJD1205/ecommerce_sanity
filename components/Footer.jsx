import React from 'react'
import {AiFillInstagram,AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
      </p>  
    </div>
  )
}

export default Footer