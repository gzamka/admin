import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import Button from '@mui/material/Button';
import { AddProduct } from '../../components/Addproducts'
import { useState } from 'react';
import { DeleteProduct } from '../Add_doc';
export const ProductCard = ({ product, col }) => {
  // console.log(product);
  const [bool, setbool] = useState(false)
  var timestamp = product.date
  var date = new Date(timestamp);
  let edit = () => setbool(true)
  let deleteProduct = () => {
    if (confirm('Are you sure?')) DeleteProduct([product], col)
  }
  let arr = ['1', '2', "3", "4"]
  arr.unshift(product.img)
  const a = arr.flat()
  product.img.forEach((el) => {
    a.pop()
  })
  if (bool) return <AddProduct product={product} bool={bool} setbool={setbool} col={col} num={1} />
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '10px'
        }}
      >
        <CardContent sx={{ height: "250px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  rowGap: '10px',
                  columnGap: '10px'
                }}
              >
                {a.map((el, i) => {
                  return <Box
                    key={i}
                  >
                    <Avatar
                      alt="#"
                      src={product.img && el.imgUrl}
                      variant="square"
                      sx={{
                        width: '95px',
                        height: '95px',
                        borderRadius: "10px"
                      }}
                    />
                  </Box>
                })}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", width: "70%", height: '200px', overflowY: 'scroll' }}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                {product.title}
              </Typography>
              <Typography
                color="textPrimary"
                variant="h7"
              >
                {product.description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2, height: '60px', paddingTop: '12px' }}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <ClockIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {date.getDate() +
                  "/" + (date.getMonth() + 1) +
                  "/" + date.getFullYear() +
                  " " + date.getHours() +
                  ":" + date.getMinutes()}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Button variant="text" onClick={edit}>Edit</Button>
              <Button variant="text" onClick={deleteProduct}>Delete</Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  )
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
