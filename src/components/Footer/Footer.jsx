import React from 'react'
import './Footer.scss'
import imgFT1 from '../../assets/imgFT-1.png'
import imgFT2 from '../../assets/imgFT-2.png'
import imgFT3 from '../../assets/imgFT-3.png'
import imgFT4 from '../../assets/imgFT-4.png'
import imgFT5 from '../../assets/imgFT-5.png'


const Footer = () => {
  return (
    <div className='Footer_Container'>
      <div className='Box_Footer'>
        <div className='Footer_Nav active'>
          <img src={imgFT1} alt="" />

        </div>
        <div className='Footer_Nav'>
          <img src={imgFT2} alt="" />


        </div>
        <div className='Footer_Nav'>
          <img src={imgFT3} alt="" />


        </div>
        <div className='Footer_Nav'>

          <img src={imgFT4} alt="" />

        </div>
        <div className='Footer_Nav'>

          <img src={imgFT5} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Footer