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
import './styles.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
interface ViewDetailInput {
  open: boolean
  handleClose: () => void
}
const ViewDetail = ({ open, handleClose }: ViewDetailInput) => {
  const data = [
    [
      'I24/12/1',
      'John Doe',
      '$0.50',
      '$0.75',
      '$1.00',
      '$1.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-01-15',
      // '2022-01-20',
      // '2022-01-25',
      // '2022-01-30',
      '$3.50',
    ],
    [
      'E24/12/2',
      'Jane Smith',
      '$1.50',
      '$1.75',
      '$2.00',
      '$2.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-01-16',
      // '2022-01-21',
      // '2022-01-26',
      // '2022-01-31',
      '$7.50',
    ],
  ]

  const columns = [
    {
      name: 'StudentID',
      label: 'Student ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'StudentName',
      label: 'Student Name',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment1',
      label: 'Payment1',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment2',
      label: 'Payment2',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment3',
      label: 'Payment3',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment4',
      label: 'Payment4',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment1Method',
      label: 'Payment1 Method',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment2Method',
      label: 'Payment2 Method',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment3Method',
      label: 'Payment3 Method',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment4Method',
      label: 'Payment4 Method',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'PaymentType',
      label: 'Payment Type',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment1Date',
      label: 'Payment1 Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    // {
    //   name: 'Payment2Date',
    //   label: 'Payment2 Date',
    //   options: {
    //     filter: true,
    //     sort: false,
    //   },
    // },
    // {
    //   name: 'Payment3Date',
    //   label: 'Payment3 Date',
    //   options: {
    //     filter: true,
    //     sort: false,
    //   },
    // },
    // {
    //   name: 'Payment4Date',
    //   label: 'Payment4 Date',
    //   options: {
    //     filter: true,
    //     sort: false,
    //   },
    // },

    {
      name: 'TotalPayments',
      label: 'Total Payments',
      options: {
        filter: true,
        sort: false,
      },
    },
  ]

  const options = {
    search: false,
    download: false,
    pagination: false,
    tableBodyHeight: '100%',
    print: false,
    filter: false,
    sortFilterList: false,
    // selectableRows: false,
    viewColumns: false,
  }
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
            <MUIDataTable title={''} data={data} columns={columns} options={options} />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ViewDetail
