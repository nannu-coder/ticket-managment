import { Grid, Paper } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Select from "react-select";
import customer from "../../../Assets/right-img.png";
import { AiOutlineFileText } from "react-icons/ai";
import "./Messages.css";
import Inbox from "../../Components/Common/Inbox/Inbox";

const ticketType = [
  { value: "Type1", label: "Type1" },
  { value: "Type2", label: "Type2" },
  { value: "Type3", label: "Type3" },
];

const ticketAgent = [
  { value: "agent2", label: "agent2" },
  { value: "agent4", label: "agent4" },
  { value: "agent5", label: "agent5" },
];

const ticketPriority = [
  { value: "priority1", label: "priority1" },
  { value: "priority2", label: "priority2" },
  { value: "priority3", label: "priority3" },
];

const ticketProgress = [
  { value: "inprogress", label: "inProgress" },
  { value: "Waiting", label: "Waiting" },
  { value: "Pending", label: "Pending" },
];

const ticketDate = [
  { value: "Date1", label: "Date1" },
  { value: "Date2", label: "Date2" },
  { value: "Date3", label: "Date3" },
];

const Messages = () => {
  return (
    <div>
      <div className="message_page">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <div className="message_header">
              <Link className="header_back_btn" to="/">
                <IconContext.Provider value={{ className: "back_icon" }}>
                  <AiOutlineLeft />
                </IconContext.Provider>
                Back
              </Link>
            </div>
            <Paper
              className="animate__animated animate__fadeInUp"
              elevation={0}
              sx={{ padding: "12px", marginTop: "20px" }}
            >
              <div className="message-status-part">
                <div className="status-head">
                  <h3>Status</h3>
                </div>
                <div className="status_options">
                  <Select
                    defaultValue={ticketProgress[0]}
                    options={ticketProgress}
                  />
                </div>

                <Grid className="tickets_part__top" container spacing={2}>
                  <Grid item md={3}>
                    <label htmlFor="ticket__Type">Ticket Type</label>
                    <Select defaultValue={ticketType[1]} options={ticketType} />
                  </Grid>
                  <Grid item md={3}>
                    <label htmlFor="ticket__agent">Agent</label>
                    <Select
                      defaultValue={ticketAgent[1]}
                      options={ticketAgent}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <label htmlFor="ticket__priority">Priority</label>
                    <Select
                      defaultValue={ticketPriority[1]}
                      options={ticketPriority}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <label htmlFor="ticket__date">Due Date</label>
                    <Select defaultValue={ticketDate[1]} options={ticketDate} />
                  </Grid>
                </Grid>
              </div>
            </Paper>
            <Paper
              className="animate__animated animate__fadeInUp"
              elevation={0}
              sx={{ marginTop: "20px" }}
            >
              <Inbox />
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper
              className="animate__animated animate__fadeInUp"
              elevation={0}
            >
              <div style={{ padding: "12px" }} className="inbox--right-side">
                <div className="inbox--right-side--top">
                  <img className="ritgh-customer--img" src={customer} alt="" />
                  <h2 className="inbox--right-side--top--title">
                    Shamim Al Hasan
                  </h2>
                  <p className="inbox--right-side--top--sub">Customer</p>
                </div>
                <div className="inbox--right-side-info">
                  <div className="phone-info">
                    <p className="inbox--right-side-info-qs">Phone :</p>
                    <p className="customer--personal-info">+8801817672626</p>
                  </div>
                  <div className="email-info">
                    <p className="inbox--right-side-info-qs">Email :</p>
                    <p className="customer--personal-info">
                      Alburtburt23@gmail.com
                    </p>
                  </div>
                  <div className="address-info">
                    <p className="inbox--right-side-info-qs">Address :</p>
                    <p className="customer--personal-info">
                      39 Gulbag, Shyampur, Dhaka 1204{" "}
                    </p>
                  </div>
                </div>
                <div className="right-side--btn">
                  <button className="right-side--file all-file-btn">
                    All Files
                  </button>
                  <button className="right-side--file my-file-btn">
                    My Files
                  </button>
                </div>
                <div className="file--part">
                  <div className="file-part--icon">
                    <p className="file-icon-box">
                      <IconContext.Provider value={{ className: "file-icon" }}>
                        <AiOutlineFileText />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="file-part--text">
                    <h2 className="file-text">Website Bug Fixing</h2>
                    <span className="file-details">2 April 2021 at 2:36PM</span>
                  </div>
                </div>
                <hr />
                <div className="file--part">
                  <div className="file-part--icon">
                    <p className="file-icon-box">
                      <IconContext.Provider value={{ className: "file-icon" }}>
                        <AiOutlineFileText />
                      </IconContext.Provider>
                    </p>
                  </div>
                  <div className="file-part--text">
                    <h2 className="file-text">Testing Website</h2>
                    <span className="file-details">2 April 2021 at 2:36PM</span>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Messages;
