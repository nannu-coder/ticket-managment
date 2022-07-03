import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import FormButton from "../Common/FormButtom/FormButton";
import Input from "../Common/Input/Input";
import "./CreatePassword.css";

const theme = createTheme();

const CreatePassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      email: data.get("email"),
      password1: data.get("password1"),
      password2: data.get("password2"),
      search: data.get("search"),
    });
  };

  return (
    <Paper className="animate__animated animate__fadeInUp" elevation={0}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="passwordForm"
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 className="create-password--heading">
              Create password For Agent
            </h3>
            <p className="create-password--sub" style={{ textAlign: "center" }}>
              Contrary to popular belief Lorem Ipsum is not simply random text.
              It has roots in a piece
            </p>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              className="create-password--form"
            >
              <label htmlFor="#">Find People</label>
              <Input type="search" placeholder="Search Here" name="search" />
              <label htmlFor="#">Email</label>
              <Input type="email" placeholder="email" name="email" />
              <label htmlFor="#">New Password</label>
              <Input
                type="password"
                placeholder="Enter Password"
                name="password1"
              />

              <label htmlFor="#">Confirm Password</label>
              <Input
                type="password"
                placeholder="Enter Password"
                name="password2"
              />
              <FormButton type="submit">Create Password</FormButton>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Paper>
  );
};

export default CreatePassword;
