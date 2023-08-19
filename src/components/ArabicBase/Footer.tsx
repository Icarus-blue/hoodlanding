import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full  '>
            <div className="flex flex-row px-[4vw] py-[4.5vw]">
                <div className='w-[45%]'>
                    <img src='/image/logo.png' alt='logo' className='w-[15vw]'/>
                    <p className='text-[2.2vw] md:text-[1.8vw] font-medium text-[rgba(0,0,0,0.4)] my-4'>انجز اعمال بيتك بضغطة زر</p>
                </div>
                <div className='flex flex-row justify-around w-[55%] text-[1.9vw] md:text-[1.4vw]'>
                    <div className='flex flex-col gap-[1vw]'>
                        <p className=' font-medium '>الشركة</p>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>من نحن</Link>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>اتصل بنا</Link>
                        <Link to={"https://www.linkedin.com/company/hoode/"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>انضم إلى فريقنا</Link>
                    </div>

                    <div className='flex flex-col gap-[1vw]'>
                        <p className=' font-medium '>الشركة</p>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>من نحن</Link>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>اتصل بنا</Link>
                        <Link to={"https://www.linkedin.com/company/hoode/"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>انضم إلى فريقنا</Link>
                    </div>
                    <div className='flex flex-col gap-[1vw]'>
                        <p className=' font-medium '>الشركة</p>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>من نحن</Link>
                        <Link to={"#"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>اتصل بنا</Link>
                        <Link to={"https://www.linkedin.com/company/hoode/"}
                            className=' font-medium text-[rgba(0,0,0,0.4)]'>انضم إلى فريقنا</Link>
                    </div>

                </div>
            </div>
            <div className="w-full h-1 bg-[rgba(0,0,0,0.1)] rounded-md"/>
            <div className="flex flex-row justify-between items-center px-[4vw] py-[2vw] text-[2.2vw] md:text-[1.7vw]">
                <div className="flex flex-row gap-3 items-center font-medium">
                    <p>&copy;{
                        new Date().getFullYear()
                    }
                    </p>
                    <p className='text-[rgba(0,0,0,0.4)]'>هودي | جميع الحقوق محفوظة</p>
                </div>
                <div className="flex flex-row gap-3 items-center text-[rgba(0,0,0,0.4)] font-medium">
                    <Link to={"/terms-conditions"}>سياسة الاستخدام والخصوصية</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
