import React from 'react';
import Layout from '../src/components/Layout';
import Map from '../src/components/Map';
import Box from '@material-ui/core/Box';




export default function Home() {
  return (
    <>
        <Box component="div" overflow="hidden">
            <Layout title="MyPlace"></Layout>
            <Map></Map>
        </Box>
    </>
  );
}
