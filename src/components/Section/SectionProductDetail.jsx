import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import './SectionProductDetail.scss'
import imgA from '../../assets/image A.png'
import imgB from '../../assets/image B.png'
import { useNavigate } from 'react-router';
const SectionProductDetail = () => {
    const navigate = useNavigate()
    const handleGoHome = () =>{
        navigate('/')
    }
    return (
        <div className='Box_Product_Detail'>
            <div className='Product_Detail'>
                <div 
                className='GoHome_ProductDetail'
                onClick={handleGoHome}
                >
                    <GoArrowLeft /> Quay lại
                </div>
                <div className='Title_ProductDetail'>
                    <span>
                        BrightSites Website made in Framer
                    </span>
                </div>
                <div className='Img_ProductDetail'>
                    <div className='ImgClone_ProductDetail'>
                        <img src={imgA} alt="" />
                    </div>
                    <div className='ImgClone_ProductDetail'>
                        <img src={imgB} alt="" />
                    </div>
                </div>
                <div className='Text_ProductDetail'>
                    <span>
                        My Approach
                        Reify is meticulously designed to serve as a cutting-edge template for financial projects, offering a versatile and comprehensive solution. Whether you're a seasoned developer or a novice designer, Reify simplifies the process of building modern, intuitive financial applications. Every aspect of this template has been carefully crafted to ensure a seamless development experience, allowing you to focus on bringing your financial vision to life.
                        Vision and Innovation
                        At the core of Reify is a commitment to driving innovation in financial web design. Our vision is to create a template that not only meets the highest standards of modern web development but also introduces new possibilities. With 3D elements, sophisticated animation effects, and custom cursors, Reify delivers an immersive, engaging user experience that stands out in the financial sector.
                        Identifying Unique Challenges
                        We understand the unique challenges faced by financial startups and businesses. From ensuring accessibility (A11y Optimized) to maintaining high performance and SEO standards, Reify is designed to address these challenges effectively. Our template provides a robust foundation, allowing you to tackle these complexities with confidence.
                        Resolving Complex Problems
                        Reify is equipped with features that resolve common and complex web design problems. The integration of scroll sections and sticky scrolling enhances navigation, making it intuitive and user-friendly. Our SEO and performance optimizations ensure your site loads quickly and ranks well in search engines, while overlays and responsive design guarantee a seamless experience across all devices.
                        User-Centric Design
                        Our user-centric design approach ensures that every element of Reify is optimized for the best possible user experience. From the homepage to the 404 error page, each component is designed to engage and inform. The use of web fonts and color styles creates a visually appealing aesthetic, while animation effects and 3D elements add interactive features that captivate users.
                        Meeting User Needs
                        Reify is built to meet the diverse needs of financial website users. Whether they are seeking information about your services, reading detailed financial reports, or contacting your business, Reify provides a seamless, intuitive experience. The ticker feature keeps users updated with the latest financial news, while custom cursors and link styles add a modern touch.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SectionProductDetail