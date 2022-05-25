import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Mailcustomers } from '../components/customer/mailcustomers';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
const Customers = () => {
  return (
    <>
      <Head>
        <title>
          Customers | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3,height: '400px' }}>
            <Mailcustomers/>
          </Box>
        </Container>
      </Box>
    </>
  )
};

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
