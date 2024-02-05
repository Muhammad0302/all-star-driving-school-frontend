import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
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
  amount: yup.string().required('Amount is required'),
  // paymentType: yup.string().required('Payment Type is required'),
  paymentMethod: yup.string().required('Payment Method is required'),
  date: yup.string(),
})
const AddPayment = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      studentId: '',
      studentName: '',
      amount: '',
      // paymentType: '',
      paymentMethod: '',
      date: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/payments')
    },
  })
  console.log('the formik values is:', formik.values)
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
                  error={formik.touched.studentId && Boolean(formik.errors.studentId)}
                >
                  Student ID
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={formik.values.studentId}
                  label='Student ID'
                  onChange={(e) => {
                    formik.setFieldValue('studentId', e.target.value)
                  }}
                >
                  <MenuItem value={'I24/12/1'}>I24/12/1</MenuItem>
                  <MenuItem value={'E24/12/2'}>E24/12/2</MenuItem>
                  <MenuItem value={'I24/12/3'}>I24/12/3</MenuItem>
                  <MenuItem value={'I24/12/4'}>I24/12/4</MenuItem>
                  <MenuItem value={'I24/12/5'}>I24/12/5</MenuItem>
                  <MenuItem value={'E24/12/6'}>E24/12/6</MenuItem>
                  <MenuItem value={'E24/12/7'}>E24/12/7</MenuItem>
                  <MenuItem value={'E24/12/8'}>E24/12/8</MenuItem>
                  <MenuItem value={'E24/12/9'}>E24/12/9</MenuItem>
                </Select>
                {!!(formik.touched.studentId && formik.errors.studentId) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>
                    {formik.errors.studentId as string}
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

                {!!(formik.touched.studentName && formik.errors.studentName) && (
                  <FormHelperText sx={{ color: '#d32f2f' }}>
                    {formik.errors.studentName as string}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='amount'
              name='amount'
              label='Amount'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.amount}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && (formik.errors.amount as any)}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              id='paymentType'
              name='paymentType'
              label='Payment Type'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.paymentType}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.paymentType && Boolean(formik.errors.paymentType)}
              helperText={formik.touched.paymentType && (formik.errors.paymentType as any)}
            />
          </Grid> */}
          <Grid item xs={12} sm={6} sx={{}}>
            <TextField
              id='paymentMethod'
              name='paymentMethod'
              label='Payment Method'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.paymentMethod}
              onChange={formik.handleChange}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              error={formik.touched.paymentMethod && Boolean(formik.errors.paymentMethod)}
              helperText={formik.touched.paymentMethod && (formik.errors.paymentMethod as any)}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ marginTop: '0px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label='Date'
                  value={formik.values.date}
                  onChange={(newDate) => {
                    formik.setFieldValue('date', newDate)
                  }}
                  // @ts-ignore
                  renderInput={(startProps: any) => <TextField {...startProps} />}
                />
              </DemoContainer>
            </LocalizationProvider>
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

export default AddPayment
