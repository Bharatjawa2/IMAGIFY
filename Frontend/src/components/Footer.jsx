import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <div className='flex gap-2.5 ml-auto mr-4 cursor-pointer'>
        <a href="https://x.com/bharat_jaw91783" target='_blank'>
            <img src={assets.twitter_icon} width={35} />
        </a>

        <a href="https://www.instagram.com/bharat_jawa_" target='_blank'>
            <img src={assets.instagram_icon} width={35}/>
        </a>
        </div>
    </div>
  )
}

export default Footer