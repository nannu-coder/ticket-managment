import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import companyImg from "../../../Assets/login_img.png";
import Input from "../Common/Input/Input";
import { Link } from "react-router-dom";
import "./Signin.css";
import FormButton from "../Common/FormButtom/FormButton";
import axios from "axios";
import UseAuthentication from "../../../Hooks/UseAuthentication";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const Signin = () => {
  const { loggedIn, getLoggedIn,isLoading } = UseAuthentication();
  let navigate = useNavigate();
  console.log(loggedIn);
  console.log(isLoading)
  
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = new FormData(event.target);
      const formData = {
        email: data.get("email"),
        password: data.get("password"),
      };
      await axios
        .post("http://localhost:5000/signin", formData, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.lo(error);
        });

      getLoggedIn();

      // if (loggedIn) {
      //   navigate("/home", { replace: true });
      //  }

    } catch (err) {
      console.log(err);
    }
    event.target.reset();
  }
  
  useEffect(()=>{
    if (loggedIn) {
      navigate("/home", { replace: true });
     }
  },[loggedIn])

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
              <label htmlFor="#">Email</label>
              <Input type="email" placeholder="Enter Email" name="email" />
              <label htmlFor="#">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {isLoading ? <CircularProgress /> : <FormButton type="submit">Sign In</FormButton>}
              
              <Grid container>
                <Grid item xs>
                  <Link to="">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" style={{ marginLeft: "25px" }}>
                    Don't have an account? Sign Up
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

export default Signin;
