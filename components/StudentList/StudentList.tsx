import { TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useRouter } from 'next/navigation'
import './styles.css'
const StudentList = () => {
  const [anchorEl, setAnchorEl] = useState(null)
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
      'I67/05/60',
      'Eva Johnson',
      '890 Birch St',
      '888-5555',
      'I2345-67890-12345',
      '2021/08/12',
      '2026/08/12',
      '2023/10/22',
      '$450',
      'No',
      '75%',
    ],
    [
      'E12/06/61',
      'Frank Miller',
      '456 Walnut St',
      '111-2222',
      'M7890-12345-67890',
      '2022/04/18',
      '2027/04/18',
      '2023/11/28',
      '$650',
      'Yes',
      '82%',
    ],
    [
      'I34/07/62',
      'Grace Turner',
      '678 Cedar St',
      '333-4444',
      'N1234-56789-01234',
      '2021/12/01',
      '2026/12/01',
      '2023/12/05',
      '$720',
      'No',
      '90%',
    ],
    [
      'E56/08/63',
      'Harry Foster',
      '901 Pine St',
      '999-1111',
      'O7890-12345-67890',
      '2022/06/25',
      '2027/06/25',
      '2024/01/15',
      '$600',
      'Yes',
      '85%',
    ],
    [
      'I78/09/64',
      'Ivy Hill',
      '234 Oak St',
      '777-8888',
      'P1234-56789-01234',
      '2021/10/10',
      '2026/10/10',
      '2024/02/20',
      '$500',
      'No',
      '78%',
    ],
    [
      'E90/10/65',
      'Jack Clark',
      '567 Elm St',
      '555-6666',
      'Q7890-12345-67890',
      '2022/07/15',
      '2027/07/15',
      '2024/03/08',
      '$680',
      'Yes',
      '92%',
    ],
    [
      'I12/11/66',
      'Katherine Hall',
      '890 Cedar St',
      '222-3333',
      'R1234-56789-01234',
      '2021/09/30',
      '2026/09/30',
      '2024/04/12',
      '$550',
      'No',
      '80%',
    ],
    [
      'E34/12/67',
      'Liam Brooks',
      '123 Walnut St',
      '444-5555',
      'S7890-12345-67890',
      '2022/08/20',
      '2027/08/20',
      '2024/05/18',
      '$740',
      'Yes',
      '88%',
    ],
    [
      'I56/01/68',
      'Mia Taylor',
      '456 Pine St',
      '666-7777',
      'T1234-56789-01234',
      '2021/11/12',
      '2026/11/12',
      '2024/06/22',
      '$630',
      'No',
      '95%',
    ],
    [
      'E78/02/69',
      'Noah Adams',
      '789 Oak St',
      '888-9999',
      'U7890-12345-67890',
      '2022/09/05',
      '2027/09/05',
      '2024/07/30',
      '$570',
      'Yes',
      '83%',
    ],
    [
      'I67/05/60',
      'Eva Johnson',
      '890 Birch St',
      '888-5555',
      'I2345-67890-12345',
      '2021/08/12',
      '2026/08/12',
      '2023/10/22',
      '$450',
      'No',
      '75%',
    ],
    [
      'E12/06/61',
      'Frank Miller',
      '456 Walnut St',
      '111-2222',
      'M7890-12345-67890',
      '2022/04/18',
      '2027/04/18',
      '2023/11/28',
      '$650',
      'Yes',
      '82%',
    ],
    [
      'I34/07/62',
      'Grace Turner',
      '678 Cedar St',
      '333-4444',
      'N1234-56789-01234',
      '2021/12/01',
      '2026/12/01',
      '2023/12/05',
      '$720',
      'No',
      '90%',
    ],
    [
      'E56/08/63',
      'Harry Foster',
      '901 Pine St',
      '999-1111',
      'O7890-12345-67890',
      '2022/06/25',
      '2027/06/25',
      '2024/01/15',
      '$600',
      'Yes',
      '85%',
    ],
    [
      'I78/09/64',
      'Ivy Hill',
      '234 Oak St',
      '777-8888',
      'P1234-56789-01234',
      '2021/10/10',
      '2026/10/10',
      '2024/02/20',
      '$500',
      'No',
      '78%',
    ],
    [
      'E90/10/65',
      'Jack Clark',
      '567 Elm St',
      '555-6666',
      'Q7890-12345-67890',
      '2022/07/15',
      '2027/07/15',
      '2024/03/08',
      '$680',
      'Yes',
      '92%',
    ],
    [
      'I12/11/66',
      'Katherine Hall',
      '890 Cedar St',
      '222-3333',
      'R1234-56789-01234',
      '2021/09/30',
      '2026/09/30',
      '2024/04/12',
      '$550',
      'No',
      '80%',
    ],
    [
      'E34/12/67',
      'Liam Brooks',
      '123 Walnut St',
      '444-5555',
      'S7890-12345-67890',
      '2022/08/20',
      '2027/08/20',
      '2024/05/18',
      '$740',
      'Yes',
      '88%',
    ],
    [
      'I56/01/68',
      'Mia Taylor',
      '456 Pine St',
      '666-7777',
      'T1234-56789-01234',
      '2021/11/12',
      '2026/11/12',
      '2024/06/22',
      '$630',
      'No',
      '95%',
    ],
  ]

  const columns = [
    {
      name: 'StudentId',
      label: 'Student Id',
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
      name: 'LicenseNumber',
      label: 'License Number',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'LicenseIssueDate',
      label: 'License Issue Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'LicenseExpiryDate',
      label: 'License Expiry Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'CourseExpiryDate',
      label: 'Course expiry date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'TotalPaymentsReceived',
      label: 'Total payments received',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'MTOCertification',
      label: 'MTO certification',
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
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAddStudent}>
        + Add Student
      </Button>
    )
  }
  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
    print: false,
    filter: false,
    headCells: {
      style: {
        fontWeight: 'bold !important',
        color: 'black !important',
      },
    },
  }
  return (
    <>
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 mb-[1rem] text-[20x] sm:text-[19px] md:text-[23px] lg:text-[26px] text-center font-russoone font-normal'>
          Student list
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default StudentList
