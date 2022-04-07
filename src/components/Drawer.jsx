import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import React from 'react'
const drawerWidth= 240;
drawer:{
    drawerWidth
}

const Drawer = () => {
  return (
    <Drawer className={classes.drawer}
    variant="permanent"
    anchor="left">
        <div>
            <Typography variant="h5">
                drawer

            </Typography>
        </div>
    </Drawer>
  )
}

export default Drawer
