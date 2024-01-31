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
const PaymentList = () => {
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
  const handleAddIssueBook = () => {
    router.push('/addpayment')
  }
  const data = [
    [
      'I67/05/60',
      'John Doe',
      '123-456-7890',
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
      '2022-01-20',
      '2022-01-25',
      '2022-01-30',
      '$3.50',
    ],
    [
      'E12/06/61',
      'Jane Smith',
      '987-654-3210',
      '$1.50',
      '$1.75',
      '$2.00',
      '$2.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-02-10',
      '2022-02-15',
      '2022-02-20',
      '2022-02-25',
      '$7.50',
    ],
    [
      'I34/07/62',
      'Alice Brown',
      '111-222-3333',
      '$2.50',
      '$2.75',
      '$3.00',
      '$3.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-03-05',
      '2022-03-10',
      '2022-03-15',
      '2022-03-20',
      '$11.50',
    ],
    [
      'E56/08/63',
      'Bob Johnson',
      '555-666-7777',
      '$3.50',
      '$3.75',
      '$4.00',
      '$4.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-03-25',
      '2022-03-30',
      '2022-04-04',
      '2022-04-09',
      '$16.50',
    ],
    [
      'I78/09/64',
      'Charlie Davis',
      '999-888-7777',
      '$4.50',
      '$4.75',
      '$5.00',
      '$5.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-04-15',
      '2022-04-20',
      '2022-04-25',
      '2022-04-30',
      '$19.50',
    ],
    [
      'E90/10/65',
      'Eva Thomas',
      '123-987-4567',
      '$5.50',
      '$5.75',
      '$6.00',
      '$6.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-05-05',
      '2022-05-10',
      '2022-05-15',
      '2022-05-20',
      '$23.50',
    ],
    [
      'I12/11/66',
      'Frank Miller',
      '987-123-7890',
      '$6.50',
      '$6.75',
      '$7.00',
      '$7.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-05-25',
      '2022-05-30',
      '2022-06-04',
      '2022-06-09',
      '$27.50',
    ],
    [
      'E34/12/67',
      'Grace Wilson',
      '567-890-1234',
      '$7.50',
      '$7.75',
      '$8.00',
      '$8.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-06-15',
      '2022-06-20',
      '2022-06-25',
      '2022-06-30',
      '$31.50',
    ],
    [
      'I56/01/68',
      'Harry Lee',
      '123-456-7890',
      '$8.50',
      '$8.75',
      '$9.00',
      '$9.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-07-05',
      '2022-07-10',
      '2022-07-15',
      '2022-07-20',
      '$35.50',
    ],
    [
      'E78/02/69',
      'Ivy Turner',
      '345-678-9012',
      '$9.50',
      '$9.75',
      '$10.00',
      '$10.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-07-25',
      '2022-07-30',
      '2022-08-04',
      '2022-08-09',
      '$39.50',
    ],
    [
      'I90/03/70',
      'Jack Evans',
      '678-901-2345',
      '$10.50',
      '$10.75',
      '$11.00',
      '$11.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-08-15',
      '2022-08-20',
      '2022-08-25',
      '2022-08-30',
      '$43.50',
    ],
    [
      'E12/04/71',
      'Katherine Hall',
      '901-234-5678',
      '$11.50',
      '$11.75',
      '$12.00',
      '$12.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-09-05',
      '2022-09-10',
      '2022-09-15',
      '2022-09-20',
      '$47.50',
    ],
    [
      'I34/05/72',
      'Liam Brooks',
      '234-567-8901',
      '$12.50',
      '$12.75',
      '$13.00',
      '$13.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-09-25',
      '2022-09-30',
      '2022-10-05',
      '2022-10-10',
      '$51.50',
    ],
    [
      'E56/06/73',
      'Mia Taylor',
      '567-890-1234',
      '$13.50',
      '$13.75',
      '$14.00',
      '$14.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-10-15',
      '2022-10-20',
      '2022-10-25',
      '2022-10-30',
      '$55.50',
    ],
    [
      'I78/07/74',
      'Noah Adams',
      '890-123-4567',
      '$14.50',
      '$14.75',
      '$15.00',
      '$15.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-11-05',
      '2022-11-10',
      '2022-11-15',
      '2022-11-20',
      '$59.50',
    ],
    [
      'E90/08/75',
      'Olivia Clark',
      '123-456-7890',
      '$15.50',
      '$15.75',
      '$16.00',
      '$16.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-11-25',
      '2022-11-30',
      '2022-12-05',
      '2022-12-10',
      '$63.50',
    ],
    [
      'I12/09/76',
      'Peter Brown',
      '234-567-8901',
      '$16.50',
      '$16.75',
      '$17.00',
      '$17.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-12-15',
      '2022-12-20',
      '2022-12-25',
      '2022-12-30',
      '$67.50',
    ],
    [
      'E34/10/77',
      'Quinn Evans',
      '567-890-1234',
      '$17.50',
      '$17.75',
      '$18.00',
      '$18.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2023-01-05',
      '2023-01-10',
      '2023-01-15',
      '2023-01-20',
      '$71.50',
    ],
    [
      'I56/11/78',
      'Rachel Turner',
      '890-123-4567',
      '$18.50',
      '$18.75',
      '$19.00',
      '$19.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2023-01-25',
      '2023-01-30',
      '2023-02-04',
      '2023-02-09',
      '$75.50',
    ],
    [
      'E78/12/79',
      'Samuel Lee',
      '123-456-7890',
      '$19.50',
      '$19.75',
      '$20.00',
      '$20.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2023-02-15',
      '2023-02-20',
      '2023-02-25',
      '2023-03-02',
      '$79.50',
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
    {
      name: 'Payment2Date',
      label: 'Payment2 Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment3Date',
      label: 'Payment3 Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Payment4Date',
      label: 'Payment4 Date',
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: 'TotalPayments',
      label: 'Total Payments',
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
                  <MenuItem onClick={handleAddIssueBook}>
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
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAddIssueBook}>
        + Add Payment
      </Button>
    )
  }

  const options = {
    filterType: 'checkbox' as const,
    customToolbar: HeaderElements,
    customTableBodyWidth: '800px',

    print: false,
    filter: false,
  }
  return (
    <>
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 mb-[1rem] text-[20x] sm:text-[19px] md:text-[23px] lg:text-[26px] text-center font-russoone font-normal'>
          Payment List
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default PaymentList
