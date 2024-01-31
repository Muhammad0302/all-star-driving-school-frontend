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
import './styles.css'
const validationSchema = yup.object({
  studentName: yup.string().required('Student Name is required'),
  studentPhone: yup.string().required('Student Phone is required'),
  instructorName: yup.string().required('Instructor Name is required'),
  initialLessonsRequested: yup.string().required('Initial Lessons Requested is required'),
  roadTestRequested: yup.string(),
  lessonsCompleted: yup.string().required('Number of Lessons Completed is required'),
  roadTestCompleted: yup.string(),
})
const AddPrivateLesson = () => {
  const [roadTest, setRoadTest] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setRoadTest(event.target.value as string)
  }
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      studentName: '',
      studentPhone: '',
      instructorName: '',
      initialLessonsRequested: '',
      roadTestRequested: '',
      lessonsCompleted: '',
      roadTestCompleted: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/pvtlssnasgndtoinstrs')
    },
  })
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
              id='studentName'
              name='studentName'
              label='Student Name'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.studentName}
              onChange={formik.handleChange}
              error={formik.touched.studentName && Boolean(formik.errors.studentName)}
              helperText={formik.touched.studentName && (formik.errors.studentName as any)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='studentPhone'
              name='studentPhone'
              label='Student Phone'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.studentPhone}
              onChange={formik.handleChange}
              error={formik.touched.studentPhone && Boolean(formik.errors.studentPhone)}
              helperText={formik.touched.studentPhone && (formik.errors.studentPhone as any)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='instructorName'
              name='instructorName'
              label='Instructor Name'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.instructorName}
              onChange={formik.handleChange}
              error={formik.touched.instructorName && Boolean(formik.errors.instructorName)}
              helperText={formik.touched.instructorName && (formik.errors.instructorName as any)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='initialLessonsRequested'
              name='initialLessonsRequested'
              label='Initial Lessons Requested'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.initialLessonsRequested}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={
                formik.touched.initialLessonsRequested &&
                Boolean(formik.errors.initialLessonsRequested)
              }
              helperText={
                formik.touched.initialLessonsRequested &&
                (formik.errors.initialLessonsRequested as any)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              id='roadTestRequested'
              name='roadTestRequested'
              label='Road Test Requested'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.roadTestRequested}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.roadTestRequested && Boolean(formik.errors.roadTestRequested)}
              helperText={
                formik.touched.roadTestRequested && (formik.errors.roadTestRequested as any)
              }
            /> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Road Test Requested</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={roadTest}
                  label='Road Test Requested'
                  onChange={handleChange}
                >
                  <MenuItem value={'yes'}>Yes</MenuItem>
                  <MenuItem value={'no'}>No</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='lessonsCompleted'
              name='lessonsCompleted'
              label='Number of Lessons Completed'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.lessonsCompleted}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.lessonsCompleted && Boolean(formik.errors.lessonsCompleted)}
              helperText={
                formik.touched.lessonsCompleted && (formik.errors.lessonsCompleted as any)
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              id='roadTestCompleted'
              name='roadTestCompleted'
              label='Road Test Completed'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.roadTestCompleted}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.roadTestCompleted && Boolean(formik.errors.roadTestCompleted)}
              helperText={
                formik.touched.roadTestCompleted && (formik.errors.roadTestCompleted as any)
              }
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
              // onClick={() => setError(true)}
              // disabled={loading}
              variant='contained'
              color='primary'
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

export default AddPrivateLesson
