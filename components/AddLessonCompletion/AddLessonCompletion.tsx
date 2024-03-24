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
import FormHelperText from '@mui/material/FormHelperText'
import './styles.css'
const validationSchema = yup.object({
  instructorName: yup.string().required('Instructor Name is required'),
  studentName: yup.string().required('Student Name is required'),
  package: yup.string().required('Package is required'),
  noOfLessonsCompleted: yup.string().required('Lessons Completed is required'),
  roadTestCompleted: yup.string().required('Road test is required'),
})
const AddLessonCompletion = () => {
  const [roadTest, setRoadTest] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setRoadTest(event.target.value as string)
  }

  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      instructorName: '',

      studentName: '',
      package: '',
      noOfLessonsCompleted: '',
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
                  error={formik.touched.package && Boolean(formik.errors.package)}
                >
                  Package
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={formik.values.package}
                  label='Package'
                  onChange={(e) => {
                    formik.setFieldValue('package', e.target.value)
                  }}
                >
                  <MenuItem value={'Package #1'}>Package #1</MenuItem>
                  <MenuItem value={'Package #2'}>Package #2</MenuItem>
                  <MenuItem value={'Package #3'}>Package #3</MenuItem>
                  <MenuItem value={'Package #2 (Online)'}>Package #2 (Online)</MenuItem>
                  <MenuItem value={'Package #3 (Online)'}>Package #3 (Online)</MenuItem>
                  <MenuItem value={'1 Hour Lesson'}>1 Hour Lesson</MenuItem>
                  <MenuItem value={'2 Hours And Road Test'}>2 Hours And Road Test</MenuItem>
                  <MenuItem value={'3 Hours Lesson + Road Test'}>
                    3 Hours Lesson + Road Test
                  </MenuItem>
                  <MenuItem value={'4 Hours Lesson + Road Test'}>
                    4 Hours Lesson + Road Test
                  </MenuItem>
                  <MenuItem value={'5 hour lesson + Road Test'}>5 hour lesson + Road Test</MenuItem>
                  <MenuItem value={'10 hour lesson + Road Test'}>
                    10 hour lesson + Road Test
                  </MenuItem>
                  <MenuItem value={'1 Hour Lesson'}>1 Hour Lesson</MenuItem>
                  <MenuItem value={'2 Hours And Road Test'}>2 Hours And Road Test</MenuItem>
                  <MenuItem value={'3 Hours Lesson + Road Test'}>
                    3 Hours Lesson + Road Test
                  </MenuItem>
                  <MenuItem value={'4 Hours Lesson + Road Test'}>
                    4 Hours Lesson + Road Test
                  </MenuItem>
                  <MenuItem value={'5 hour lesson + Road Test'}>5 hour lesson + Road Test</MenuItem>
                </Select>
                {formik.touched.package && Boolean(formik.errors.package) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>{formik.errors.package}</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='noOfLessonsCompleted'
              name='noOfLessonsCompleted'
              label='No of Lessons Completed'
              variant='outlined'
              fullWidth
              value={formik.values.noOfLessonsCompleted}
              onChange={formik.handleChange}
              error={
                formik.touched.noOfLessonsCompleted && Boolean(formik.errors.noOfLessonsCompleted)
              }
              helperText={formik.touched.noOfLessonsCompleted && formik.errors.noOfLessonsCompleted}
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id='demo-simple-select-label'
                  error={
                    formik.touched.roadTestCompleted && Boolean(formik.errors.roadTestCompleted)
                  }
                >
                  Road Test Completed
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={formik.values.roadTestCompleted}
                  label='Package'
                  onChange={(e) => {
                    formik.setFieldValue('roadTestCompleted', e.target.value)
                  }}
                >
                  <MenuItem value={'yes'}>Yes</MenuItem>
                  <MenuItem value={'no'}>No</MenuItem>
                </Select>
                {formik.touched.roadTestCompleted && Boolean(formik.errors.roadTestCompleted) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>
                    {formik.errors.roadTestCompleted}
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

export default AddLessonCompletion
