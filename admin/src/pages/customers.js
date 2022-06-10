import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Mailcustomers } from '../components/customer/mailcustomers';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { userAuth } from '../components/_userAuth';
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
          <Box sx={{ mt: 3, height: '400px', width: '500px' }}>
            <Mailcustomers />
          </Box>
        </Container>
      </Box>
    </>
  )
};
const customersauth = userAuth(Customers)
customersauth.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default customersauth;
