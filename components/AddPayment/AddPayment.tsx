import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Grid, TextField, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
const validationSchema = yup.object({
  studentId: yup.string().required('Student ID is required'),
  name: yup.string().required('Student Name is required'),
  amount: yup.string().required('Amount is required'),
  paymentType: yup.string().required('Payment Type is required'),
  date: yup.string().required('Date is required'),
})
const AddPayment = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      studentId: '',
      name: '',
      amount: '',
      paymentType: '',
      date: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      console.log(values)
      router.push('/payments')
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
              id='studentId'
              name='studentId'
              label='Student ID'
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
              helperText={formik.touched.studentId && (formik.errors.studentId as any)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='name'
              name='name'
              label='Student Name'
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
              helperText={formik.touched.name && (formik.errors.name as any)}
            />
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
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='date'
              name='date'
              label='Date'
              variant='outlined'
              fullWidth
              sx={{
                '& fieldset': { borderColor: '#f23d4d !important' },
              }}
              InputLabelProps={{
                focused: false,
              }}
              type='text'
              value={formik.values.date}
              onKeyDown={(event) => {
                event.stopPropagation()
              }}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && (formik.errors.date as any)}
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

export default AddPayment
