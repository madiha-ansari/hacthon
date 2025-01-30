// import React from 'react'
// import Image from 'next/image'
// import Footer from './Footer'

// const Contact = () => {
//   return (
//     <div>
//       {/* first side started */}
//       <div className='bg-[#F6F5FF] py-10 px-6 md:py-[140px] md:px-[200px]'>
//         <h1 className='font-JosefinSans text-[24px] text-[#101750] font-semibold md:text-[29px] text-3xl'>
//           Contact Page
//         </h1>
//         <div className='flex flex-wrap gap-2 py-4'>
//           <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Home ,</p>
//           <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Page ,</p>
//           <p className='text-[14px] md:text-[16px] text-[#FB2E86]'>Blog Page</p>
//         </div>
//       </div>
//       {/* first side completed  */}
//       {/* second */}
//       <div className='w-full h-[1200px] bg-orange-600 px-[290px] py-[40px]' >
//         <div>
//           <Image
//             src="/Group 96 (1).png"
//             alt="Phone Icon"
//             width={1191}
//             height={490}
//             className="max-w-full h-auto"
//           />
//         </div>

//         <div className='flex gap-4 items-center py-[40px]'>
//           <div>
//             <Image
//               src="/Group 116.png "
//               alt="Phone Icon"
//               width={534}
//               height={414}
//               className="max-w-full h-auto"
//             />
//             {/* public/Group 116.png */}
//           </div>
//           <div>
//             <Image
//               src="/Group 124.png "
//               alt="Phone Icon"
//               width={723}
//               height={629}
//               className="max-w-full h-auto"
//             />
//             {/* public/Group 124.png */}
//           </div>
//         </div>

//       </div>
// <Footer></Footer>

//     </div>
//   )
// }

// export default Contact





import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      {/* first side started */}
      <div className='bg-[#F6F5FF] py-10 px-6 md:py-[140px] md:px-[200px]'>
        <h1 className='font-JosefinSans text-[24px] text-[#101750] font-semibold md:text-[29px] text-3xl'>
          Contact Page
        </h1>
        <div className='flex flex-wrap gap-2 py-4'>
          <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Home ,</p>
          <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Page ,</p>
          <p className='text-[14px] md:text-[16px] text-[#FB2E86]'>Blog Page</p>
        </div>
      </div>
      {/* first side completed  */}
      {/* second */}
      <div className='w-full h-auto px-6 sm:px-10 md:px-[100px] lg:px-[200px] py-[40px]'>
        <div>
          <Image
            src="/Group 96 (1).png"
            alt="Phone Icon"
            width={1191}
            height={490}
            className="max-w-full h-auto"
          />
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center py-[40px]'>
          <div className='w-full md:w-1/2'>
            <Image
              src="/Group 116.png"
              alt="Phone Icon"
              width={534}
              height={414}
              className="max-w-full h-auto"
            />
          </div>
          <div className='w-full md:w-1/2'>
            <Image
              src="/Group 124.png"
              alt="Phone Icon"
              width={723}
              height={629}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
