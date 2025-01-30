import React from 'react'
import Image from 'next/image'

const Shopping = () => {
    return (
        <div>
            {/* first side started */}
            <div className='bg-[#F6F5FF] py-10 px-6 md:py-[140px] md:px-[200px]'>
                <h1 className='font-JosefinSans text-[24px] text-[#101750] font-semibold md:text-[29px] text-3xl'>
                    Shopping Page
                </h1>
                <div className='flex flex-wrap gap-2 py-4'>
                    <div>
                        <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Home ,</p>
                    </div>
                    <div>
                        <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Page ,</p>
                    </div>
                    <div>
                        <p className='text-[14px] md:text-[16px] text-[#FB2E86]'>Blog Page</p>
                    </div>
                </div>
            </div>
            {/* first side completed  */}

            {/*second part started  */}
            <div className='h-[1800px] w-full py-[90px] px-[380px]'>
                <div>
                    <Image
                        src="/page sort by.png"
                        alt="Phone Icon"
                        width={1171}
                        height={44}
                        className="max-w-full h-auto"
                    />
                </div>
                {/* second */}
                <div className='flex gap-14 py-[90px]'>
                    <div>
                        <Image
                            src="/Ecommerce accesories.png "
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>

                        {/* c:\Users\wajiz.pk\Downloads\Ecommerce accesories (1).png */}
                        <Image
                            src="/Ecommerce accesories (1).png "
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories.png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories (3).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>


                {/* second shop  */}
                <div className='flex gap-14 py-[90px]'>
                    <div>
                        <Image
                            src="/Ecommerce accesories (7).png "
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>

                        {/* c:\Users\wajiz.pk\Downloads\Ecommerce accesories (1).png */}
                        <Image
                            src="/Ecommerce accesories (8).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories (9).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories (10).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
                {/* third shop */}
                <div className='flex gap-14 py-[90px]'>
                    <div>
                        <Image
                            src="/Ecommerce accesories (4).png "
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>

                        {/* c:\Users\wajiz.pk\Downloads\Ecommerce accesories (1).png */}
                        <Image
                            src="/Ecommerce accesories (5).png "
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories (6).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src="/Ecommerce accesories (3).png"
                            alt="Phone Icon"
                            width={300}
                            height={363}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* last  */}
            {/*  <div className='py-[80px] px-[580px]'>
                    <Image
                        src="/imgesss.png"
                        alt="Phone Icon"
                        width={904}
                        height={200}
                        className="max-w-full h-auto"
                    />
                </div>
                <div> <Image
                    src="/footer.png"
                    alt="Phone Icon"
                    width={2120}
                    height={532}
                    className="max-w-full h-auto"
                />
                </div> */}
            <div className='h-[220px] w-full'>

                <div className='py-[70px] px-[600px] '>
                    <Image
                        src="/imgesss.png"
                        alt="Phone Icon"
                        width={904}
                        height={200}
                        className="max-w-full h-auto"
                    />
                </div>

            </div>



            <div className='h-[532px] w-full'>
                <Image
                    src="/footer.png"
                    alt="Phone Icon"
                    width={2120}
                    height={532}
                    className="max-w-full h-auto"
                />
            </div>




        </div>
    )
}

export default Shopping
