import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PaymentIcon from '@mui/icons-material/Payment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AssignmentIcon from '@mui/icons-material/Assignment'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import Groups2Icon from '@mui/icons-material/Groups2'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import ReportIcon from '@mui/icons-material/Report'
import './styles.css'
import { useRouter } from 'next/navigation'
const drawerWidth = 240

const Sidebar = () => {
  const router = useRouter()
  const handleSiderNavigation = (itemText: string) => {
    if (itemText == 'Dashboard') {
      router.push('/')
    } else if (itemText === 'instructors') {
      router.push('/instructors')
    } else if (itemText === 'students') {
      router.push('/students')
    } else if (itemText === 'payments') {
      router.push('/payments')
    } else if (itemText === 'stdsasigndtoinstrs') {
      router.push('/stdsasigndtoinstrs')
    } else if (itemText === 'stdsintrslssncompleted') {
      router.push('/stdsintrslssncompleted')
    } else if (itemText === 'pvtlssnasgndtoinstrs') {
      router.push('/pvtlssnasgndtoinstrs')
    } else if (itemText === 'report') {
      router.push('/report')
    }
  }
  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          Top: '100px',
          //   zIndex: 2,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {/* <Toolbar /> */}
        <div className='flex justify-center items-center mt-2'>
          <img src='Images/logo.jpg' className=' w-[11rem]' />
        </div>
        <Box sx={{ overflow: 'auto', marginTop: '2rem' }}>
          <List>
            <ListItem key='Dashboard' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Instructors' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('instructors')}>
                <ListItemIcon>
                  <PeopleAltIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Instructors' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Students' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('students')}>
                <ListItemIcon>
                  <PeopleAltIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students' />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem key='payments' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('payments')}>
                <ListItemIcon>
                  <PaymentIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Payments' />
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Divider /> */}
          <List>
            <ListItem key='stdsasigndtoinstrs' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('stdsasigndtoinstrs')}>
                <ListItemIcon>
                  <AssignmentIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students Assigned to Instructors' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key='stdsintrslssncompleted' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('stdsintrslssncompleted')}>
                <ListItemIcon>
                  <LibraryAddCheckIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students/Instructors Lessons Completed' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key='pvtlssnasgndtoinstrs' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('pvtlssnasgndtoinstrs')}>
                <ListItemIcon>
                  <AssignmentIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Private Lessons Assigned to Instrs' />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem key='report' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('report')}>
                <ListItemIcon>
                  <ReportIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Report' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
