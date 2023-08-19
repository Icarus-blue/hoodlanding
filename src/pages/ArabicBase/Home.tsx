import HomeBanner from '../../components/ArabicBase/HomeBanner'
import BestServices from '../../components/ArabicBase/BestServices'
import Connecting from '../../components/ArabicBase/Connecting'
import Bid from '../../components/ArabicBase/Bid'
import Unlock from '../../components/ArabicBase/Unlock'
import Corporate from '../../components/ArabicBase/Corporate'
import Testimonials from '../../components/ArabicBase/Testimonials'
import Optimize from '../../components/ArabicBase/Optimize'
import Footer from '../../components/ArabicBase/Footer'
import {Helmet} from "react-helmet"

const HomeArabic: React.FC = () => {
    return (
        <div className='w-full h-full overflow-x-hidden p-[1.2vw]'>
            <Helmet>
                <title>Hoode | Home</title>
            </Helmet>
            <HomeBanner/>
            <BestServices/>
            <Connecting/>
            <Bid/>
            <Unlock/>
            <Corporate/>
            <Testimonials/>
            <Optimize/>
            <Footer/>
        </div>
    )
}

export default HomeArabic
