import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import { useRouter } from 'next/navigation'
import './styles.css'
const InstructorList = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const [activeRow, setActiveRow] = useState(null)
  const handleClick = (event: any, index: any) => {
    setAnchorEl(event.currentTarget)
    setActiveRow(index)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleAddInstructor = () => {
    router.push('/addinstructor')
  }
  const data = [
    [1, 'John Doe', '123-456-7890', '19', '$65', '$1235', 'DL-12345', 'DI-67890'],
    [2, 'Jane Smith', '987-654-3210', '19', '$65', '$1235', 'DL-54321', 'DI-09876'],
    [3, 'Alice Johnson', '555-123-4567', '19', '$65', '$1235', 'DL-67890', 'DI-23456'],
    [4, 'Bob Williams', '111-222-3333', '19', '$65', '$1235', 'DL-98765', 'DI-87654'],
    [5, 'Emily Davis', '444-555-6666', '19', '$65', '$1235', 'DL-43210', 'DI-56789'],
    [6, 'Michael Brown', '777-888-9999', '19', '$65', '$1235', 'DL-13579', 'DI-24680'],
    [7, 'Olivia Miller', '333-999-1111', '19', '$65', '$1235', 'DL-24680', 'DI-13579'],
    [8, 'Daniel Wilson', '666-444-2222', '19', '$65', '$1235', 'DL-86420', 'DI-97531'],
    [9, 'Sophia Taylor', '222-777-5555', '19', '$65', '$1235', 'DL-98765', 'DI-43210'],
    [10, 'Ethan Martinez', '999-111-3333', '19', '$65', '$1235', 'DL-12345', 'DI-67890'],
    [11, 'Ava Anderson', '111-222-3333', '19', '$65', '$1235', 'DL-54321', 'DI-09876'],
    [12, 'Mason Garcia', '555-123-4567', '19', '$65', '$1235', 'DL-67890', 'DI-23456'],
    [13, 'Emma Jones', '777-888-9999', '19', '$65', '$1235', 'DL-98765', 'DI-87654'],
    [14, 'Logan White', '444-555-6666', '19', '$65', '$1235', 'DL-43210', 'DI-56789'],
    [15, 'Chloe Harris', '333-999-1111', '19', '$65', '$1235', 'DL-24680', 'DI-13579'],
    [16, 'Liam Turner', '666-444-2222', '19', '$65', '$1235', 'DL-86420', 'DI-97531'],
    [17, 'Aria Garcia', '222-777-5555', '19', '$65', '$1235', 'DL-98765', 'DI-43210'],
    [18, 'Noah Miller', '999-111-3333', '19', '$65', '$1235', 'DL-12345', 'DI-67890'],
    [19, 'Grace Robinson', '111-222-3333', '19', '$65', '$1235', 'DL-54321', 'DI-09876'],
    [20, 'Elijah Clark', '555-123-4567', '19', '$65', '$1235', 'DL-67890', 'DI-23456'],
  ]

  const columns = [
    {
      name: 'ID',
      label: 'ID',
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
      name: 'Phone',
      label: 'Phone Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'noOfLessons',
      label: 'No of Lessons',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Rate',
      label: 'Rate',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Total Compensation',
      label: 'Total Compensation',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'DriverLicense',
      label: 'Driver License No',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'DILicense',
      label: 'DI License No',
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
                  <MenuItem onClick={handleAddInstructor}>
                    <ModeEditOutlineOutlinedIcon /> Edit
                  </MenuItem>
                  <MenuItem
                  // onClick={() => handleDelete(tableMeta.rowData[0])}
                  >
                    <DeleteOutlineOutlinedIcon /> Delete
                  </MenuItem>
                  <MenuItem
                  // onClick={() => handleDelete(tableMeta.rowData[0])}
                  >
                    <PaymentsOutlinedIcon sx={{ marginRight: '2px' }} /> Pay
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
  const HeaderElements = () => {
    return (
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAddInstructor}>
        + Add Instructor
      </Button>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
    headCells: {
      style: {
        fontWeight: 'bold !important',
        color: 'black !important',
      },
    },
    print: false,
    filter: false,
  }

  return (
    <>
      {' '}
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 mb-[1rem] text-[20x] sm:text-[19px] md:text-[23px] lg:text-[26px] text-center font-russoone font-normal'>
          Instructors list
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default InstructorList
