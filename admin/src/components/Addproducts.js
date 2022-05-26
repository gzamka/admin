import { AccountProfile } from './account/account-profile';
import { AccountProfileDetails } from './account/account-profile-details';
import { Box, Container, Grid, Typography, Button, Alert } from '@mui/material';
import { Add_doc } from './Add_doc';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { DocUpdate } from './Add_doc'
export const AddProduct = ({ setaddproduct, num, product, setbool, bool, col, addproduct }) => {
    const id = bool && product.id
    const [image, setimage] = useState(bool ? product.img : [])
    const [values, setValues] = useState({
        title: bool ? product.title : "",
        description: bool ? product.description : "",
    });
    const [open, setOpen] = useState(false);
    const fn = async () => {
        if (image.length === 0) alert('You must add image to post') /// if image didn't uploaded 
        setOpen(true)
        setimage('')
        setValues({ title: "", description: "" })
        await Add_doc({ values, image }, col)
        setOpen(false)
        if (bool) setbool(false)
        if (addproduct) setaddproduct(false)
    }
    const clear = () => {
        if (bool) setbool(false) ///edit product bool
        if (addproduct) setaddproduct(false)  ///add product 
    }
    const update = () => {
        DocUpdate({ values, image, id }, col)
        if (bool) setbool(false)
    }
    return (
        <Container maxWidth="lg" sx={{ marginTop: "10px" }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
                    {addproduct ? "Add" : "Edit"}
                </Typography>
                {num === 1 &&
                    <Box sx={{ m: 1 }}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={clear}
                        >
                            x
                        </Button>
                    </Box>
                }
            </Box>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={4}
                    md={6}
                    xs={12}
                >
                    <AccountProfile image={image} setimage={setimage} bool={bool} />
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={6}
                    xs={12}
                >
                    <AccountProfileDetails setValues={setValues} values={values} fn={fn} bool={bool} update={update} col={col} />
                </Grid>
            </Grid>
        </Container>
    )
}