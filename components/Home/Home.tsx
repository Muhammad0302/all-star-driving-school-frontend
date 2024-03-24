import React from 'react'
import Link from 'next/link'
import { Typography, TextField, IconButton, InputAdornment, Button, Grid, Box } from '@mui/material'
import Chart from './Chart'
import { userData, instructorData } from 'util/dummyData'
import FeatureInfo from './FeatureInfo'

const Home = () => {
  return (
    <>
      <Box sx={{ padding: '24px', marginTop: '2.5rem' }}>
        <FeatureInfo />
        <Chart data={userData} title='Student Analytics' grid dataKey='Active Student' />
        {/* <Chart
          data={instructorData}
          title='Instructor Analytics'
          grid
          dataKey='Active Instructor'
        /> */}
      </Box>
    </>
  )
}

export default Home
