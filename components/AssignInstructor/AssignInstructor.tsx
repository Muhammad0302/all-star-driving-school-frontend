import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

import './styles.css'
const validationSchema = yup.object({
  studentId: yup.string().required('Student ID is required'),
  studentName: yup.string().required('Student Name is required'),
  instructorName: yup.string().required('Instructor Name is required'),
})
const AssignInstructor = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      studentId: '',
      studentName: '',
      instructorName: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      router.push('/stdsasigndtoinstrs')
    },
  })

  console.log('the formik values is:', formik.values)
  // added here ..
  return (
    <div className='mt-[3.5rem]'>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: '5px !important', paddingLeft: '6rem', paddingRight: '6rem' }}
        >
          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id='demo-simple-select-label'
                  error={formik.touched.studentName && Boolean(formik.errors.studentName)}
                >
                  Student Name
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={formik.values.studentName}
                  label='Student Name'
                  onChange={(e) => {
                    formik.setFieldValue('studentName', e.target.value)
                  }}
                >
                  <MenuItem value={'biden'}>Biden</MenuItem>
                  <MenuItem value={'ahmad'}>Ahmad</MenuItem>
                  <MenuItem value={'max'}>Max</MenuItem>
                  <MenuItem value={'verma'}>Verma</MenuItem>
                  <MenuItem value={'john'}>John</MenuItem>
                  <MenuItem value={'emma'}>Emma</MenuItem>
                  <MenuItem value={'david'}>David</MenuItem>
                  <MenuItem value={'olivia'}>Olivia</MenuItem>
                  <MenuItem value={'william'}>William</MenuItem>
                  <MenuItem value={'sophia'}>Sophia</MenuItem>
                  <MenuItem value={'jackson'}>Jackson</MenuItem>
                  <MenuItem value={'mia'}>Mia</MenuItem>
                  <MenuItem value={'ethan'}>Ethan</MenuItem>
                </Select>
                {formik.touched.studentName && Boolean(formik.errors.studentName) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>
                    {formik.errors.studentName}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id='demo-simple-select-label'
                  error={formik.touched.instructorName && Boolean(formik.errors.instructorName)}
                >
                  Instructor Name
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={formik.values.instructorName}
                  label='Instructor Name'
                  onChange={(e) => {
                    formik.setFieldValue('instructorName', e.target.value)
                  }}
                >
                  <MenuItem value={'scarlett'}>Scarlett</MenuItem>
                  <MenuItem value={'lucas'}>Lucas</MenuItem>
                  <MenuItem value={'ella'}>Ella</MenuItem>
                  <MenuItem value={'nathan'}>Nathan</MenuItem>
                  <MenuItem value={'grace'}>Grace</MenuItem>
                  <MenuItem value={'austin'}>Austin</MenuItem>
                  <MenuItem value={'madison'}>Madison</MenuItem>
                  <MenuItem value={'carter'}>Carter</MenuItem>
                  <MenuItem value={'aubrey'}>Aubrey</MenuItem>
                  <MenuItem value={'sebastian'}>Sebastian</MenuItem>
                  <MenuItem value={'claire'}>Claire</MenuItem>
                  <MenuItem value={'gabriel'}>Gabriel</MenuItem>
                  <MenuItem value={'zoey'}>Zoey</MenuItem>
                </Select>
                {formik.touched.instructorName && Boolean(formik.errors.instructorName) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>
                    {formik.errors.instructorName}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} container justifyContent='flex-end'>
            <Button
              type='submit'
              variant='contained'
              sx={{
                marginLeft: 'auto',
                background: '#f23d4d',
                color: 'black',
                '&:hover': {
                  background: '#e01527',
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default AssignInstructor
