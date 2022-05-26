import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
export const AccountProfileDetails = ({setValues, values, fn,bool,update,col}) => {
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form autoComplete="off" noValidate >
      <Card>
        <CardHeader title={col==='news' ? "Add news" : "Add product"} />
        <Divider />
        <CardContent>
          <Grid container spacing={3} style={styles.container}>
            <Grid item md={6} xs={12}>
              <TextField
                maxRows={1}
                fullWidth
                label="News title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Box style={styles.buttonstyle}>
              <TextField
                multiline
                minRows={15}
                fullWidth
                label="News Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Box>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          {!bool ? 
          <Button color="primary" variant="contained" onClick={fn}>
            Save
          </Button> :
          <Button color="primary" variant="contained" onClick={update}>
            Save Changes
          </Button>}
        </Box>
      </Card>
    </form>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  buttonstyle: {
    paddingTop: 24,
    paddingLeft: 24,
    height: "400px",
  },
};
