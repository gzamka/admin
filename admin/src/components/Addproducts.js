import { AccountProfile } from './account/account-profile';
import { AccountProfileDetails } from './account/account-profile-details';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Add_doc } from './Add_doc';
import { useState } from 'react';
import { DocUpdate } from './Add_doc'
export const AddProduct = ({ setaddproduct, num, product, setbool, bool, addproduct, news, setNews }) => {
    if (!bool) bool = news
    const id = product && product.id
    const [image, setimage] = useState(bool ? product.img : [])
    const [values, setValues] = useState({
        title: bool ? product.title : "",
        description: bool ? product.description : "",
    });
    const fn = () => {
        Add_doc({ values, image }, "products")
        setimage('')
        setaddproduct(false)
        setValues({
            title: "",
            description: "",
        })
    }
    const clear = () => {
        if (news) return setNews(false)
        if (bool) setbool(false)
        if (addproduct) setaddproduct(false)
    }
    const update = () => DocUpdate({ values, image, id }, 'products')
    return (
        <Container maxWidth="lg" sx={{ marginTop: "10px" }}>
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
                    <AccountProfileDetails setValues={setValues} values={values} fn={fn} bool={bool} update={update} />
                </Grid>
            </Grid>
        </Container>
    )
}