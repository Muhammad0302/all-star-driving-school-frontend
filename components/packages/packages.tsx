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
  const handleAddPackage = () => {
    router.push('/addpackage')
  }
  const data = [
    ['Package #1', '$589', '9 '],
    ['Package #2 ', '$739', '13 '],
    ['Package #3 ', '$895', '12 '],
    ['Package #2 (Online)', '$739', '16 '],
    ['Package #3 (Online)', '$895', '15 '],
    ['1 Hour Lesson', '$50', '1 Hour Lesson'],
    ['2 Hours And Road Test', '$200', '2 Hours And Road Test '],
    ['3 Hours Lesson + Road Test', '$250', '3 Hours Lesson + Road Test '],
    ['4 Hours Lesson + Road Test', '$300', '4 Hours Lesson + Road Test '],
    ['5 hour lesson + Road Test', '$330', '5 hour lesson + Road Test '],
    ['10 hour lesson + Road Test', '$550', '10 hour lesson + Road Test '],
    ['1 Hour Lesson', '$60', '1 Hour Lesson '],
    ['2 Hours And Road Test', '$250', '2 Hours And Road Test '],
    ['3 Hours Lesson + Road Test', '$300', '3 Hours Lesson + Road Test '],
    ['4 Hours Lesson + Road Test', '$360', '4 Hours Lesson + Road Test '],
    ['5 hour lesson + Road Test', '$400', '5 hour lesson + Road Test '],
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
                  <MenuItem onClick={handleAddPackage}>
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
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAddPackage}>
        + Add Package
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
