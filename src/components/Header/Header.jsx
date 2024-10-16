import React from 'react'
import './Header.scss'
import avt from '../../assets/avt.png'
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { HiArrowSmallRight } from "react-icons/hi2";
import SimpleSlider from './Slider';

const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className='Header_Box'>
                    <div className='Header_Img'>
                        <img src={avt} alt="" />
                    </div>
                    <div className='Header_Info'>
                        <div className='Info_Nav'>
                            <div className='Nav_Left'>
                                <span>UIUX Designer & Mobile Developer</span>
                            </div>
                            <div className='Nav_Right'>
                                <div className='Icon_Nav'><CiTwitter /></div>
                                <div className='Icon_Nav'><CiInstagram /></div>
                                <div className='Icon_Nav'><CiInstagram /></div>
                                <div className='Icon_Nav'><CiInstagram /></div>
                            </div>
                        </div>
                        <div className='Info_User'>
                            <div className='User_Name'>
                                <span>
                                    LÊ ĐÌNH TIẾN
                                </span>
                            </div>
                            <div className='User_Content'>
                                <span>
                                    Không chỉ là một nhà thiết kế và nhà phát triển di động,
                                    mà còn là người tạo ra những trang web và ứng dụng di động đẹp,
                                    trải nghiệm... tốt. Với sự kết hợp của nghệ thuật và kỹ thuật 
                                    
                                </span>
                            </div>
                        </div>
                        <div className='User_Adress'>
                            <div className='Adress'>
                                <MdOutlineAddLocationAlt />
                                <span>
                                    Quận 7, TP Hồ Chí Minh
                                </span>
                            </div>
                            <div className='Adress_Router'>
                                <span>Xem thêm</span> 
                                <HiArrowSmallRight />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='Header_Nav'>
                        <SimpleSlider />
                </div>

            </div>
        </>
    )
}

export default Header