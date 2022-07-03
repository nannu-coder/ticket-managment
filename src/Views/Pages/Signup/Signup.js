import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import companyImg from "../../../Assets/login_img.png";
import Input from "../Common/Input/Input";
import { Link } from "react-router-dom";
import FormButton from "../Common/FormButtom/FormButton";
import axios from "axios";
import { Alert } from "@mui/material";

const Signup = () => {
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
    };

    console.log(formData);

    axios
      .post("http://localhost:5000/signup", formData, { withCredentials: true })
      .then((response) => {
        setError(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    event.target.reset();
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          sx={{
            backgroundImage: `url(${companyImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="auth_heading">Login to Brand Name</h2>
            <p className="auth_sub">
              Welcome back! login with your date that you entered during
              registraion
            </p>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              className="authForm"
            >
              <label htmlFor="#">Name</label>
              <Input type="text" placeholder="Enter Name" name="name" />
              {error.name && (
                <Alert severity="error" sever>
                  {error?.name}
                </Alert>
              )}

              <label htmlFor="#">Email</label>
              <Input type="email" placeholder="Enter Email" name="email" />
              {error.email && <Alert severity="error">{error.email}</Alert>}

              <label htmlFor="#">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
              />
              {error.password && (
                <Alert severity="error">{error.password}</Alert>
              )}

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <FormButton type="submit">Sign Up</FormButton>
              <Grid container>
                <Grid item xs>
                  <Link to="">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/signin" style={{ marginLeft: "25px" }}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
