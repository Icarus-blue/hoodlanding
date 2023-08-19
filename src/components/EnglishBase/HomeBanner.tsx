import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SaudiArabiaFlag from '../../assets/flag'


const HomeBanner: React.FC = () => {
        const [mobileNav, setMobileNav] = useState(false)
        const [changeLanguage, setChangeLanguage] = useState(false)
        const [language, setLanguage] = useState("English");
        const navigate = useNavigate()
        useEffect(() => {
                language === "English" ? navigate('/') : navigate('/ar')
        }, [language])
        return (
                <div className='rounded-md w-full text-white bg-[#232323] px-[5vw] py-5 relative'>
                        <img src="/image/texture1.png" alt="" className="w-full h-full absolute  top-0 left-0" />
                        <img src="/image/phone1.png" alt="" className="w-[20vw] absolute  bottom-0 right-[28vw]" />
                        <img src="/image/phone2.png" alt="" className="w-[20vw] absolute  bottom-0 right-[5vw]" />
                        <div className='flex flex-row justify-between items-center relative p-[1vw] rounded-full text-white z-50'>
                                {mobileNav && (
                                        <div className="block md:hidden absolute top-[110%] right-0 rounded-md  bg-[#232323] p-[2vw] w-[70vw]">
                                                {changeLanguage && (
                                                        <div className='flex md:hidden rounded-md absolute bg-[#232323] flex-col px-4 py-2 gap-2 top-[110%] right-[10vw] w-[40vw] md:w-[20vw]'>
                                                                <button className='flex flex-row items-end justify-end' onClick={() => setChangeLanguage(false)}>
                                                                        <span>&times;</span>
                                                                </button>
                                                                <button onClick={() => {
                                                                        setChangeLanguage(false)
                                                                        setLanguage("العربية")
                                                                }} className="flex hover:bg-slate-800 duration-200 flex-row gap-3 items-center p-2 rounded-md">
                                                                        <SaudiArabiaFlag />
                                                                        <span className='font-medium'>العربية</span>
                                                                </button>
                                                                <button onClick={() => {
                                                                        setChangeLanguage(false)
                                                                        setLanguage("English")
                                                                }} className="flex hover:bg-slate-800 duration-200 flex-row gap-3 items-center p-2 rounded-md">
                                                                        <img className='h-6 w-6' src="/image/usa.png" alt="United States English" />
                                                                        <span className='font-medium'>English</span>
                                                                </button>
                                                        </div>)}
                                                <div className="flex flex-col gap-2 px-4 text-sm w-full">
                                                        <div className="flex flex-row justify-between">
                                                                <div></div>
                                                                <button onClick={() => setMobileNav(false)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 h-5 fill-white'>
                                                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                        <Link to={"#"}>About us</Link>
                                                        <Link to={"#"}>Blog</Link>
                                                        <Link to={"#"}>Contact us</Link>
                                                        <div className='flex flex-row  items-center  justify-between '>
                                                                <button className="flex flex-row gap-3 items-center  py-[0.8vh]  px-[2vw]" onClick={() => setChangeLanguage(true)}>
                                                                        {language === "English" ? <img src="/image/usa.png" className='h-6 w-6' alt="United States English" /> : <SaudiArabiaFlag />}
                                                                        <span className='font-medium'>{language}</span>
                                                                </button>
                                                                <Link to={"/become-provider"} className='text-black font-medium bg-[#9EE970] py-[0.8vh]  px-[2vw]  rounded-full'>Become a Provider</Link>
                                                        </div>
                                                </div>
                                        </div>
                                )}
                                <div className="hidden md:flex flex-row gap-4 text-xs lg:text-base">
                                        <Link to={"#"}>About us</Link>
                                        <Link to={"#"}>Blog</Link>
                                        <Link to={"#"}>Contact us</Link>
                                </div>
                                <Link to={'/'}>
                                        <img src='/svg/logo.svg' alt='logo' className='w-[10vw]' />
                                </Link>
                                <div className='hidden md:flex flex-row gap-3 items-center text-[10px] sm:text-base   '>
                                        {changeLanguage && (
                                                <div className='hidden md:flex rounded-md absolute bg-[#232323] flex-col px-4 py-2 gap-2 top-[110%] right-[10vw] w-[20vw]'>
                                                        <button className='flex flex-row items-end justify-end' onClick={() => setChangeLanguage(false)}>
                                                                <span>&times;</span>
                                                        </button>
                                                        <button onClick={() => {
                                                                setChangeLanguage(false)
                                                                setLanguage("العربية")
                                                        }} className="flex hover:bg-slate-800 duration-200 flex-row gap-3 items-center p-2 rounded-md">
                                                                <SaudiArabiaFlag />
                                                                <span className='font-medium'>العربية</span>
                                                        </button>
                                                        <button onClick={() => {
                                                                setChangeLanguage(false)
                                                                setLanguage("English")
                                                        }} className="flex hover:bg-slate-800 duration-200 flex-row gap-3 items-center p-2 rounded-md">
                                                                <img className='h-6 w-6' src="/image/usa.png" alt="United States English" />
                                                                <span className='font-medium'>English</span>
                                                        </button>
                                                </div>
                                        )}
                                        <div className="flex flex-row gap-3 items-center p-3 border border-[#000000] hover:border rounded-md transition-all  relative" onClick={() => setChangeLanguage(true)}>
                                                {language === "English" ? <img src="/image/usa.png" className='h-6 w-6' alt="United States English" /> : <SaudiArabiaFlag />}
                                                <span className='font-medium'>{language}</span>
                                        </div>
                                        <Link to={"/become-provider"} className='text-black font-medium bg-[#9EE970] py-4  px-5 rounded-full'>Become a Provider</Link>
                                </div>
                                <button className="block md:hidden" onClick={() => setMobileNav(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                        </svg>
                                </button>
                        </div>
                        <div className='my-[4vh] w-[45%]'>
                                <p className='text-[5vw] z-10'>Get your work done with <span className='text-[rgba(255,255,255,0.5)]'>Hoode</span></p>
                                <p className='font-medium  z-10 text-[rgba(255,255,255,0.4)] text-[1.7vw]'>Use hoode now to connect to your local service provider at the click of a button, and the price is your choice!</p>
                                <div className="flex flex-row items-center gap-3 my-[2vh]">
                                        <Link to={'https://play.google.com/store/apps/details?id=com.hooodiieee'} className="flex z-10 hover:cursor-pointer flex-row items-center gap-3 bg-white text-black px-[2vw] py-[0.6vh] rounded-full">
                                                <img src="/svg/playstore.svg" alt="Playstore" className="w-[1.5vw]" />
                                                <p className='font-medium text-[1.7vw]'>Google Play</p>
                                        </Link>
                                        <Link to={'https://apps.apple.com/sa/app/hoode-your-place-services/id6451319360'} className="flex z-10 flex-row items-center gap-3 bg-[rgba(255,255,255,0.1)] px-[2vw] py-[0.6vh] rounded-full">
                                                <img src="/svg/apple.svg" alt="App Store" className="w-[1.5vw]" />
                                                <p className='font-medium text-[1.7vw]'>App Store</p>
                                        </Link>
                                </div>
                        </div>
                        <div className="flex flex-row items-center w-[50%] justify-around">
                                <div>
                                        <p className='text-[4vw] font-bold'>1k+</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Happy Customer</p>
                                </div>
                                <div>
                                        <p className='text-[4vw] font-bold'>6+</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Total Services</p>
                                </div>
                                <div>
                                        <p className='text-[4vw] font-bold'>1+</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Years of Experience</p>
                                </div>
                        </div>
                </div>
        )
}

export default HomeBanner