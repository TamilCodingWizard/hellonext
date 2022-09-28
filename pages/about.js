import { Stack, Typography } from "@mui/material";
import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keyword" content="about" />
      </Head>

      <Stack spacing={5} mt={10} mb={20}>
        <Typography variant="h3">About</Typography>
        <Typography color="gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          perspiciatis nam recusandae facere magnam molestias at aut enim
          fugiat, excepturi laboriosam odit sit fuga incidunt accusantium
          quaerat dignissimos ipsam error.
        </Typography>
      </Stack>
    </>
  );
};

export default About;
