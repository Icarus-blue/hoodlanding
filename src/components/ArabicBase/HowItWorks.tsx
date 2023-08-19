import { Link } from "react-router-dom"

const HowItWorks = () => {
    return (
        <div className='w-full py-5 px-[6vw]'>
            <div className="text-center">
                <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>كيف يعمل؟</p>
                <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'> حمل التطبيق الان لاستقبال جميع الطلبات المتعلقه بمجالك</p>
            </div>
            <div className="w-[70vw] mx-auto">
            <div className="flex justify-between items-center gap-[5vw] w-[60vw] my-[4vw]">
                <div className="w-[50%]">
                    <div className="py-8">

                        <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>انشاء الحساب</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>بامكانك انشاء حساب خلال وقت قصير</p>
                    </div>
                    <Link to={'/ar/become-provider'} className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>المزيد</Link>
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
                        <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium'>سرعة ايجاد الاعمال</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>بامكانك إيجاد اعمال بشكل سريع من خلال هودي</p>
                    </div>
                    <Link to={'/ar/become-provider'} className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>المزيد</Link>
                </div>
            </div>
            <div className="flex justify-between items-center gap-[5vw] w-[60vw] my-[4vw]">
                <div className="w-[50%]">
                    <div className="py-8">
                        <p className='text-[4.5vw] md:text-[4vw] lg::text-[3.5vw] font-medium'>إرسال مزايدة على الخدمة</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'> ضع السعر المناسب للخدمة وانتظر الموافقة من المستخدم </p>
                    </div>
                    <Link to={'/ar/become-provider'} className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>المزيد</Link>
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
                        <p className='text-[4.5vw] md:text-[4vw] lg::text-[3.5vw] font-medium'>إنتصر على منافسينك</p>
                        <p className='text-[2.4vw] md:text-[2vw] lg:text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>بوضعك سعر منافس وتقديم جودة متميزة بامكانك الاستحواذ على العملاء من حولك</p>
                    </div>
                    <Link to={'/ar/become-provider'} className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[2.2vw] md:text-[1.7vw]'>المزيد</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HowItWorks
