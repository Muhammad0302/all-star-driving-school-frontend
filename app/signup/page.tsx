'use client'

import Signup from '@/components/Signup'

import { Grid } from '@mui/material'

export default function SignUp() {
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
          <div className='sm:w-full lg:3/5 xl:w-2/3'>
            <Signup />
          </div>
        </div>
      </div>
    </>
  )
}
