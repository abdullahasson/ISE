import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import "../Drawer.css"
// import Divider from '@mui/material/Divider';


// font Awsome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Drawe() {

    const [state, setState] = React.useState({
        right: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} className="setting">
        <div className="sett">
          <div className="title p-4">
            <h1 className='text-white font-extrabold text-center text-4xl'>Settings</h1>
          </div>

          <div className="content">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

            <div className="setting fixed top-1" onClick={toggleDrawer(anchor, true)}>
                <div className="icon text-white">
                    <FontAwesomeIcon icon={faGear} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} /> 
                </div>
            </div>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}