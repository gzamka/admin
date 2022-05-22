import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { db } from '../firebase/firebase'
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const Products = () => {
  const [data, setdata] = useState([])
  useEffect(async () => {
    const docs = await getDocs(collection(db, "products"))
    setdata('')
    docs.forEach((doc) => {
      setdata((data) => [...data, { id: doc.id, ...doc.data() }])
    })
  }, [])
  console.log(data);
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
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {data &&
                <>
              {data.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <ProductCard product={product} />
                  </Grid>
                  ))}
                </>
              }
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box>
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
