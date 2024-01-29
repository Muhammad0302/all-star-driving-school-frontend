import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  studentId: yup.string().required('Student Id is required'),
  address: yup.string().required('Address is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  licenseNumber: yup.string().required('License Number is required'),
  licenseIssueDate: yup.string().required('License Issue Date is required'),
  licenseExpiryDate: yup.string().required('License Expiry Date is required'),
  courseExpiryDate: yup.string().required('Course Expiry Date is required'),
  totalPaymentsReceived: yup.string().required('Total Payments Received is required'),
  mtoCertification: yup.string().required('MTO Certification is required'),
  score: yup.string().required('Score is required'),
})
const AddStudent = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      studentId: '',
      address: '',
      phoneNumber: '',
      licenseNumber: '',
      licenseIssueDate: '',
      licenseExpiryDate: '',
      courseExpiryDate: '',
      totalPaymentsReceived: '',
      mtoCertification: '',
      score: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/studentlist')
    },
  })
  return (
    <div className='mt-6'>
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
              label='Student Id'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.studentId}
              onChange={formik.handleChange}
              error={formik.touched.studentId && Boolean(formik.errors.studentId)}
              helperText={formik.touched.studentId && formik.errors.studentId}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='name'
              name='name'
              label='Name'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='address'
              name='address'
              label='Address'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='phoneNumber'
              name='phoneNumber'
              label='Phone Number'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='licenseNumber'
              name='licenseNumber'
              label='License Number'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.licenseNumber}
              onChange={formik.handleChange}
              error={formik.touched.licenseNumber && Boolean(formik.errors.licenseNumber)}
              helperText={formik.touched.licenseNumber && formik.errors.licenseNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='licenseIssueDate'
              name='licenseIssueDate'
              label='License Issue Date'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.licenseIssueDate}
              onChange={formik.handleChange}
              error={formik.touched.licenseIssueDate && Boolean(formik.errors.licenseIssueDate)}
              helperText={formik.touched.licenseIssueDate && formik.errors.licenseIssueDate}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='licenseExpiryDate'
              name='licenseExpiryDate'
              label='License Expiry Date'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.licenseExpiryDate}
              onChange={formik.handleChange}
              error={formik.touched.licenseExpiryDate && Boolean(formik.errors.licenseExpiryDate)}
              helperText={formik.touched.licenseExpiryDate && formik.errors.licenseExpiryDate}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='courseExpiryDate'
              name='courseExpiryDate'
              label='Course Expiry Date'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.courseExpiryDate}
              onChange={formik.handleChange}
              error={formik.touched.courseExpiryDate && Boolean(formik.errors.courseExpiryDate)}
              helperText={formik.touched.courseExpiryDate && formik.errors.courseExpiryDate}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='totalPaymentsReceived'
              name='totalPaymentsReceived'
              label='Total Payments Received'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.totalPaymentsReceived}
              onChange={formik.handleChange}
              error={
                formik.touched.totalPaymentsReceived && Boolean(formik.errors.totalPaymentsReceived)
              }
              helperText={
                formik.touched.totalPaymentsReceived && formik.errors.totalPaymentsReceived
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='mtoCertification'
              name='mtoCertification'
              label='MTO Certification'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.mtoCertification}
              onChange={formik.handleChange}
              error={formik.touched.mtoCertification && Boolean(formik.errors.mtoCertification)}
              helperText={formik.touched.mtoCertification && formik.errors.mtoCertification}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id='score'
              name='score'
              label='Score'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              value={formik.values.score}
              onChange={formik.handleChange}
              error={formik.touched.score && Boolean(formik.errors.score)}
              helperText={formik.touched.score && formik.errors.score}
            />
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

export default AddStudent
