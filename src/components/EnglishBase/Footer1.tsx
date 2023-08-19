
import { Link } from 'react-router-dom'

const Footer1 = () => {
        return (
                <div className='w-full  '>
                        <div className="flex flex-row px-[4vw] py-[4.5vw]">
                                <div className='w-[45%]'>
                                        <img src='/image/logo.png' alt='logo' className='w-[15vw]' />
                                        <p className='text-[2.2vw] md:text-[1.8vw] font-medium text-[rgba(0,0,0,0.4)] my-4'>Get your work done on fingertips</p>
                                </div>
                                <div className='flex flex-row justify-around w-[55%] text-[1.9vw] md:text-[1.4vw]'>
                                        <div className='flex flex-col gap-[1vw]'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"https://www.linkedin.com/company/hoode/"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                        <div className='flex flex-col gap-[1vw]'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"https://www.linkedin.com/company/hoode/"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                        <div className='flex flex-col gap-[1vw]'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"#"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"https://www.linkedin.com/company/hoode/nus"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                </div>
                        </div>
                        <div className="w-full h-1 bg-[rgba(0,0,0,0.1)] rounded-md" />
                        <div className="flex flex-row justify-between items-center px-[4vw] py-[2vw] text-[2.2vw] md:text-[1.7vw]">
                                <div className="flex flex-row gap-3 items-center font-medium">
                                        <p>&copy;{new Date().getFullYear()} Hoode</p>
                                        <p className='text-[rgba(0,0,0,0.4)]'>All rights reserved</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center text-[rgba(0,0,0,0.4)] font-medium">
                                        <Link to={"/become-provider/terms-conditions-new"}>Terms conditions and Privacy Policies</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Footer1