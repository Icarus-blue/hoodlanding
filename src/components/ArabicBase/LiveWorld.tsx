import { Link } from "react-router-dom"

const LiveWorld = () => {
    return (
        <div className='px-[5vw] py-12 relative w-full'>
            <div className='w-[70%]'>
                <p className='text-[3.8vw] font-medium my-[1vh]'>نعيش في زمن تعدد المهام حيث الجميع يريد خدمة سريعة</p>
                <p className='text-[2.3vw] md:text-[1.7vw] text-[rgba(0,0,0,0.4)] font-medium my-[1vh]'>نريد جعل مهمتكم في ايجاد الاعمال سريعة، آمنة، و شفافة</p>
                <Link to={'/ar/become-provider'} className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>المزيد</Link>
            </div>
            <div className="my-[2vh] flex flex-row w-[76vw] mx-auto gap-[4vw] justify-between">
                <div className="pt-[7vh] md:pt-[15vh]">
                    <img src="/image/person2.png" alt=""/>
                </div>
                <div className="pb-[7vh] md:pb-[15vh]">
                    <img src="/image/person1.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LiveWorld
