import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useGetItems } from 'src/components/Add_doc';
import { useState } from 'react';
const Products = () => {
  const { docs } = useGetItems('products')
  const [addproduct, setaddproduct] = useState(false)
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
                docs.map((product, i) => <ProductCard key={i}  product={product}/>)
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
