import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { TextField, Box } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useRouter } from 'next/navigation'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import './styles.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '87%',
  minHeight: '25%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 3,
}
interface ViewDetailInput {
  open: boolean
  handleClose: () => void
}

const ViewDetail = ({ open, handleClose }: ViewDetailInput) => {
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CloseIcon
              sx={{ cursor: 'pointer', position: 'absolute', top: 15, right: 20 }}
              onClick={handleClose}
            />
            <div className='container mx-auto mt-6'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='font-bold'>
                    <th className='border  py-2'>Student Id</th>
                    <th className='border  py-2'>Student Name</th>
                    <th className='border  py-2'>Payment1</th>
                    <th className='border  py-2'>Payment2</th>
                    <th className='border  py-2'>Payment3</th>
                    <th className='border  py-2'>Payment4</th>
                    <th className='border  py-2'>Payment1 Method</th>
                    <th className='border  py-2'>Payment2 Method</th>
                    <th className='border  py-2'>Payment3 Method</th>
                    <th className='border  py-2'>Payment4 Method</th>
                    <th className='border  py-2'>Payment Type</th>
                    <th className='border  py-2'>Payment Date</th>
                    <th className='border  py-2'>Total Payments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='font-medium'>
                    <td className='border  py-2 text-center'>E24/12/2</td>
                    <td className='border  py-2 text-center'>Jane Smith</td>
                    <td className='border  py-2 text-center'>$1.50</td>
                    <td className='border  py-2 text-center'>$1.75</td>
                    <td className='border  py-2 text-center'>$2.00</td>
                    <td className='border  py-2 text-center'>$2.25</td>
                    <td className='border  py-2 text-center'>Cash</td>
                    <td className='border  py-2 text-center'>Credit Card</td>
                    <td className='border  py-2 text-center'>Debit Card</td>
                    <td className='border  py-2 text-center'>Cash</td>
                    <td className='border  py-2 text-center'>Cash</td>
                    <td className='border  py-2 text-center'>2022-01-16</td>
                    <td className='border  py-2 text-center'>$7.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ViewDetail
