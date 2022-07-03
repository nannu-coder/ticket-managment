import { Grid } from "@mui/material";
import React from "react";
import users from "../../../Assets/user/users.png";
import Input from "../Common/Input/Input";
import Select from "react-select";
import "./MakeAdmin.css";
import FormButton from "../Common/FormButtom/FormButton";
import axios from "axios";

const options = [
  { value: "Admin", label: "Admin" },
  { value: "Agent", label: "Agent" },
  { value: "Controbutor", label: "Controbutor" },
];

const MakeAdmin = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      email: data.get("email"),
      role: data.get("role"),
    };

    axios
      .put("http://localhost:5000/users/admin", formData, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch(function (error) {
        console.log(error);
      });

    // fetch("http://localhost:5000/users/admin", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 1 || data.matchedCount > 1) {
    //       alert("success");
    //     }
    //   });
  };

  return (
    <div>
      <div className="user-role">
        <div className="user-role__top">
          <div className="user-role__top-content">
            <Grid container spacing={2}>
              <Grid item md={7}>
                <h2>Page Roles</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  odio voluptatibus numquam corrupti inventore sapiente corporis
                  maiores ipsam voluptates. Maiores velit placeat molestias
                  officia, facere incidunt possimus saepe nesciunt tempora.
                </p>
              </Grid>
              <Grid item md={5}>
                <img src={users} className="w-100 user_img" alt="users.jpg" />
              </Grid>
              <Grid className="role_managment" item md={8}>
                <h3>Assign New Page Role</h3>
                <form onSubmit={handleForm}>
                  <label htmlFor="Eamil">Email</label>
                  <Input name="email" placeholder="Email.." />
                  <label htmlFor="role">Role</label>
                  <Select
                    name="role"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  <FormButton>Add</FormButton>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
