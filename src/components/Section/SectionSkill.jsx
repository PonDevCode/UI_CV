import React from 'react'
import './SectionSkill.scss'
import { HiArrowSmallRight } from "react-icons/hi2";
import icon from '../../assets/Image.png'

const Skill = [
  {
    img: 'icon',
    name: 'framer',
    description: 'web desig'
  },
  {
    img: 'img.png',
    name: 'framer',
    description: 'web desig'
  },
  {
    img: 'img.png',
    name: 'framer',
    description: 'web desig'
  },
  {
    img: 'img.png',
    name: 'framer',
    description: 'web desig'
  },
  {
    img: 'img.png',
    name: 'framer',
    description: 'web desig'
  },
  {
    img: 'img.png',
    name: 'framer',
    description: 'web desig'
  }
]
const SectionSkill = () => {
  return (
    <div className='Section_Skill'>
      <div className='Header_Skill'>
        <div className='Title_Skill'>
          <span>
            Tool & Skill
          </span>
        </div>
        <div className='Router_Skill'>
          <span>Xem thêm</span>
          <HiArrowSmallRight />
        </div>
      </div>
      <div className='Box_Skill'>
        {
          Skill.map((item, index) => {
            return (
              <div key={`item - ${index}`} className='Box'>
                <div className='Img_Box'>
                  <img src={icon} alt="" srcSet="" />
                </div>
                <div className='Content_Box'>
                  <div className='Title_Box'>
                    {item.name}
                  </div>
                  <div className='Description_Box'>
                    {item.description}
                  </div>
                </div>

              </div>)
          })

        }

      </div>

    </div>
  )
}

export default SectionSkill