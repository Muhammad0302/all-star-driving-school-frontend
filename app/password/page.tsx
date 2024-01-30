'use client'

import Pasword from '@/components/Password'

export default function Password() {
  return (
    <>
      <div className=''>
        <div className='flex'>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-[50%] xl:w-[50%]'>
            <img
              className='lg:h-[100vh] lg:w-[100%] xl:h-[100%] xl:w-[100%] xll:w-[100%]'
              style={{ objectFit: 'cover' }}
              src='Images/sign_in_pic.jpg'
              alt='library-img'
            ></img>
          </div>
          <div className='w-full sm:w-full lg:1/2 xl:w-2/3 xll:w-3/5 pl-20'>
            <Pasword />
          </div>
        </div>
      </div>
    </>
  )
}
