'use client'

import Signin from '@/components/Signin'

export default function SignIn() {
  return (
    <>
      <div className='flex'>
        <div className='hidden sm:hidden md:hidden lg:block lg:w-[50%] xl:w-[50%]'>
          <img
            className='lg:h-[100vh] lg:w-[100%] xl:h-[100%] xl:w-[100%] xll:w-[100%]'
            style={{ objectFit: 'cover' }}
            src='Images/sign_in_pic.jpg'
            alt='library-img'
          ></img>
        </div>
        <div className='w-full sm:w-full lg:w-[50%] xl:w-[50%]'>
          <Signin />
        </div>
      </div>
    </>
  )
}
