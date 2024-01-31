import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import Box from '@mui/material/Box'
import { useRouter } from 'next/navigation'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import './styles.css'
const validationSchema = yup.object({
  instructorId: yup.string().required('Instructor ID is required'),
  instructorName: yup.string().required('Instructor Name is required'),
  studentId: yup.string().required('Student ID is required'),
  studentName: yup.string().required('Student Name is required'),
  package1: yup.string().required('Package 1 is required'),
  package2: yup.string().required('Package 2 is required'),
  package3: yup.string().required('Package 3 is required'),
  lessonsCompleted: yup.string().required('Lessons Completed is required'),
  roadTestCompleted: yup.string(),
})
const AddLessonCompletion = () => {
  const [roadTest, setRoadTest] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setRoadTest(event.target.value as string)
  }

  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      instructorId: '',
      instructorName: '',
      studentId: '',
      studentName: '',
      package1: '',
      package2: '',
      package3: '',
      lessonsCompleted: '',
      roadTestCompleted: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      router.push('/stdsintrslssncompleted')
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
              id='instructorId'
              name='instructorId'
              label='Instructor ID'
              variant='outlined'
              fullWidth
              value={formik.values.instructorId}
              onChange={formik.handleChange}
              error={formik.touched.instructorId && Boolean(formik.errors.instructorId)}
              helperText={formik.touched.instructorId && formik.errors.instructorId}
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
              id='package1'
              name='package1'
              label='Package 1'
              variant='outlined'
              fullWidth
              value={formik.values.package1}
              onChange={formik.handleChange}
              error={formik.touched.package1 && Boolean(formik.errors.package1)}
              helperText={formik.touched.package1 && formik.errors.package1}
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
              id='package2'
              name='package2'
              label='Package 2'
              variant='outlined'
              fullWidth
              value={formik.values.package2}
              onChange={formik.handleChange}
              error={formik.touched.package2 && Boolean(formik.errors.package2)}
              helperText={formik.touched.package2 && formik.errors.package2}
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
              id='package3'
              name='package3'
              label='Package 3'
              variant='outlined'
              fullWidth
              value={formik.values.package3}
              onChange={formik.handleChange}
              error={formik.touched.package3 && Boolean(formik.errors.package3)}
              helperText={formik.touched.package3 && formik.errors.package3}
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
              id='lessonsCompleted'
              name='lessonsCompleted'
              label='Lessons Completed'
              variant='outlined'
              fullWidth
              value={formik.values.lessonsCompleted}
              onChange={formik.handleChange}
              error={formik.touched.lessonsCompleted && Boolean(formik.errors.lessonsCompleted)}
              helperText={formik.touched.lessonsCompleted && formik.errors.lessonsCompleted}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              id='roadTestCompleted'
              name='roadTestCompleted'
              label='Road Test Completed'
              variant='outlined'
              fullWidth
              value={formik.values.roadTestCompleted}
              onChange={formik.handleChange}
              error={formik.touched.roadTestCompleted && Boolean(formik.errors.roadTestCompleted)}
              helperText={formik.touched.roadTestCompleted && formik.errors.roadTestCompleted}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            /> */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Road Test Completed</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={roadTest}
                  label='Road Test Completed'
                  onChange={handleChange}
                >
                  <MenuItem value={'yes'}>Yes</MenuItem>
                  <MenuItem value={'no'}>No</MenuItem>
                </Select>
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

export default AddLessonCompletion
