import { useState } from "react";
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
import { flexbox } from "@mui/system";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader title="New News " />
        <Divider />
        <CardContent>
          <Grid container spacing={3} style={styles.container}>
            <Grid item md={6} xs={12}>
              <TextField
                maxRows={1}
                fullWidth
                label="News title"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Box style={styles.buttonstyle}>
              <TextField
                multiline
                minRows={15}
                fullWidth
                label="News Description"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
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
          <Button color="primary" variant="contained">
            Save
          </Button>
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
