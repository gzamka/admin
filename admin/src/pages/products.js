import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useGetItems } from 'src/components/Add_doc';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { customers } from '../__mocks__/customers';
const Products = () => {
  const { docs } = useGetItems('products')
  console.log(docs, ' -- - hshs');
  return (
    <>
      <Head>
        <title>
          Products | Material Kit
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
          <ProductListToolbar>
            <Box sx={{ pt: 3 }}>
              {docs &&
                docs.map((product, i) => <ProductCard key={i} product={product} />)
              }
            </Box>
          </ProductListToolbar>

        </Container>
      </Box>
    </>)
};

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
