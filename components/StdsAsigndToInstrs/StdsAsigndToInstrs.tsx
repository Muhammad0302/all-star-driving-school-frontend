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
const StdsAsigndToInstrs = () => {
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
    ['3847', 'John Doe', 'I67/05/60', 'Emma Watson'],
    ['2938', 'Jane Smith', 'E12/06/61', 'Ian Johnson'],
    ['4756', 'Alice Brown', 'I34/07/62', 'Elijah Taylor'],
    ['5923', 'Bob Johnson', 'E56/08/63', 'Isabel Turner'],
    ['3847', 'Charlie Davis', 'I78/09/64', 'Eva Clark'],
    ['2938', 'Eva Thomas', 'E90/10/65', 'Frank Miller'],
    ['4756', 'Frank Miller', 'I12/11/66', 'Grace Wilson'],
    ['5923', 'Grace Wilson', 'E34/12/67', 'Harry Lee'],
    ['3847', 'Harry Lee', 'I56/01/68', 'Ivy Turner'],
    ['2938', 'Ivy Turner', 'E78/02/69', 'Jack Evans'],
    ['4756', 'Jack Evans', 'I90/03/70', 'Katherine Hall'],
    ['5923', 'Katherine Hall', 'E12/04/71', 'Liam Brooks'],
    ['3847', 'Liam Brooks', 'I34/05/72', 'Mia Taylor'],
    ['2938', 'Mia Taylor', 'E56/06/73', 'Noah Adams'],
    ['4756', 'Noah Adams', 'I78/07/74', 'Olivia Clark'],
    ['5923', 'Olivia Clark', 'E90/08/75', 'Peter Brown'],
    ['3847', 'Peter Brown', 'I12/09/76', 'Quinn Evans'],
    ['2938', 'Quinn Evans', 'E34/10/77', 'Rachel Turner'],
    ['4756', 'Rachel Turner', 'I56/11/78', 'Samuel Lee'],
    ['5923', 'Samuel Lee', 'E78/12/79', 'Sophia Smith'],
  ]

  const columns = [
    {
      name: 'InstructorID',
      label: 'Instructor ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'InstructorName',
      label: 'Instructor Name',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'StudentID',
      label: 'Student ID',
      options: {
        filter: true,
        sort: false,
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
          Students Assigned to Instructors List
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default StdsAsigndToInstrs
