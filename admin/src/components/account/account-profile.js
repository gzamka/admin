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
const user = {
  avatar: "",
};
export const AccountProfile = ({ image, setimage }) => {
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
  // console.log(image);
  return (
    <>
      <Card >
        <CardContent>
          {image[0] &&
          <>
          <img src={image[0].base64} style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "250px",
            backgroundColor: "Grey"
          }} />
          {image.map((el, i) => {
            return <img src={el.base64} key={i} style={{
              height: "80px",
              width: "80px",
              backgroundColor: "Grey"
            }} />
          })}
          </>
          }
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
