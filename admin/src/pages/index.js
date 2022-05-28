import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useGetItems } from 'src/components/Add_doc';
import { useState } from 'react';
import { userAuth } from '../components/_userAuth';
const Products = () => {
  const col = "products"
  const { docs } = useGetItems(col)
  const [filter, setfilter] = useState('')
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
          <ProductListToolbar col={col} setfilter={setfilter}>
            {docs && docs.filter((el) => {
              return el.title ? el.title.toLowerCase().includes(filter) : el
            }).map((el, i) => {
              return <Box key={i} sx={{ pt: 3 }}>
                <ProductCard col={col} product={el} />
              </Box>
            })}
          </ProductListToolbar>
        </Container>
      </Box>
    </>
  )
};
const Productsauth = userAuth(Products)
Productsauth.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Productsauth;
