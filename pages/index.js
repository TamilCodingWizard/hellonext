import { Box, Chip, Stack,Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{marginBottom:20}}>
      <Head>
        <title>Next | Home</title>
        <meta name="keyword" content="home"/>
      </Head>
      <Stack alignItems='center' justifyContent='center'>
        <Image src="/1.png" width={500} height={250} margintop={20} />
        <Stack alignSelf='flex-start' spacing={2} mb={10}>
          <Typography variant="h3">Introduction</Typography>
          <Typography color="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            perspiciatis nam recusandae facere magnam molestias at aut enim
            fugiat, excepturi laboriosam odit sit fuga incidunt accusantium
            quaerat dignissimos ipsam error.
          </Typography>
        </Stack>
        <Link href="/nested">
          <a><Chip label="Go to Users"/></a>
        </Link>
      </Stack>
    </Box>
  );
}
