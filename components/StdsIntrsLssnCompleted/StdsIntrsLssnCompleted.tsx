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
  const handleAddLessonCompletion = () => {
    router.push('/addlessoncompletion')
  }
  const data = [
    ['3847', 'Instructor 1', 'I24/12/1', 'John Doe', '2', '10', 'Yes'],
    ['3848', 'Instructor 2', 'I24/12/2', 'Jane Smith', '3', '8', 'No'],
    ['3849', 'Instructor 3', 'I24/12/3', 'Alice Brown', '2', '12', 'Yes'],
    ['3850', 'Instructor 4', 'I24/12/4', 'Bob Johnson', '1', '15', 'No'],
    ['3851', 'Instructor 5', 'I24/12/5', 'Charlie Davis', '1', '18', 'Yes'],
    ['3852', 'Instructor 6', 'I24/12/6', 'Eva Thomas', '1', '20', 'No'],
    ['3853', 'Instructor 7', 'I24/12/7', 'Frank Miller', '2', '22', 'Yes'],
    ['3854', 'Instructor 8', 'I24/12/8', 'Grace Wilson', '2', '25', 'No'],
    ['3855', 'Instructor 9', 'I24/12/9', 'Harry Lee', '2', '28', 'Yes'],
    ['3856', 'Instructor 10', 'I24/12/10', 'Ivy Turner', '3', '30', 'No'],
    ['3857', 'Instructor 11', 'I24/12/11', 'Jack Evans', '2', '32', 'Yes'],
    ['3858', 'Instructor 12', 'E24/12/12', 'Katherine Hall', '1', '35', 'No'],
    ['3859', 'Instructor 13', 'E24/12/13', 'Liam Brooks', '1', '38', 'Yes'],
    ['3860', 'Instructor 14', 'E24/12/14', 'Mia Taylor', '$13.50', '$13.75', '$14.00', '40', 'No'],
    ['3861', 'Instructor 15', 'E24/12/15', 'Noah Adams', '$14.50', '$14.75', '$15.00', '42', 'Yes'],
    ['3862', 'Instructor 16', 'E24/12/16', 'Olivia Clark', '2', '45', 'No'],
    ['3863', 'Instructor 17', 'E24/12/17', 'Peter Brown', '3', '48', 'Yes'],
    ['3864', 'Instructor 18', 'E24/12/18', 'Quinn Evans', '$17.50', '$17.75', '$18.00', '50', 'No'],
    ['3865', 'Instructor 19', 'E24/12/9', 'Rachel Turner', '3', '52', 'Yes'],
    ['3866', 'Instructor 20', 'E24/12/20', 'Samuel Lee', '$19.50', '$19.75', '$20.00', '55', 'No'],
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
      name: 'Package',
      label: 'Package',
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: 'LessonsCompleted',
      label: 'Lessons Completed',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'RoadTestCompleted',
      label: 'Road Test Completed',
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
                  <MenuItem onClick={handleAddLessonCompletion}>
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
      <Button type='button' sx={{ color: '#f23d4d' }} onClick={handleAddLessonCompletion}>
        + Add Lesson Completion
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
          Students/Instructors Lessons Completion List
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default StdsIntrsLssnCompleted
