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
import PaymentsIcon from '@mui/icons-material/Payments'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Groups2Icon from '@mui/icons-material/Groups2'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import { useRouter } from 'next/navigation'
const drawerWidth = 240

const Sidebar = () => {
  const router = useRouter()
  const handleSiderNavigation = (itemText: string) => {
    if (itemText == 'Dashboard') {
      router.push('/')
    } else if (itemText === 'instructors') {
      router.push('/')
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
            {/* <ListItem key='Dashboard' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('Dashboard')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem> */}
            <ListItem key='Books' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('instructors')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Instructors' />
              </ListItemButton>
            </ListItem>
            <ListItem key='Members' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('students')}>
                <ListItemIcon>
                  <DashboardIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students' />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('payments')}>
                <ListItemIcon>
                  <PaymentsIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Payments' />
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Divider /> */}
          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('stdsasigndtoinstrs')}>
                <ListItemIcon>
                  <FeaturedPlayListIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students Assigned to Instructors' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('stdsintrslssncompleted')}>
                <ListItemIcon>
                  <FeaturedPlayListIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Students/Instructors Lessons Completed' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key='Issue Book' disablePadding>
              <ListItemButton onClick={() => handleSiderNavigation('pvtlssnasgndtoinstrs')}>
                <ListItemIcon>
                  <FeaturedPlayListIcon />{' '}
                </ListItemIcon>
                <ListItemText primary='Private Lessons Assigned to Instrs' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
