import { AccountProfile } from './account/account-profile';
import { AccountProfileDetails } from './account/account-profile-details';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Add_doc } from './Add_doc';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { DocUpdate } from './Add_doc'
export const AddProduct = ({ setaddproduct, num, product, setbool, bool, col, addproduct }) => {
    const id = bool && product.id
    const [image, setimage] = useState(bool ? product.img : [])
    const [values, setValues] = useState(bool ? product.title : "");
    const [description, setdescription] = useState(bool ? product.description : "")
    const [open, setOpen] = useState(false);
    const fn = async () => {
        if (image.length === 0) return alert('You must add an image to post') /// if image didn't uploaded 
        if (image.length > 4) return alert("You can upload only 4 images at a time")
        setOpen(true)
        setimage('')
        setValues("")
        setdescription("")
        await Add_doc({ values, description, image }, col)
        setOpen(false)
        if (bool) setbool(false)
        if (addproduct) setaddproduct(false)
    }
    const clear = () => {
        if (bool) setbool(false) ///edit product bool
        if (addproduct) setaddproduct(false)  ///add product 
    }
    const update = async () => {
        if (image.length === 0) return alert("Your post doesn't have an image!")
        await DocUpdate({ values,description, image, id }, col)
        // if (bool) setbool(false)
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
                    <AccountProfileDetails setValues={setValues} description={description} setdescription={setdescription} values={values} fn={fn} bool={bool} update={update} col={col} />
                </Grid>
            </Grid>
        </Container>
    )
}