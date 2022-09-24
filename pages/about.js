import { Stack, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Stack spacing={5} mt={10} mb={20}>
      <Typography variant='h3'>About</Typography>
      <Typography color='gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis nam recusandae facere magnam molestias at aut enim fugiat, excepturi laboriosam odit sit fuga incidunt accusantium quaerat dignissimos ipsam error.</Typography>
    </Stack>
  )
}

export default About