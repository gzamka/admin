import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { ImageEdit } from "../imageEdit";

const user = {
  avatar: "",
};
export const AccountProfile = ({ image, setimage,bool }) => {
  const imgbtn = (e) => {
    e.preventDefault()
    const m = e.target.files
    Array.from(m).map((el, i) => {
      var file = e.target.files[i];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setimage((image) => [...image, { base64: reader.result, imgName: el.name }])
      }
    })
  }
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <>
      <Card >
        <CardContent>
          <Box
            sx={{
              borderRadius: "12px",
              width: "98%",
              height: "180px",
              border: "1px dashed black",
              display: "flex",
              overflowX: "scroll",
              alignItems: "center"
            }}
          >
            {image[0] &&
              <>
                {image.map((el, i) => {
                  return <Box key={i}>
                    <ImageEdit el={el} setimage={setimage} image={image} bool={bool} />
                  </Box>
                })}
              </>
            }
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => imgbtn(e)} />
              <Button color="primary" fullWidth variant="text" component="span">
                Upload picture
              </Button>
            </label>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
};
