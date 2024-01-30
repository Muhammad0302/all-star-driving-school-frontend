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
    ['3847', 'Instructor 1', 'I67/05/60', 'John Doe', '$0.50', '$0.75', '$1.00', '10', 'Yes'],
    ['3848', 'Instructor 2', 'E12/06/61', 'Jane Smith', '$1.50', '$1.75', '$2.00', '8', 'No'],
    ['3849', 'Instructor 3', 'I34/07/62', 'Alice Brown', '$2.50', '$2.75', '$3.00', '12', 'Yes'],
    ['3850', 'Instructor 4', 'E56/08/63', 'Bob Johnson', '$3.50', '$3.75', '$4.00', '15', 'No'],
    ['3851', 'Instructor 5', 'I78/09/64', 'Charlie Davis', '$4.50', '$4.75', '$5.00', '18', 'Yes'],
    ['3852', 'Instructor 6', 'E90/10/65', 'Eva Thomas', '$5.50', '$5.75', '$6.00', '20', 'No'],
    ['3853', 'Instructor 7', 'I12/11/66', 'Frank Miller', '$6.50', '$6.75', '$7.00', '22', 'Yes'],
    ['3854', 'Instructor 8', 'E34/12/67', 'Grace Wilson', '$7.50', '$7.75', '$8.00', '25', 'No'],
    ['3855', 'Instructor 9', 'I56/01/68', 'Harry Lee', '$8.50', '$8.75', '$9.00', '28', 'Yes'],
    ['3856', 'Instructor 10', 'E78/02/69', 'Ivy Turner', '$9.50', '$9.75', '$10.00', '30', 'No'],
    ['3857', 'Instructor 11', 'I90/03/70', 'Jack Evans', '$10.50', '$10.75', '$11.00', '32', 'Yes'],
    [
      '3858',
      'Instructor 12',
      'E12/04/71',
      'Katherine Hall',
      '$11.50',
      '$11.75',
      '$12.00',
      '35',
      'No',
    ],
    [
      '3859',
      'Instructor 13',
      'I34/05/72',
      'Liam Brooks',
      '$12.50',
      '$12.75',
      '$13.00',
      '38',
      'Yes',
    ],
    ['3860', 'Instructor 14', 'E56/06/73', 'Mia Taylor', '$13.50', '$13.75', '$14.00', '40', 'No'],
    ['3861', 'Instructor 15', 'I78/07/74', 'Noah Adams', '$14.50', '$14.75', '$15.00', '42', 'Yes'],
    [
      '3862',
      'Instructor 16',
      'E90/08/75',
      'Olivia Clark',
      '$15.50',
      '$15.75',
      '$16.00',
      '45',
      'No',
    ],
    [
      '3863',
      'Instructor 17',
      'I12/09/76',
      'Peter Brown',
      '$16.50',
      '$16.75',
      '$17.00',
      '48',
      'Yes',
    ],
    ['3864', 'Instructor 18', 'E34/10/77', 'Quinn Evans', '$17.50', '$17.75', '$18.00', '50', 'No'],
    [
      '3865',
      'Instructor 19',
      'I56/11/78',
      'Rachel Turner',
      '$18.50',
      '$18.75',
      '$19.00',
      '52',
      'Yes',
    ],
    ['3866', 'Instructor 20', 'E78/12/79', 'Samuel Lee', '$19.50', '$19.75', '$20.00', '55', 'No'],
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
      name: 'Package1',
      label: 'Package 1',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Package2',
      label: 'Package 2',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Package3',
      label: 'Package 3',
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
          Students/Instructors Lessons completed List
        </div>
        <MUIDataTable title={''} data={data} columns={columns} options={options} />
      </Box>
    </>
  )
}

export default StdsIntrsLssnCompleted
