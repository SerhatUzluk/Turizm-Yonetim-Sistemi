import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Ratings({point}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >           
      <Rating name="read-only" value={point} readOnly precision={0.5} size='large'/>        
    </Box>
  );
}

export default Ratings;