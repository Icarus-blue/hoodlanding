import HomeBanner from '../components/EnglishBase/HomeBanner'
import BestServices from '../components/EnglishBase/BestServices'
import Connecting from '../components/EnglishBase/Connecting'
import Bid from '../components/EnglishBase/Bid'
import Unlock from '../components/EnglishBase/Unlock'
import Corporate from '../components/EnglishBase/Corporate'
import Testimonials from '../components/EnglishBase/Testimonials'
import Optimize from '../components/EnglishBase/Optimize'
import Footer from '../components/EnglishBase/Footer'
import {Helmet} from "react-helmet"

const Home: React.FC = () => {
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

export default Home
