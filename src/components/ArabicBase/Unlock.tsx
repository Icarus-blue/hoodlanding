import { Link } from "react-router-dom"


const Unlock = () => {
        return (
                <div className='flex justify-center items-center py-[10vw] flex-col relative'>
                        <img src="/image/top3.png" alt="" className='absolute top-0 left-0  w-[25vw]' />
                        <p className='text-[3.5vw] font-medium'>استكشف خدمة المنازل الان</p>
                        <p className='text-[3.5vw] font-medium'>حمل التطبيق لتبدا</p>
                        <p className='text-[rgba(0,0,0,0.4)] font-medium text-[2.2vw] md:text-[1.7vw]'>نريد جعل خطوات تخليص خدمات المنزل سهلة، امنة، وشفافة للجميع</p>
                        <div className="flex flex-row gap-5 my-[1vh]">
                                <Link to={'https://play.google.com/store/apps/details?id=com.hooodiieee'}>
                                        <img src="/image/playstore.png" alt="Playstore" className='w-[15vw] md:w-[12vw]' />
                                </Link>
                                <Link to={'https://apps.apple.com/sa/app/hoode-your-place-services/id6451319360'}>
                                        <img src="/image/appstore.png" alt="Playstore" className='w-[15vw] md:w-[12vw]' />
                                </Link>
                        </div>
                </div>
        )
}

export default Unlock