import React from 'react'
import Image from 'next/image'

const BlogPage = () => {
    return (
        <div>

            {/* first side started */}
            <div className='bg-[#F6F5FF] py-10 px-6 md:py-[140px] md:px-[200px]'>
                <h1 className='font-JosefinSans text-[24px] text-[#101750] font-semibold md:text-[29px] text-3xl'>
                    Blog Page
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

            {/* section two has been started */}
            <div className='h-[2400px] w-full flex  gap-6 py-[90px] px-[380px]'>
                {/* img */}
                <div className='w-[870px] h-[2353px]'>
                    <div>
                        <Image
                            src="/bruce-mars-FWVMhUa_wbY-unsplash 2.svg"
                            alt="Phone Icon"
                            width={870}
                            height={453}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className='py-[20px]'>
                        <Image
                            src="/Author and Date.png"
                            alt="Phone Icon"
                            width={360}
                            height={23}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-black font-sans text-3xl md:text-4xl lg:text-4xl leading-tight mt-4">Mauris at orci non vulputate diam tincidunt nec.</h1>
                        <p className='w-[852px] h-[49px] py-[20px] text-[#8A8FB9]' style={{ fontSize: "16px", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id at.</p>
                        <p className="text-black py-[30px] w-[95px] h-[28px]">Read More ....</p>
                    </div>
                    {/* second */}
                    <div className='py-[20px]'>
                        <Image
                            src="/bruce-mars-FWVMhUa_wbY-unsplash 3.png"
                            // src="/bruce-mars-FWVMhUa_wbY-unsplash 2.svg"
                            alt="Phone Icon"
                            width={870}
                            height={453}
                            className="max-w-full h-auto"
                        />

                    </div>
                    <div className='py-[20px]'>
                        <Image
                            src="/Author and Date.png"
                            alt="Phone Icon"
                            width={360}
                            height={23}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-black font-sans text-3xl md:text-4xl lg:text-4xl leading-tight mt-4">Mauris at orci non vulputate diam tincidunt nec.</h1>
                        <p className='w-[852px] h-[49px] py-[20px] text-[#8A8FB9]' style={{ fontSize: "16px", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id at.</p>
                        <p className="text-black py-[30px] w-[95px] h-[28px]">Read More ....</p>
                    </div>
                    {/* third */}
                    <div className='py-[20px]'>
                        <Image
                            src="/bruce-mars-FWVMhUa_wbY-unsplash 4.png"
                            alt="Phone Icon"
                            width={870}
                            height={453}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className='py-[20px]'>
                        <Image
                            src="/Author and Date.png"
                            alt="Phone Icon"
                            width={360}
                            height={23}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-black font-sans text-3xl md:text-4xl lg:text-4xl leading-tight mt-4">Mauris at orci non vulputate diam tincidunt nec.</h1>
                        <p className='w-[852px] h-[49px] py-[20px] text-[#8A8FB9]' style={{ fontSize: "16px", lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id at.</p>
                        <p className="text-black py-[30px] w-[95px] h-[28px]">Read More ....</p>
                    </div>
                    <div className='px-[240px] py-[60px]'> <Image
                        src="/Group 219.png"
                        alt="Phone Icon"
                        width={236}
                        height={24}
                        className="max-w-full h-auto"
                    /></div>

                </div>
                {/* form */}
                <div className='w-[470px] h-[1553px]'>

                    <div>
                        <Image
                            src="/Group 228 (1).png"
                            alt="Phone Icon"
                            width={270}
                            height={77}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className='py-[30px]'>
                        <Image
                            src="/Group 227 (1).png"
                            alt="Phone Icon"
                            width={254}
                            height={161}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div>
                        <h1 className='text-[30px] text-black'>Recent Post</h1>

                        <Image
                            src="/Group 222.png"
                            alt="Phone Icon"
                            width={250}
                            height={270}
                            className="max-w-full h-auto"
                        />
                    </div>

                    {/* sale */}
                    <div>
                        <h1 className='text-[30px] text-black'>Sale Products</h1>

                        <Image
                            src="/Group 221 (2).png"
                            alt="Phone Icon"
                            width={250}
                            height={270}
                            className="max-w-full h-auto"
                        />
                    </div>
                    {/* offer */}
                    <div>
                        <h1 className='text-[30px] text-black'>Offer Products</h1>

                        <Image
                            src="/Group 225.png"
                            alt="Phone Icon"
                            width={250}
                            height={270}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className='py-[30px]'>
                        <Image
                            src="/Group 244.png"
                            alt="Phone Icon"
                            width={126}
                            height={78}
                            className="max-w-full h-auto"
                        />
                    </div>

                    <div>
                        <h1 className='text-[24px] text-black'>Tags</h1>
                        <br />
                        <Image
                            src="/Group 229.png"
                            alt="Phone Icon"
                            width={228}
                            height={64}
                            className="max-w-full h-auto"
                        />

                    </div>
                </div>
            </div>







        </div>
    )
}

export default BlogPage
