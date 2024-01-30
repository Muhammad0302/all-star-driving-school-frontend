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
const StdsIntrsLssnCompleted = () => {
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
      '$0.50',
      '$0.75',
      '$1.00',
      '$1.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-01-12',
      '$3.50',
    ],
    [
      'E12/06/61',
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
      '$7.50',
    ],
    [
      'I34/07/62',
      'Alice Brown',
      '$2.50',
      '$2.75',
      '$3.00',
      '$3.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-01-20',
      '$11.50',
    ],
    [
      'E56/08/63',
      'Bob Johnson',
      '$3.50',
      '$3.75',
      '$4.00',
      '$4.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-01-22',
      '$16.50',
    ],
    [
      'I78/09/64',
      'Charlie Davis',
      '$4.50',
      '$4.75',
      '$5.00',
      '$5.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-01-26',
      '$19.50',
    ],
    [
      'E90/10/65',
      'Eva Thomas',
      '$5.50',
      '$5.75',
      '$6.00',
      '$6.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-01-30',
      '$23.50',
    ],
    [
      'I12/11/66',
      'Frank Miller',
      '$6.50',
      '$6.75',
      '$7.00',
      '$7.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-02-03',
      '$27.50',
    ],
    [
      'E34/12/67',
      'Grace Wilson',
      '$7.50',
      '$7.75',
      '$8.00',
      '$8.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-02-07',
      '$31.50',
    ],
    [
      'I56/01/68',
      'Harry Lee',
      '$8.50',
      '$8.75',
      '$9.00',
      '$9.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-02-11',
      '$35.50',
    ],
    [
      'E78/02/69',
      'Ivy Turner',
      '$9.50',
      '$9.75',
      '$10.00',
      '$10.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-02-15',
      '$39.50',
    ],
    [
      'I90/03/70',
      'Jack Evans',
      '$10.50',
      '$10.75',
      '$11.00',
      '$11.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-02-19',
      '$43.50',
    ],
    [
      'E12/04/71',
      'Katherine Hall',
      '$11.50',
      '$11.75',
      '$12.00',
      '$12.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-02-23',
      '$47.50',
    ],
    [
      'I34/05/72',
      'Liam Brooks',
      '$12.50',
      '$12.75',
      '$13.00',
      '$13.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-02-27',
      '$51.50',
    ],
    [
      'E56/06/73',
      'Mia Taylor',
      '$13.50',
      '$13.75',
      '$14.00',
      '$14.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-03-03',
      '$55.50',
    ],
    [
      'I78/07/74',
      'Noah Adams',
      '$14.50',
      '$14.75',
      '$15.00',
      '$15.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-03-07',
      '$59.50',
    ],
    [
      'E90/08/75',
      'Olivia Clark',
      '$15.50',
      '$15.75',
      '$16.00',
      '$16.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-03-11',
      '$63.50',
    ],
    [
      'I12/09/76',
      'Peter Brown',
      '$16.50',
      '$16.75',
      '$17.00',
      '$17.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-03-15',
      '$67.50',
    ],
    [
      'E34/10/77',
      'Quinn Evans',
      '$17.50',
      '$17.75',
      '$18.00',
      '$18.25',
      'Debit Card',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Debit Card',
      '2022-03-19',
      '$71.50',
    ],
    [
      'I56/11/78',
      'Rachel Turner',
      '$18.50',
      '$18.75',
      '$19.00',
      '$19.25',
      'Credit Card',
      'Cash',
      'Debit Card',
      'Credit Card',
      'Book',
      '2022-03-23',
      '$75.50',
    ],
    [
      'E78/12/79',
      'Samuel Lee',
      '$19.50',
      '$19.75',
      '$20.00',
      '$20.25',
      'Cash',
      'Credit Card',
      'Debit Card',
      'Cash',
      'Cash',
      '2022-03-27',
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
      <Box sx={{ padding: '24px' }}>
        <div className='mt-10 mb-[1rem] text-[20x] sm:text-[19px] md:text-[23px] lg:text-[26px] text-center font-russoone font-normal'>
          Payment List
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default StdsIntrsLssnCompleted
