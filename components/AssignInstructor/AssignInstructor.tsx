import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
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
            <TextField
              id='studentId'
              name='studentId'
              label='Student ID'
              variant='outlined'
              fullWidth
              value={formik.values.studentId}
              onChange={formik.handleChange}
              error={formik.touched.studentId && Boolean(formik.errors.studentId)}
              helperText={formik.touched.studentId && formik.errors.studentId}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='studentName'
              name='studentName'
              label='Student Name'
              variant='outlined'
              fullWidth
              value={formik.values.studentName}
              onChange={formik.handleChange}
              error={formik.touched.studentName && Boolean(formik.errors.studentName)}
              helperText={formik.touched.studentName && formik.errors.studentName}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='instructorName'
              name='instructorName'
              label='Instructor Name'
              variant='outlined'
              fullWidth
              value={formik.values.instructorName}
              onChange={formik.handleChange}
              error={formik.touched.instructorName && Boolean(formik.errors.instructorName)}
              helperText={formik.touched.instructorName && formik.errors.instructorName}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            />
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
