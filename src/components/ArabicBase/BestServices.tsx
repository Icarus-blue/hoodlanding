const BestServices: React.FC = () => {
    return (
        <div className='px-[5vw] py-[4vh] flex flex-col md:flex-row w-full gap-[4vw] '>
            <img src="/image/topographic1.png" alt="" className='absolute top-0 left-0  w-[25vw]'/>
            <div className='w-full md:w-[50%]'>
                <p className='text-[2vw] md:text-[1.6vw] lg:text-[1.4vw] text-[rgba(0,0,0,0.4)] capitalize my-2'>لماذا تختارنا</p>
                <p className='text-[4.2vw] md:text-[3.8vw] font-medium my-2'>افضل الخدمات المقدمة من هودي</p>
                <p className='text-[2.2vw] md:text-[1.7vw] text-[rgba(0,0,0,0.4)] font-medium my-[2vh]'>مهمتنا في هودي لنجعل كل الخدمات من حولك في متناول اليد و ايجاد منصة لمنافسة مقدمي الخدمات لارضاء العميل ليجد الخدمة والسعر المناسب</p>
                <button className='bg-[#232323] rounded-full px-[3vw] py-[1vh] text-white text-[2.2vw] md:text-[1.7vw]'>المزيد</button>
            </div>
            <div className="grid-box text-[2.2vw] md:text-[1.7vw] h-[80vw] md:h-[35vw]">
                <div className="cleaning-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">تنظيف</div>
                <div className="ac-div bg-[#9EE970] rounded-md flex items-center justify-center text-center">تصليح وتركيب التكييف</div>
                <div className="painting-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">دهانات و اصباغ</div>
                <div className="furniture-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">تصليح المفروشات</div>
                <div className="plumbing-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">سباكة</div>
                <div className="gardening-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">بستنة والزراعة ومتعلقاتها</div>
                <div className="electrical-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">الكهرباء</div>
                <div className="home-ap-div bg-[#9EE970] rounded-md flex items-center justify-center text-center">الاجهزة المنزلية</div>
            </div>

        </div>
    )
}

export default BestServices
