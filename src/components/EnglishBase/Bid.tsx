const Bid = () => {
    return (
        <div className='w-full py-[12vh]'>
            <div className='rounded-md w-full text-white bg-[#232323] px-[4vw] py-[4.5vw] relative'>
                <img src="/image/texture2.png" alt="" className='absolute  top-0 left-0  w-full h-full'/>
                <img src="/image/phone3.png" alt="" className='absolute  -top-[13vw] w-[45vw]'/>
                <div className="w-[100%] flex flex-row justify-between">
                    <div className='w-[50%] relative '></div>
                    <div className='w-[50%]'>
                        <p className="text-[rgba(255,255,255,0.4)] uppercase font-medium my-[2vh] text-[2vw] md:text-[1.6vw] lg:text-[1.4vw]">our overview</p>
                        <p className=' text-[4vw] md:text-[3.8vw] font-medium my-[2vh]'>Simply receive bids and your home is expertly served</p>
                        <p className='font-medium text-[rgba(255,255,255,0.4)] my-[2vh] text-[2.2vw] md:text-[1.7vw]'>Choose the price that suits the job and wait for the provider to be at your doorsteps with a click of a button</p>
                        <button className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bid
