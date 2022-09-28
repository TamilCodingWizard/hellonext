

import { Typography,Button} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PageNotFound = () => {

  const router = useRouter()

  useEffect(() => {
    const id = setTimeout(()=> {
        router.push('/')
    },3000)

    return () => clearTimeout(id)

  },[])

  return (
    <Box sx={{margin:20}}>
        <Typography variant='h5'>Whoops! Page not found</Typography>
        <Link href='/'><a><Button variant='text'>Go to Home</Button></a></Link>
    </Box>
  )
}

export default PageNotFound