import React from 'react'
import {useList} from "@pankod/refine-core";
import { Typography, Box, Stack } from '@pankod/refine-mui'

import {
  PieChart, 
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142d"}>
      Dashboard
      </Typography>
      </Box>
  )
}

export default Home