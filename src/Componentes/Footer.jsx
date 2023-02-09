import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box xs={12}>
      <BottomNavigation sx={{ background: "black"}}
      style={{
        bottom: "0px",
        position: "fixed",
        padding:'1rem',
        width: "100%",
        overflow: "hidden",
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ color:"white" }} label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction sx={{ color:"white" }} label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction sx={{ color:"white" }} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}