import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import Button from '@mui/material/Button';
import { AddProduct } from '../../components/Addproducts'
import { useState } from 'react';
import { DeleteProduct } from '../Add_doc';
export const ProductCard = ({ product, ...rest }) => {
  const [bool, setbool] = useState(false)
  var timestamp = product.date
  console.log(product);
  let currentTime = Date.now()
  var date = new Date(currentTime - timestamp);
  let edit = () => {
    setbool(!bool)
  }
  let deleteProduct = () => {
    DeleteProduct(product, 'products')
  }
  if (bool) {
    return <AddProduct titlevalue={product.title} descriptionval={product.description} images={product.img} bool={bool} id={product.id} />
  }

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '400px',
          width: '90vw'
        }}
        {...rest}
      >
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column", }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3,
                }}
              >
                <Avatar
                  alt="Product"
                  src={product.img[0].imgUrl}
                  variant="square"
                  sx={{
                    width: '150px',
                    height: '150px'
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",

                }}
              >
                {product.img.slice(1).map((el, i) => {
                  return <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginLeft: "10px",
                      pb: 3,
                    }}
                    key={i}
                  >
                    <Avatar
                      alt="Product"
                      src={el.imgUrl}
                      variant="square"
                      sx={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                  </Box>
                })}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Title:
              </Typography>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                {product.title}
              </Typography>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Description:
              </Typography>
              <Typography
                align="center"
                color="textPrimary"
                variant="h6"
              >
                {product.description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
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
                Updated {date.getMinutes()} min ago
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
