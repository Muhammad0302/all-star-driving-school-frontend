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
  width: '90%',
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
                    <th className='border  py-2'>Id</th>
                    <th className='border  py-2'>Name</th>
                    <th className='border  py-2'>Address</th>
                    <th className='border  py-2'>Phone Number</th>
                    <th className='border  py-2'>Dob</th>
                    <th className='border  py-2'>License Number</th>
                    <th className='border  py-2'>License Issue Date</th>
                    <th className='border  py-2'>License Expiry Date</th>
                    <th className='border  py-2'>Course Start Date</th>
                    <th className='border  py-2'>Course Expiry Date</th>
                    <th className='border  py-2'>Total Payments Received</th>
                    <th className='border  py-2'>MTO Certification</th>
                    <th className='border  py-2'>Score%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='font-medium'>
                    <td className='border  py-2 text-center'>E24/12/2</td>
                    <td className='border  py-2 text-center'>Jane Smith</td>
                    <td className='border  py-2 text-center'>890 Birch St</td>
                    <td className='border  py-2 text-center'>888-5555</td>
                    <td className='border  py-2 text-center'>20/4/1998</td>
                    <td className='border  py-2 text-center'>I2345-67890-12345</td>
                    <td className='border  py-2 text-center'>2021/08/12</td>
                    <td className='border  py-2 text-center'>2026/08/12</td>
                    <td className='border  py-2 text-center'>2026/10/15</td>
                    <td className='border  py-2 text-center'>2027/10/15</td>
                    <td className='border  py-2 text-center'>$450</td>
                    <td className='border  py-2 text-center'>No</td>
                    <td className='border  py-2 text-center'>75%</td>
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
