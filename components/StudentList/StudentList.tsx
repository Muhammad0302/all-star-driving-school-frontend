import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import InputLabel from '@mui/material/InputLabel'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import HistoryIcon from '@mui/icons-material/History'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './styles.css'
import ViewDetail from './ViewDetail'
import PaymentHistory from './PaymentHistory'
const StudentList = () => {
  const [studentStatus, setStudentStatus] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [openModalPmntHstry, setOpenModalPmntHstry] = useState(false)
  const handleCloseFunc = () => setOpenModal(false)
  const handleCloseFuncPmntHstry = () => setOpenModalPmntHstry(false)
  const handleOpen = () => setOpenModal(true)
  const handleOpenPmntHstry = () => setOpenModalPmntHstry(true)
  const router = useRouter()
  const open = Boolean(anchorEl)
  const [activeRow, setActiveRow] = useState(null)
  const handleClick = (event: any, index: any) => {
    setAnchorEl(event.currentTarget)
    setActiveRow(index)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleAddStudent = () => {
    router.push('/addstudent')
  }
  const data = [
    [
      'I24/12/1',
      'Eva Johnson',
      '890 Birch St',
      '888-5555',
      '20',
      'I2345-67890-12345',
      // '2021/08/12',
      // '2026/08/12',
      // '2026/10/15',
      // '2027/10/15',
      '$450',
      'No',
      '75%',
      '$100.50',
    ],
    [
      'E24/12/2',
      'Michael Smith',
      '123 Oak Ln',
      '777-1234',
      '15',
      'S9876-54321-09876',
      // '2021/09/15',
      // '2025/09/15',
      // '2023/12/10',
      // '2024/12/10',
      '$600',
      'Yes',
      '90%',
      '$200.50',
    ],
    [
      'I24/12/3',
      'Sophia Brown',
      '456 Maple St',
      '999-9876',
      '25',
      'B5678-01234-56789',
      // '2021/11/05',
      // '2026/11/05',
      // '2024/02/01',
      // '2025/02/01',
      '$700',
      'No',
      '80%',
      '$400.50',
    ],
    [
      'E24/12/4',
      'Daniel Wilson',
      '789 Cedar St',
      '555-6789',
      '10',
      'D4321-56789-01234',
      // '2022/01/10',
      // '2026/01/10',
      // '2023/04/15',
      // '2024/04/15',
      '$550',
      'Yes',
      '85%',

      '$200.50',
    ],
    [
      'I24/12/5',
      'Olivia Davis',
      '234 Pine St',
      '333-4444',
      '5',
      'O9876-54321-87654',
      // '2022/02/20',
      // '2027/02/20',
      // '2024/06/01',
      // '2025/06/01',
      '$600',
      'No',
      '92%',
      '$400.50',
    ],
    [
      'E24/12/6',
      'Aiden Taylor',
      '567 Oak Ln',
      '777-5678',
      '18',
      'A1234-56789-01234',
      // '2022/03/12',
      // '2026/03/12',
      // '2023/06/15',
      // '2024/06/15',
      '$700',
      'Yes',
      '88%',
      '$28.50',
    ],
    [
      'I24/12/7',
      'Mia Evans',
      '890 Cedar St',
      '999-6789',
      '10',
      'M5678-01234-56789',
      // '2022/04/18',
      // '2027/04/18',
      // '2024/07/01',
      // '2025/07/01',
      '$650',
      'No',
      '78%',
      '$100.50',
    ],
    [
      'E24/12/8',
      'Liam Turner',
      '123 Pine St',
      '555-1111',
      '15',
      'L3456-78901-23456',
      // '2022/05/20',
      // '2027/05/20',
      // '2024/08/01',
      // '2025/08/01',
      '$500',
      'Yes',
      '95%',
      '$300.50',
    ],
    [
      'I24/12/9',
      'Ava Robinson',
      '456 Maple St',
      '333-2222',
      '8',
      'A2345-67890-12345',
      // '2022/06/25',
      // '2027/06/25',
      // '2024/09/01',
      // '2025/09/01',
      '$750',
      'No',
      '80%',
      '$400.50',
    ],
    [
      'E24/12/10',
      'Ethan Hall',
      '789 Birch St',
      '777-2222',
      '12',
      'E5678-90123-45678',
      // '2022/07/10',
      // '2027/07/10',
      // '2024/10/15',
      // '2026/10/15',
      '$600',
      'Yes',
      '87%',
      '$48.50',
    ],
    [
      'I24/12/11',
      'Emma Adams',
      '234 Oak Ln',
      '999-3333',
      '30',
      'E9876-54321-09876',
      // '2022/08/15',
      // '2027/08/15',
      // '2024/11/01',
      // '2026/11/01',
      '$650',
      'No',
      '92%',
      '$53.50',
    ],
    [
      'E24/12/12',
      'Logan Turner',
      '567 Pine St',
      '555-4444',
      '22',
      'L4321-56789-01234',
      // '2022/09/20',
      // '2027/09/20',
      // '2025/12/01',
      // '2026/12/01',
      '$800',
      'Yes',
      '89%',
      '$58.50',
    ],
    [
      'I24/12/13',
      'Mila Wilson',
      '890 Maple St',
      '888-7777',
      '14',
      'M5678-90123-23456',
      // '2022/10/12',
      // '2027/10/12',
      // '2025/01/15',
      // '2026/01/15',
      '$750',
      'No',
      '93%',
      '$63.50',
    ],
    [
      'E24/12/14',
      'Owen Davis',
      '123 Cedar St',
      '777-9999',
      '5',
      'O8765-43210-56789',
      // '2022/11/05',
      // '2027/11/05',
      // '2025/04/01',
      // '2026/04/01',
      '$700',
      'Yes',
      '85%',

      '$68.50',
    ],
    [
      'I24/12/15',
      'Luna Evans',
      '456 Oak Ln',
      '555-6666',
      '18',
      'L9876-54321-87654',
      // '2022/12/10',
      // '2027/12/10',
      // '2025/05/15',
      // '2026/05/15',
      '$800',
      'No',
      '88%',

      '$73.50',
    ],
    [
      'E24/12/16',
      'Avery Robinson',
      '789 Cedar St',
      '999-6666',
      '22',
      'A1234-56789-01234',
      // '2023/01/18',
      // '2028/01/18',
      // '2025/06/01',
      // '2026/06/01',
      '$750',
      'Yes',
      '95%',

      '$78.50',
    ],
    [
      'I24/12/17',
      'Liam Adams',
      '234 Birch St',
      '333-8888',
      '12',
      'L9876-54321-87654',
      // '2023/02/12',
      // '2028/02/12',
      // '2025/07/15',
      // '2026/07/15',
      '$850',
      'No',
      '80%',

      '$83.50',
    ],
    [
      'E24/12/18',
      'Mila Turner',
      '567 Maple St',
      '555-3333',
      '28',
      'M5678-90123-23456',
      // '2023/03/10',
      // '2028/03/10',
      // '2025/08/01',
      // '2026/08/01',
      '$800',
      'Yes',
      '90%',

      '$88.50',
    ],
    [
      'I24/12/19',
      'Oliver Robinson',
      '890 Oak Ln',
      '999-3333',
      '10',
      'O2345-67890-12345',
      // '2023/04/18',
      // '2028/04/18',
      // '2025/09/15',
      // '2026/09/15',
      '$900',
      'No',
      '78%',

      '$93.50',
    ],
    [
      'E24/12/20',
      'Ella Adams',
      '123 Birch St',
      '777-4444',
      '15',
      'E5678-90123-45678',
      // '2023/05/20',
      // '2028/05/20',
      // '2025/10/15',
      // '2026/10/15',
      '$850',
      'Yes',
      '85%',

      '$98.50',
    ],
  ]

  const columns = [
    {
      name: 'Id',
      label: 'Id',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Name',
      label: 'Name',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Address',
      label: 'Address',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'PhoneNumber',
      label: 'Phone Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'No of Lesson',
      label: 'No of Lesson',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'LicenseNumber',
      label: 'License Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'TotalPaymentsReceived',
      label: 'Total Payments Received',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Test Taken',
      label: 'Test Taken',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'ScorePercentage',
      label: 'Score%',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'OutstandingDues',
      label: 'Outstanding Dues',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Actions',
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <>
              <Button
                style={{ paddingTop: '0px', paddingBottom: '0px' }}
                type='button'
                onClick={(e) => handleClick(e, tableMeta.rowIndex)}
              >
                <MoreVertIcon sx={{ color: '#f23d4d' }} />
              </Button>
              {activeRow === tableMeta.rowIndex ? (
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleAddStudent}>
                    <ModeEditOutlineOutlinedIcon /> Edit
                  </MenuItem>
                  <MenuItem
                  // onClick={() => handleDelete(tableMeta.rowData[0])}
                  >
                    <DeleteOutlineOutlinedIcon /> Delete
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleOpen()
                      handleClose()
                    }}
                  >
                    <RemoveRedEyeIcon /> View Detail
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleOpenPmntHstry()
                      handleClose()
                    }}
                  >
                    <HistoryIcon /> Payment History
                  </MenuItem>
                </Menu>
              ) : (
                ''
              )}
            </>
          )
        },
      },
    },
  ]

  const handleStudentStatus = (event: any) => {
    setStudentStatus(event.target.value)
  }
  const HeaderElements = () => {
    return (
      <>
        <Link href='/addstudent' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button type='button' sx={{ color: '#f23d4d' }}>
            + Add Student
          </Button>
        </Link>
      </>
    )
  }
  const FilterElements = () => {
    return (
      <React.Fragment>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            marginRight: '148px',
          }}
        >
          <FormControl sx={{ m: 1, width: '218px' }} size='small'>
            <InputLabel id='demo-select-small'>Select Student Status</InputLabel>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={studentStatus}
              label='Select Student Status'
              onChange={handleStudentStatus}
              MenuProps={{ PaperProps: { style: { maxHeight: '400px' } } }}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={'Completed Courses'}>Completed Courses</MenuItem>
              <MenuItem value={'Expired Students'}>Expired Students</MenuItem>
              <MenuItem value={'All Students'}>All Students</MenuItem>
            </Select>
          </FormControl>
        </div>
      </React.Fragment>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    // customToolbar: HeaderElements,
    print: false,
    filter: false,
    headCells: {
      style: {
        fontWeight: 'bold !important',
        color: 'black !important',
      },
    },
    customToolbar: () => {
      return (
        <React.Fragment>
          <HeaderElements />
          <FilterElements />
        </React.Fragment>
      )
    },
  }
  return (
    <>
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 mb-[1rem] text-[20x] sm:text-[19px] md:text-[23px] lg:text-[26px] text-center font-russoone font-normal'>
          Student list
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
        <ViewDetail open={openModal} handleClose={handleCloseFunc} />
        <PaymentHistory open={openModalPmntHstry} handleClose={handleCloseFuncPmntHstry} />
      </Box>
    </>
  )
}

export default StudentList
