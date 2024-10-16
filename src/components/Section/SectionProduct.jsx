import React from 'react'
import './SectionProduct.scss'
import { HiArrowSmallRight } from "react-icons/hi2";
import img1 from '../../assets/Image 1.png'
import img2 from '../../assets/Image 2.png'
import { useNavigate } from 'react-router-dom';


const Product = [

    {
        img: img1,
        category: 'Web Design',
        name: 'Pepper Website made in Framer'
    },
    {
        img: img2,
        category: 'Web Design',
        name: 'BrightSites Website made in Framer'
    }


]
const SectionProduct = () => {

    const navigate = useNavigate()
    const handleProductDetail = () => {
        navigate('/ProductDetail')
    }
    return (
        <div className='Section_Product'>
            <div className='Nav_Product'>
                <div className='Title_Product'>
                    <span>
                        Product
                    </span>
                </div>
                <div
                    className='Router_Product'
                    onClick={handleProductDetail}
                >
                    <span>Xem Thêm</span>
                    <HiArrowSmallRight />
                </div>
            </div>
            <div className='Box_Product'>
                {
                    Product.map((item, index) => {
                        return (
                            <div key={`item - ${index}`} className='Item_Product'>
                                <div className='Img_Product'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='Content_Product'>
                                    <div className='Category_Product'>
                                        <span>{item.category}</span>
                                    </div>
                                    <div className='Name_Product'>
                                        <span>{item.name}</span>
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

export default SectionProduct