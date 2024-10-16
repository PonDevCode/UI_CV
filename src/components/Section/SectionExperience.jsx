import React from 'react'
import './SectionExperience.scss'
import icon from '../../assets/iconExperience.png'

const Experience = [
    {
        img: 'mm',
        name: `Freelance Web Designer`,
        adress: 'XYZ Creative Agency, 2015 - 2019'
    },
    {
        img: 'mm',
        name: `Freelance Web Designer`,
        adress: 'XYZ Creative Agency, 2015 - 2019'
    },
    {
        img: 'mm',
        name: `Freelance Web Designer`,
        adress: 'XYZ Creative Agency, 2015 - 2019'
    },
]

const SectionExperience = () => {
    return (
        <div className='Box_Experience'>
            <div className='Title_Experience'>
                <span>
                    Experience
                </span>
            </div>
            <div className='Content_Experience'>

                {
                    Experience.map((item, index) => {
                        return (
                            <div key={`item - ${index}`} className='Item_Experience'>
                                <div className='Box_img'>
                                    <div className='Img_Experience'>
                                        <img src={icon} alt="" srcSet='' />
                                    </div>
                                </div>
                                <div className='Info_Experience'>
                                    <div className='Name_Experience'>
                                        <span>
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className='Adress_Experience'>
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

export default SectionExperience