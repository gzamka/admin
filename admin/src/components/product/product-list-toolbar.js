import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { AddProduct } from '../Addproducts';
import { Search as SearchIcon } from '../../icons/search';
import { useState } from 'react';
export const ProductListToolbar = ({ children, setfilter, col }) => {
  const [addproduct, setaddproduct] = useState(false)
  const Addproduct = () => setaddproduct(true)
  if (addproduct) return <AddProduct setaddproduct={setaddproduct} col={col} addproduct={addproduct} num={1} />
  return (
    <Box >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          {col === "products" ? "Products" : "News"}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={Addproduct}
          >
            {col === "products" ? "Add products" : "Add article"}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                onChange={(e) => setfilter(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
        {children}
      </Box>
    </Box>


  )
};
