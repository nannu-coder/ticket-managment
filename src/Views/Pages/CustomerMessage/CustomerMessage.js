import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";
import { Grid, Paper } from "@mui/material";
import Inbox from "../../Components/Common/Inbox/Inbox";
import Input from "../Common/Input/Input";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import userProfile from "../../../Assets/chat-list.png";
import "./CustomerMessage.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomerMessage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="customer-msg-part">
        <div className="customer-msg-part_back-btn">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="message_header">
                <Link className="header_back_btn" to="/home">
                  <IconContext.Provider value={{ className: "back_icon" }}>
                    <AiOutlineLeft />
                  </IconContext.Provider>
                  Back
                </Link>
              </div>
            </Grid>
            <Grid item md={4}>
              <Paper
                className="animate__animated animate__fadeInUp"
                elevation={0}
              >
                <div className="customer_left">
                  <div className="customer_left-top">
                    <div className="customer_left-top--searchBar">
                      <Input type="search" placeholder="Search Here" />
                      <IconContext.Provider
                        value={{ className: "search__bar" }}
                      >
                        <BsSearch />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="customer__top--file">
                    <div className="customer__top--file--tabs">
                      <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                          >
                            <Tab label="Chat" {...a11yProps(0)} />
                            <Tab label="File" {...a11yProps(1)} />
                          </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                          <div className="chat-list">
                            <div className="chat-list--container">
                              <div className="chat-list--container--img">
                                <img src={userProfile} alt="" />
                              </div>
                              <div className="chat-list--container--content">
                                <div className="chat-list--container--content--header">
                                  <h2 className="chat-list--container--content--header_title">
                                    Alexzender Burt
                                  </h2>
                                  <small className="chat-list--container--content--header_time">
                                    2:44 PM
                                  </small>
                                </div>
                                <div className="chat-list--container--content--body">
                                  <p>Ticket ID:#258</p>
                                  <p>It was popularised in the...</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </TabPanel>
                        <TabPanel
                          style={{ textAlign: "center" }}
                          value={value}
                          index={1}
                        >
                          No Item Found
                        </TabPanel>
                      </Box>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item md={8}>
              <Paper
                className="animate__animated animate__fadeInUp"
                elevation={0}
              >
                <Inbox />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CustomerMessage;
