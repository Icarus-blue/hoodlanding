import { Link } from "react-router-dom"

const HowItWorks = () => {
    return (
        <div className='w-full py-5 px-[6vw]'>
            <div className="text-center">
                <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>How It Works?</p>
                <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>we want to make easy process of hiring for home services,<br/>
                    safe, secure and transparent for all</p>
            </div>
            <div className="w-[70vw] mx-auto">
            <div className="flex justify-between items-center gap-[5vw] w-[60vw] my-[4vw]">
                <div className="w-[50%]">
                    <div className="py-8">

                        <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>Setup Account</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>We want to make easy process of hiring for home services,<br/>
                            safe, secure and transparent for all</p>
                    </div>
                    <Link to={'/become-provider'} className='bg-[#9EE970] rounded-full px-[3vw] py-[1vh] text-black text-[2.3vw] md:text-[2vw] lg:text-[1.7vw]'>Become a provider</Link>
                </div>
                <div className="w-[50%]">
                    <img src="/image/how1.png" alt="" className="w-[40vw]"/>
                </div>
            </div>
            <div className="flex justify-between md:ml-[14em] items-center gap-[5vw]  my-[4vw]">
                <div className="w-[50%]">
                    <img src="/image/how2.png" alt="" className="w-[40vw]"/>
                </div>
                <div className="w-[50%]">
                    <div className="py-8">
                        <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>Easy to find work</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>we want to make easy process of hiring for home services, safe, secure and transparent for all</p>
                    </div>
                    <Link to={'/become-provider'} className='bg-[#9EE970] rounded-full px-[3vw] py-[1vh] text-black text-[2.3vw] md:text-[2vw] lg:text-[1.7vw]'>Become a provider</Link>
                </div>
            </div>
            <div className="flex justify-between items-center gap-[5vw] w-[60vw] my-[4vw]">
                <div className="w-[50%]">
                    <div className="py-8">
                        <p className='text-[4.5vw] md:text-[4vw] lg::text-[3.5vw] font-medium'>Submit bid</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>we want to make easy process of hiring for home services, safe, secure and transparent for all</p>
                    </div>
                    <Link to={'/become-provider'} className='bg-[#9EE970] rounded-full px-[3vw] py-[1vh] text-black text-[2.3vw] md:text-[2vw] lg:text-[1.7vw]'>Become a provider</Link>
                </div>
                <div className="w-[50%]">
                    <img src="/image/how3.png" alt="" className="w-[40vw]"/>
                </div>
            </div>
            <div className="flex justify-between md:ml-[14em] items-center gap-[5vw]  my-[4vw]">
                <div className="w-[50%]">
                    <img src="/image/how2.png" alt="" className="w-[40vw]"/>
                </div>
                <div className="w-[50%]">
                    <div className="py-8">

                        <p className='text-[4.5vw] md:text-[4vw] lg::text-[3.5vw] font-medium'>Win projects</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>we want to make easy process of hiring for home services, safe, secure and transparent for all</p>
                    </div>
                    <Link to={'/become-provider'} className='bg-[#9EE970] rounded-full px-[3vw] py-[1vh] text-black text-[2.3vw] md:text-[2vw] lg:text-[1.7vw]'>Become a provider</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HowItWorks
