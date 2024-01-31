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
      '20/4/1998',
      'I2345-67890-12345',
      '2021/08/12',
      '2026/08/12',
      '2023/10/22',
      '$450',
      'No',
      '75%',
      '2022-01-15',
      '2022-01-20',
      '2022-01-25',
      '2022-01-30',
      '$3.50',
    ],
    [
      'E12/06/61',
      'Michael Smith',
      '123 Oak Ln',
      '777-1234',
      '15/7/2000',
      'S9876-54321-09876',
      '2021/09/15',
      '2025/09/15',
      '2023/12/10',
      '$600',
      'Yes',
      '90%',
      '2022-02-15',
      '2022-02-20',
      '2022-02-25',
      '2022-03-01',
      '$8.50',
    ],
    [
      'I34/07/62',
      'Sophia Brown',
      '456 Maple St',
      '999-9876',
      '25/12/1992',
      'B5678-01234-56789',
      '2021/11/05',
      '2026/11/05',
      '2024/02/01',
      '$700',
      'No',
      '80%',
      '2022-03-15',
      '2022-03-20',
      '2022-03-25',
      '2022-03-30',
      '$13.50',
    ],
    [
      'E56/08/63',
      'Daniel Wilson',
      '789 Cedar St',
      '555-6789',
      '10/8/1995',
      'D4321-56789-01234',
      '2022/01/10',
      '2026/01/10',
      '2023/04/15',
      '$550',
      'Yes',
      '85%',
      '2022-04-15',
      '2022-04-20',
      '2022-04-25',
      '2022-04-30',
      '$18.50',
    ],
    [
      'I78/09/64',
      'Olivia Davis',
      '234 Pine St',
      '333-4444',
      '5/6/1990',
      'O9876-54321-87654',
      '2022/02/20',
      '2027/02/20',
      '2024/06/01',
      '$600',
      'No',
      '92%',
      '2022-05-15',
      '2022-05-20',
      '2022-05-25',
      '2022-05-30',
      '$23.50',
    ],
    [
      'E90/10/65',
      'Aiden Taylor',
      '567 Oak Ln',
      '777-5678',
      '18/9/1998',
      'A1234-56789-01234',
      '2022/03/12',
      '2026/03/12',
      '2023/06/15',
      '$700',
      'Yes',
      '88%',
      '2022-06-15',
      '2022-06-20',
      '2022-06-25',
      '2022-06-30',
      '$28.50',
    ],
    [
      'I12/11/66',
      'Mia Evans',
      '890 Cedar St',
      '999-6789',
      '10/5/1992',
      'M5678-01234-56789',
      '2022/04/18',
      '2027/04/18',
      '2024/07/01',
      '$650',
      'No',
      '78%',
      '2022-07-15',
      '2022-07-20',
      '2022-07-25',
      '2022-07-30',
      '$33.50',
    ],
    [
      'E34/12/67',
      'Liam Turner',
      '123 Pine St',
      '555-1111',
      '15/2/1994',
      'L3456-78901-23456',
      '2022/05/20',
      '2027/05/20',
      '2024/08/01',
      '$500',
      'Yes',
      '95%',
      '2022-08-15',
      '2022-08-20',
      '2022-08-25',
      '2022-08-30',
      '$38.50',
    ],
    [
      'I56/01/68',
      'Ava Robinson',
      '456 Maple St',
      '333-2222',
      '8/12/1996',
      'A2345-67890-12345',
      '2022/06/25',
      '2027/06/25',
      '2024/09/01',
      '$750',
      'No',
      '80%',
      '2022-09-15',
      '2022-09-20',
      '2022-09-25',
      '2022-09-30',
      '$43.50',
    ],
    [
      'E78/02/69',
      'Ethan Hall',
      '789 Birch St',
      '777-2222',
      '12/11/1993',
      'E5678-90123-45678',
      '2022/07/10',
      '2027/07/10',
      '2024/10/15',
      '$600',
      'Yes',
      '87%',
      '2022-10-15',
      '2022-10-20',
      '2022-10-25',
      '2022-10-30',
      '$48.50',
    ],
    [
      'I90/03/70',
      'Emma Adams',
      '234 Oak Ln',
      '999-3333',
      '30/3/1997',
      'E9876-54321-09876',
      '2022/08/15',
      '2027/08/15',
      '2024/11/01',
      '$650',
      'No',
      '92%',
      '2022-11-15',
      '2022-11-20',
      '2022-11-25',
      '2022-11-30',
      '$53.50',
    ],
    [
      'E12/04/71',
      'Logan Turner',
      '567 Pine St',
      '555-4444',
      '22/6/1995',
      'L4321-56789-01234',
      '2022/09/20',
      '2027/09/20',
      '2025/12/01',
      '$800',
      'Yes',
      '89%',
      '2022-12-15',
      '2022-12-20',
      '2022-12-25',
      '2022-12-30',
      '$58.50',
    ],
    [
      'I34/05/72',
      'Mila Wilson',
      '890 Maple St',
      '888-7777',
      '14/10/1999',
      'M5678-90123-23456',
      '2022/10/12',
      '2027/10/12',
      '2025/01/15',
      '$750',
      'No',
      '93%',
      '2023-01-15',
      '2023-01-20',
      '2023-01-25',
      '2023-01-30',
      '$63.50',
    ],
    [
      'E56/06/73',
      'Owen Davis',
      '123 Cedar St',
      '777-9999',
      '5/8/1991',
      'O8765-43210-56789',
      '2022/11/05',
      '2027/11/05',
      '2025/04/01',
      '$700',
      'Yes',
      '85%',
      '2023-02-15',
      '2023-02-20',
      '2023-02-25',
      '2023-03-01',
      '$68.50',
    ],
    [
      'I78/07/74',
      'Luna Evans',
      '456 Oak Ln',
      '555-6666',
      '18/7/1994',
      'L9876-54321-87654',
      '2022/12/10',
      '2027/12/10',
      '2025/05/15',
      '$800',
      'No',
      '88%',
      '2023-03-15',
      '2023-03-20',
      '2023-03-25',
      '2023-03-30',
      '$73.50',
    ],
    [
      'E90/08/75',
      'Avery Robinson',
      '789 Cedar St',
      '999-6666',
      '22/9/1992',
      'A1234-56789-01234',
      '2023/01/18',
      '2028/01/18',
      '2025/06/01',
      '$750',
      'Yes',
      '95%',
      '2023-04-15',
      '2023-04-20',
      '2023-04-25',
      '2023-04-30',
      '$78.50',
    ],
    [
      'I12/09/76',
      'Liam Adams',
      '234 Birch St',
      '333-8888',
      '12/12/1997',
      'L9876-54321-87654',
      '2023/02/12',
      '2028/02/12',
      '2025/07/15',
      '$850',
      'No',
      '80%',
      '2023-05-15',
      '2023-05-20',
      '2023-05-25',
      '2023-05-30',
      '$83.50',
    ],
    [
      'E34/10/77',
      'Mila Turner',
      '567 Maple St',
      '555-3333',
      '28/5/1996',
      'M5678-90123-23456',
      '2023/03/10',
      '2028/03/10',
      '2025/08/01',
      '$800',
      'Yes',
      '90%',
      '2023-06-15',
      '2023-06-20',
      '2023-06-25',
      '2023-06-30',
      '$88.50',
    ],
    [
      'I56/11/78',
      'Oliver Robinson',
      '890 Oak Ln',
      '999-3333',
      '10/4/1993',
      'O2345-67890-12345',
      '2023/04/18',
      '2028/04/18',
      '2025/09/15',
      '$900',
      'No',
      '78%',
      '2023-07-15',
      '2023-07-20',
      '2023-07-25',
      '2023-07-30',
      '$93.50',
    ],
    [
      'E78/12/79',
      'Ella Adams',
      '123 Birch St',
      '777-4444',
      '15/8/1995',
      'E5678-90123-45678',
      '2023/05/20',
      '2028/05/20',
      '2025/10/15',
      '$850',
      'Yes',
      '85%',
      '2023-08-15',
      '2023-08-20',
      '2023-08-25',
      '2023-08-30',
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
      name: 'Dob',
      label: 'Dob',
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
