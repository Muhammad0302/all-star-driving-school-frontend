'use client'

import Pasword from '@/components/Password'

export default function Password() {
  return (
    <>
      <div className='flex'>
        <div className='hidden sm:hidden md:hidden lg:block lg:w-[50%] xl:w-[50%] lg:h-full xl:h-full'>
          <img
            className='lg:h-[100vh] lg:w-[100%] xl:h-[100vh] xl:w-[100%] '
            style={{ objectFit: 'cover' }}
            src='Images/sign_in_pic.jpg'
            alt='library-img'
          ></img>
        </div>
        <div className='w-full sm:w-full lg:w-[50%] xl:w-[50%]'>
          <Pasword />
        </div>
      </div>
    </>
  )
}
