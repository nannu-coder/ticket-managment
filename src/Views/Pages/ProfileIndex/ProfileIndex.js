import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import banner from "../../../Assets/banner.png";
import profile from "../../../Assets/user-profile.png";
import { GrEdit } from "react-icons/gr";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import FormButton from "../Common/FormButtom/FormButton";
import Input from "../Common/Input/Input";
import Select from "react-select";
import "./Profileindex.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProfileIndex = () => {
  const [primaryInfo, setPrimaryInfo] = React.useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [eduInfo, setEduInfo] = useState(false);

  const primaryInfoOpen = () => {
    setPrimaryInfo(true);
  };

  const contactInfoOpen = () => {
    setContactInfo(true);
  };

  const educationInfoOpen = () => {
    setEduInfo(true);
  };

  const primaryClose = () => {
    setPrimaryInfo(false);
  };

  const contatcClose = () => {
    setContactInfo(false);
  };

  const eduClose = () => {
    setEduInfo(false);
  };

  const options = [
    { value: "bsc", label: "BSC" },
    { value: "hsc", label: "HSC" },
    { value: "ssc", label: "SSC" },
  ];

  const handleContactInfo = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      number: data.get("number"),
      email: data.get("email"),
      country: data.get("country"),
      address: data.get("country"),
    });
  };

  const handleEducationInfo = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      university: data.get("university"),
      startDate: data.get("startDate"),
      endDate: data.get("endDate"),
      degree: data.get("degree"),
      department: data.get("department"),
    });
  };

  return (
    <div>
      <Paper className="animate__animated animate__fadeInUp" elevation={0}>
        <div className="profile__part">
          <div className="profile--banner">
            <img className="banner-image" src={banner} alt="" />
          </div>
          <div className="profile--image">
            <div className="profile--image__img">
              <img className="profile-img" src={profile} alt="" />
            </div>
            <div className="user-name--title">
              <h2 className="profile-userName">Jubayer Ahmed</h2>
              <p className="user-pro">Graphic Designer</p>
            </div>
            <div className="edit__option">
              <button onClick={primaryInfoOpen} className="editIconBtn">
                <IconContext.Provider value={{ className: "edit_icon" }}>
                  <GrEdit />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          <hr />
          <div style={{ padding: "12px" }} className="profile-contact-info">
            <div className="contact-info--heading">
              <h2 className="contact-info--heading--title">
                Contact Information
              </h2>
              <div className="contact-info--start">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="color-td">Your Phone</td>
                      <td>
                        <span className="middle">:</span>
                      </td>
                      <td>+880 1912061482</td>
                    </tr>
                    <tr>
                      <td className="color-td">Email</td>
                      <td>
                        <span className="middle">:</span>
                      </td>
                      <td>Jubayerkawsar97@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="color-td">Address</td>
                      <td>
                        <span className="middle">:</span>
                      </td>
                      <td>
                        Shympur High School Road, Shympur , Kodomtoli, Dhaka
                        1204
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="edit__option">
              <button onClick={contactInfoOpen} className="editIconBtn">
                <IconContext.Provider value={{ className: "edit_icon" }}>
                  <GrEdit />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
      </Paper>
      <Paper sx={{ marginTop: "20px" }} elevation={0}>
        <div style={{ padding: "12px" }} className="userEdu-info">
          <div className="edu-info-header">
            <h1 className="edu-info-header--title inter-font">
              Education Information
            </h1>
          </div>
          <div className="edu-details">
            <h3 className="edu-details--title inter-font">Bsc/Chemistry</h3>
            <p className="edu-details--scl inter-font">Northsouth University</p>
            <span className="edu-details--year">(2016-2021)</span>
          </div>

          <div className="edu-details">
            <h3 className="edu-details--title inter-font">Bsc/Chemistry</h3>
            <p className="edu-details--scl inter-font">Northsouth University</p>
            <span className="edu-details--year">(2016-2021)</span>
          </div>
          <div className="edit__option">
            <button onClick={educationInfoOpen} className="editIconBtn">
              <IconContext.Provider value={{ className: "edit_icon" }}>
                <GrEdit />
              </IconContext.Provider>
            </button>
          </div>
          <div className="add_btn">
            <button className="add_btn--edu-info">Add More</button>
          </div>
        </div>
      </Paper>
      {/*===========Modal============*/}
      {/*===========Primary Information Modal===========*/}
      <Dialog
        open={primaryInfo}
        TransitionComponent={Transition}
        keepMounted
        onClose={primaryClose}
        className="primary-info--modal"
      >
        <DialogTitle className="inter-font dialog--title">
          {"Your Primary Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="modalinfo"
            id="alert-dialog-slide-description"
          >
            <form action="#">
              <label htmlFor="#">Your Name</label>
              <Input placeholder="Your Name" type="text"></Input>
              <label htmlFor="#">Profile Photo</label>
              <input className="form-control" type="file" />
              <label htmlFor="#">Cover photo</label>
              <input className="form-control" type="file" />
              <FormButton type="submit">Save</FormButton>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/*==========Contact Information Modal==========*/}
      <Dialog
        open={contactInfo}
        TransitionComponent={Transition}
        keepMounted
        onClose={contatcClose}
        className="contact-info--modal"
      >
        <DialogTitle className="inter-font dialog--title">
          {"Your Contact Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="modalinfo"
            id="alert-dialog-slide-description"
          >
            <form onSubmit={handleContactInfo}>
              <label htmlFor="#">Your Phone Number</label>
              <Input
                name="number"
                placeholder="Enter Your Name"
                type="number"
              ></Input>
              <label htmlFor="#">Email</label>
              <Input
                name="email"
                placeholder="Enter Your Email"
                type="email"
              ></Input>
              <label htmlFor="#">Country</label>
              <Input
                name="country"
                placeholder="Your Country"
                type="text"
              ></Input>
              <label htmlFor="#">Address</label>
              <Input
                name="address"
                placeholder="your Address"
                type="text"
              ></Input>
              <FormButton type="submit">Save</FormButton>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/*==========Education Information Modal==========*/}
      <Dialog
        open={eduInfo}
        TransitionComponent={Transition}
        keepMounted
        onClose={eduClose}
      >
        <DialogTitle className="inter-font dialog--title">
          {"Your Education Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="modalinfo"
            id="alert-dialog-slide-description"
          >
            <form onSubmit={handleEducationInfo}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <label htmlFor="#">University</label>
                  <Input
                    type="text"
                    placeholder="Enter university Name"
                    name="university"
                  ></Input>
                </Grid>
                <Grid item md={6}>
                  <label htmlFor="#">Date Of Attend</label>
                  <Input type="date" name="startDate"></Input>
                </Grid>
                <Grid item md={6}>
                  <label htmlFor="#">To</label>
                  <Input type="date" name="endDate"></Input>
                </Grid>
                <Grid item md={12}>
                  <label htmlFor="#">Degree</label>
                  <Select
                    // defaultValue={options[0]}
                    options={options}
                    // styles={colourStyles}
                    name="degree"
                  />
                </Grid>
                <Grid item md={12}>
                  <label htmlFor="#">Department</label>
                  <Input
                    type="text"
                    placeholder="Enter Your Department"
                    name="department"
                  ></Input>
                </Grid>
              </Grid>
              <FormButton type="submit">Save</FormButton>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileIndex;
