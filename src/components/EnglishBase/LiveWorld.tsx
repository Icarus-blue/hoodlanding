
const LiveWorld = () => {
        return (
                <div className='px-[5vw] py-12 relative w-full'>
                        <div className='w-[70%]'>
                                <p className='text-[3.8vw] font-medium my-[1vh]'>We live in a word of multitasking where everyone needs fast service</p>
                                <p className='text-[2.3vw] md:text-[1.7vw] text-[rgba(0,0,0,0.4)] font-medium my-[1vh]'>we want to make easy process of hiring for home services, safe, secure and transparent for all</p>
                                <button className='bg-[#9EE970] rounded-full px-[3vw] py-[1vh] text-black text-[2.3vw] md:text-[1.7vw]'>Become a provider</button>
                        </div>
                        <div className="my-[2vh] flex flex-row w-[76vw] mx-auto gap-[4vw] justify-between">
                                <div className="pt-[7vh] md:pt-[15vh]">
                                        <img src="/image/person2.png" alt="" />
                                </div>
                                <div className="pb-[7vh] md:pb-[15vh]">
                                        <img src="/image/person1.png" alt="" />
                                </div>
                        </div>
                </div>
        )
}

export default LiveWorld