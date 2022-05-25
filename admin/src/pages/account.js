import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddProduct } from 'src/components/Addproducts';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { useGetItems } from 'src/components/Add_doc';
import { useState } from 'react';
const Account = () => {
  const { docs } = useGetItems('products')
  const [bool, setboolean] = useState(false)
  return (
    <>
      <Head>
        <title>
          Account | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        {!bool && <AddProduct />}
      </Box>
      <Box sx={{ mt: 3 }}>
        <CustomerListResults customers={docs} setboolean={setboolean} bool={bool} />
      </Box>
    </>
  )
};

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;
