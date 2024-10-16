import React from 'react'
import './SectionEducation.scss'
import icon from '../../assets/IconEducation.png'

const Education = [
    {
        img: 'mm',
        name: `Bachelor's Degree in Web Design and Development`,
        adress: 'XYZ University, 2010'
    },
    {
        img: 'mm',
        name: `Bachelor's Degree in Web Design and Development`,
        adress: 'XYZ University, 2010'
    },
    {
        img: 'mm',
        name: `Bachelor's Degree in Web Design and Development`,
        adress: 'XYZ University, 2010'
    },
]

const SectionEducation = () => {
    return (
        <div className='Box_Education'>
            <div className='Title_Education'>
                <span>
                    Education
                </span>
            </div>
            <div className='Content_Education'>

                {
                    Education.map((item, index) => {
                        return (
                            <div key={`item - ${index}`} className='Item_Education'>
                                <div className='Box_img'>
                                    <div className='Img_Education'>
                                        <img src={icon} alt="" srcSet='' />
                                    </div>
                                </div>
                                <div className='Info_Education'>
                                    <div className='Name_Education'>
                                        <span>
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className='Adress_Education'>
                                        <span>
                                            {item.adress}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default SectionEducation