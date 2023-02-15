import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} postion="relative" p="20px">

            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>Fitness Videos</Typography>

            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Get Fit, Have Fun <br />
      And Repeat
    </Typography>

    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises
    </Typography>
    <Button variant="contained" color='error'>
        View Videos
    </Button>

        </Box>
    )
}

export default HeroBanner;