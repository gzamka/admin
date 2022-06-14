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
import 'react-quill/dist/quill.snow.css'
import { QuillNoSSRWrapper } from "./Editor";
export const AccountProfileDetails = ({ setValues, values, fn, bool, update, col, description, setdescription }) => {
  const handleChange = (event) => setValues(event.target.value);
  const descrip = (e) => setdescription(e)
  return (
    <form autoComplete="off" noValidate >
      <Card>
        <CardHeader title={col === 'news' ? "Add news" : "Add product"} />
        <Divider />
        <CardContent>
          <Grid container spacing={3} style={styles.container}>
            <Grid item md={6} xs={12}>
              <TextField
                maxRows={1}
                fullWidth
                label={col === 'news' ? "News title" : "Product title"}
                name="title"
                onChange={handleChange}
                required
                value={values}
                variant="outlined"
              />
            </Grid>
            <Box style={styles.buttonstyle}>
              <QuillNoSSRWrapper
                style={{ height: "300px" }}
                theme="snow"
                value={description}
                onChange={(e) => descrip(e)}
                placeholder={col === 'news' ? "News Description" : "Product description"} />
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
    height: "350px",
    overflowY: "scroll"
  },
};
