import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
// import { productData } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getBrand, getProduct } from "../redux/action";
const HomePage = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  let brandData = useSelector((state) => state.brandData);

  console.log("data in main component", brandData,  data);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getBrand());
    //eslint-disable-next-line
  }, []);


  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }} style={{ textAlign: "left" }}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product Data
            </Typography>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                name="product"
                sx={{ width: "100%" }}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Product Price"
                variant="outlined"
                name="price"
                sx={{ width: "100%" }}
              />
            </div>
            <div className="form-group">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={brand}
                  label="Brand"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "100%" }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="outlined">Primary</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
