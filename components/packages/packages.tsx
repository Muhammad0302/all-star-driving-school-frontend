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
const Package = () => {
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
  const handleAssignInstructor = () => {
    router.push('/assigninstructor')
  }
  const data = [
    ['John Doe', '$50', '5 '],
    ['Jane Smith', '$60', '6 '],
    ['Alice Brown', '$55', '4 '],
    ['Bob Johnson', '$70', '8 '],
    ['Charlie Davis', '$65', '7 '],
    ['Eva Thomas', '$45', '3 '],
    ['Frank Miller', '$75', '9 '],
    ['Grace Wilson', '$80', '10 '],
    ['Harry Lee', '$55', '4 '],
    ['Ivy Turner', '$60', '6 '],
    ['Jack Evans', '$70', '8 '],
    ['Katherine Hall', '$50', '5 '],
    ['Liam Brooks', '$65', '7 '],
    ['Mia Taylor', '$45', '3 '],
    ['Noah Adams', '$75', '9 '],
    ['Olivia Clark', '$80', '10 '],
    ['Peter Brown', '$55', '4 '],
    ['Quinn Evans', '$60', '6 '],
    ['Rachel Turner', '$70', '8 '],
    ['Samuel Lee', '$50', '5 '],
  ]

  const columns = [
    {
      name: 'Name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Price',
      label: 'Price',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'NoOfLessons',
      label: 'No. of Lessons',
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
                  <MenuItem onClick={handleAssignInstructor}>
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
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAssignInstructor}>
        + Assign Instructor
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
          Packages
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default Package
