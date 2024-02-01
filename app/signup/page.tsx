'use client'

import Signup from '@/components/Signup'

import { Grid } from '@mui/material'

export default function SignUp() {
  return (
    <>
      <div className='flex h-full'>
        <div className='hidden sm:hidden md:hidden lg:block lg:w-[50%] xl:w-[50%] lg:h-full xl:h-full'>
          <img
            className='lg:h-[100vh] lg:w-[100%] xl:h-[100vh] xl:w-[100%]'
            style={{ objectFit: 'cover' }}
            src='Images/sign_in_pic.jpg'
            alt='library-img'
          ></img>
        </div>
        <div className='w-full sm:w-full lg:w-[50%] xl:w-[50%]'>
          <Signup />
        </div>
      </div>
    </>
  )
}
