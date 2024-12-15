import React from 'react'
import Image from 'next/image'

const Trading = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto py-[140px] px-4 sm:px-[20px] md:px-[40px] lg:px-[180px]'>
                <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] leading-[49px] mb-8 md:w-[367px] mx-auto">
                    Trading Products
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Trending products@2x.png"
                            alt="Featured Product 1"
                            width={270}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Trending products.svg"
                            alt="Featured Product 2"
                            width={270}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Trending products.png"
                            alt="Featured Product 3"
                            width={270}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Trending products (1).png"
                            alt="Featured Product 4"
                            width={270}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-8">
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Group 154.png"
                            alt="Latest Product 1"
                            width={420}
                            height={270}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Group 155.png"
                            alt="Latest Product 2"
                            width={240}
                            height={270}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <div className='h-[270px] sm:w-full md:w-[420px] flex'>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <Image
                                        src="/Trnding products list.png"
                                        alt="Latest Product 3"
                                        width={267}
                                        height={74}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Trnding products list (1).png"
                                        alt="Latest Product 3"
                                        width={267}
                                        height={74}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Trnding products list (2).png"
                                        alt="Latest Product 3"
                                        width={267}
                                        height={74}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16">
                    <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                        Discount Item
                    </h1>

                    <div className="flex justify-center gap-8 mb-8">
                        <span className="text-[#FB2E86] underline underline-offset-4 text-lg font-medium">
                            Wood Chair
                        </span>
                        <span className="text-[#151875] text-lg font-medium">
                            Plastic Chair
                        </span>
                        <span className="text-[#151875] text-lg font-medium">
                            Sofa Collection
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trading;
