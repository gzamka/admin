import { AccountProfile } from './account/account-profile';
import { AccountProfileDetails } from './account/account-profile-details';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Add_doc } from './Add_doc';
import { useState } from 'react';
export const AddProduct = ({ setaddproduct, num }) => {
    const [image, setimage] = useState([])
    const [values, setValues] = useState({
        title: "",
        description: "",
    });
    const fn = () => {
        Add_doc({ values, image })
        setimage('')
        setValues({
            title: "",
            description: "",
        })
    }
    const click = () => {
        setaddproduct(false)
    }
    return (
        <>
            <Container maxWidth="lg">
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
                        Add
                    </Typography>
                    {num === 1 &&
                        <Box sx={{ m: 1 }}>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={click}
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
                        <AccountProfile image={image} setimage={setimage} />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <AccountProfileDetails setValues={setValues} values={values} fn={fn} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}