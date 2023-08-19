import {Helmet} from "react-helmet"
import BecomeBanner from "../components/EnglishBase/BecomeBanner"
import LiveWorld from "../components/EnglishBase/LiveWorld"
import HowItWorks from "../components/EnglishBase/HowItWorks"
import Testimonials from "../components/EnglishBase/Testimonials"
import Footer from "../components/EnglishBase/Footer"
import { Link } from "react-router-dom"

const BecomeProvider = () => {
    return (
        <div className='w-full h-full overflow-x-hidden'>
            <Helmet>
                <title>Hoode | Become Provider</title>
            </Helmet>
            <BecomeBanner/>
            <LiveWorld/>
            <HowItWorks/>
            <Testimonials/>
            <div className='w-full py-[4vh] '>
                <div className='rounded-md w-full text-black bg-[#9EE970] px-[4vw] py-[4.5vw] relative'>
                    <img src="/image/phone6.png" alt="" className='absolute  bottom-0 w-[33vw] right-[12vw]'/>
                    <img src="/image/phone5.png" alt="" className='absolute  bottom-0 w-[33vw] right-[25vw]'/>
                    <div className="w-[100%] flex flex-row justify-between">
                        <div className='w-[50%]'>
                            <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium my-[2vh]'>You Offer
                                <br/>We provide</p>
                            <div className="flex flex-row gap-5 my-[1vh]">
                                <Link to={'https://play.google.com/store/apps/details?id=com.shoodie'}>
                                    <img src="/image/playstore.png" alt="Playstore" className='w-[15vw] md:w-[12vw]'/>
                                </Link>
                                <Link to={'https://apps.apple.com/app/hoode-provider/id6451393055'}>
                                    <img src="/image/appstore.png" alt="App Store" className='w-[15vw] md:w-[12vw]'/>
                                </Link>
                            </div>
                        </div>
                        <div className='w-[50%]'></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BecomeProvider
