import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { BsPlusCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { AiFillCloseCircle } from "react-icons/ai";
import { Avatar, Grid, Paper } from "@mui/material";
import teamMember from "../../../Assets/team-member.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import user1 from "../../../Assets/user/user1.png";
import user2 from "../../../Assets/user/user2.png";
import user3 from "../../../Assets/user/user3.png";
import user4 from "../../../Assets/user/user5.png";
import count from "../../../Assets/user/4+.png";
import { BsFillCheckCircleFill, BsFillPlusSquareFill } from "react-icons/bs";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import addedUser from "../../../Assets/user/addedUser.png";
import axios from "axios";
import "./Team.css";

const animatedComponents = makeAnimated();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddMember = [
  { value: "Shimul Bhai", label: "Shimul Bhai" },
  { value: "Munna Bhai", label: "Munna Bhai" },
  { value: "Shahriar Bhai", label: "Shahriar Bhai" },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#34DDAA" : "#308fe8",
  },
}));

const Team = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addMember, setAddMember] = React.useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleMember = () => {
    setAddMember(true);
  };

  const handleMemberClose = () => {
    setAddMember(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dropOption = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dropHandleClose = () => {
    setAnchorEl(null);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      title: data.get("title"),
      image: data.get("image"),
      member: data.get("member"),
    };

    console.log(formData)

    axios.post("http://localhost:5000/team", formData, {
      withCredentials: true,
    });
  };

  return (
    <div>
      <div className="team_part">
        <div className="team_part--header">
          <h1 className="team_part--header--title">Team</h1>
          <div>
            <Button className="create-team-btn" onClick={handleClickOpen}>
              <IconContext.Provider value={{ className: "plus_icon" }}>
                <BsPlusCircleFill size={18} />
              </IconContext.Provider>
              Create Team
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle className="create-team-header">
                <div className="create-team-modal--title">{"Create Team"}</div>
                <IconContext.Provider value={{ className: "modal-close-icon" }}>
                  <AiFillCloseCircle size={28} onClick={handleClose} />
                </IconContext.Provider>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <form className="create-team-forms" onSubmit={handleForm}>
                    <label htmlFor="team-title">Team Title</label>
                    <input
                      type="text"
                      id="team-title"
                      className="create-team-input"
                      name="title"
                    />

                    <label htmlFor="team-file">Upload Team Image</label>
                    <input
                      type="file"
                      id="team-file"
                      className="create-team-input"
                      name="image"
                    />

                    <label htmlFor="select">Select Member</label>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={options}
                      name="member"
                    />
                    <button className="btn create-btn">Create Team</button>
                  </form>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="team_part--body">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper
                className="animate__animated animate__fadeInUp"
                elevation={1}
              >
                <div className="team-card">
                  <div className="team-card-header">
                    <div className="team-card-header__left">
                      <Avatar sx={{ width: 30, height: 30 }} src={teamMember} />
                      <span className="member-profession">Web Development</span>
                    </div>
                    <div className="team-card-header-right">
                      <Button
                        id="basic-button"
                        aria-controls={dropOption ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={dropOption ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <IconContext.Provider
                          value={{ className: "team-option" }}
                        >
                          <BiDotsVerticalRounded size={22} />
                        </IconContext.Provider>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={dropOption}
                        onClose={dropHandleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{ className: "team--edit" }}
                          >
                            <BiEdit size={17} />
                          </IconContext.Provider>
                          <span className="team--edit_option option-font">
                            Edit
                          </span>
                        </MenuItem>
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{
                              className: "team-delete-option",
                            }}
                          >
                            <MdDelete size={18} />
                          </IconContext.Provider>
                          <span className="option-font">Delete</span>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="team-header__avatar">
                    <Avatar
                      alt="Remy Sharp"
                      src={user1}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src={user2}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src={user3}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src={user4}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src={count}
                      sx={{ width: 18, height: 18 }}
                    />
                  </div>
                  <div className="team-ticket_count">
                    <div className="team-ticket_count__left">
                      <IconContext.Provider
                        value={{ className: "succes_icon" }}
                      >
                        <BsFillCheckCircleFill size={18} />
                      </IconContext.Provider>
                      <span className="team-ticket_count__left--title">
                        Closed Ticket : 4500
                      </span>
                    </div>
                    <div className="team-ticket_count__right">
                      <Button variant="outlined" onClick={handleMember}>
                        <IconContext.Provider
                          value={{ className: "team-member_plus" }}
                        >
                          <BsFillPlusSquareFill size={28} />
                        </IconContext.Provider>
                      </Button>
                      <Dialog
                        open={addMember}
                        onClose={handleMemberClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Add Member"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <label
                              className="search-people"
                              htmlFor="addMember"
                            >
                              Search People
                            </label>
                            <Select
                              // defaultValue={[
                              //   colourOptions[2],
                              //   colourOptions[3],
                              // ]}
                              isMulti
                              name="colors"
                              options={AddMember}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              onChange={(e) => setData(e)}
                            />

                            <div className="member-handle-btn">
                              <button
                                onClick={handleMemberClose}
                                className="member_close"
                              >
                                Close
                              </button>
                              <button
                                onClick={handleMemberClose}
                                className="member_save"
                              >
                                Save
                              </button>
                            </div>
                            <hr />

                            {data.map((user) => (
                              <div className="show_added_member">
                                <img src={addedUser} alt="" />
                                <span className="userName">{user.value}</span>
                              </div>
                            ))}
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="ticket_progress">
                    <div className="progress_content">
                      <p className="progress_content--success">Success Rate</p>
                      <p className="progress_content--count">80%</p>
                    </div>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="animate__animated animate__fadeInUp"
                elevation={1}
              >
                <div className="team-card">
                  <div className="team-card-header">
                    <div className="team-card-header__left">
                      <Avatar sx={{ width: 30, height: 30 }} src={teamMember} />
                      <span className="member-profession">Web Development</span>
                    </div>
                    <div className="team-card-header-right">
                      <Button
                        id="basic-button"
                        aria-controls={dropOption ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={dropOption ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <IconContext.Provider
                          value={{ className: "team-option" }}
                        >
                          <BiDotsVerticalRounded size={22} />
                        </IconContext.Provider>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={dropOption}
                        onClose={dropHandleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{ className: "team--edit" }}
                          >
                            <BiEdit size={17} />
                          </IconContext.Provider>
                          <span className="team--edit_option option-font">
                            Edit
                          </span>
                        </MenuItem>
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{
                              className: "team-delete-option",
                            }}
                          >
                            <MdDelete size={18} />
                          </IconContext.Provider>
                          <span className="option-font">Delete</span>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="team-header__avatar">
                    <Avatar
                      alt="Remy Sharp"
                      src={user1}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src={user2}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src={user3}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src={user4}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src={count}
                      sx={{ width: 18, height: 18 }}
                    />
                  </div>
                  <div className="team-ticket_count">
                    <div className="team-ticket_count__left">
                      <IconContext.Provider
                        value={{ className: "succes_icon" }}
                      >
                        <BsFillCheckCircleFill size={18} />
                      </IconContext.Provider>
                      <span className="team-ticket_count__left--title">
                        Closed Ticket : 4500
                      </span>
                    </div>
                    <div className="team-ticket_count__right">
                      <Button variant="outlined" onClick={handleMember}>
                        <IconContext.Provider
                          value={{ className: "team-member_plus" }}
                        >
                          <BsFillPlusSquareFill size={28} />
                        </IconContext.Provider>
                      </Button>
                      <Dialog
                        open={addMember}
                        onClose={handleMemberClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Add Member"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <label
                              className="search-people"
                              htmlFor="addMember"
                            >
                              Search People
                            </label>
                            <Select
                              // defaultValue={[
                              //   colourOptions[2],
                              //   colourOptions[3],
                              // ]}
                              isMulti
                              name="colors"
                              options={AddMember}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              onChange={(e) => setData(e)}
                            />

                            <div className="member-handle-btn">
                              <button
                                onClick={handleMemberClose}
                                className="member_close"
                              >
                                Close
                              </button>
                              <button
                                onClick={handleMemberClose}
                                className="member_save"
                              >
                                Save
                              </button>
                            </div>
                            <hr />

                            {data.map((user) => (
                              <div className="show_added_member">
                                <img src={addedUser} alt="" />
                                <span className="userName">{user.value}</span>
                              </div>
                            ))}
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="ticket_progress">
                    <div className="progress_content">
                      <p className="progress_content--success">Success Rate</p>
                      <p className="progress_content--count">80%</p>
                    </div>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="animate__animated animate__fadeInUp"
                elevation={1}
              >
                <div className="team-card">
                  <div className="team-card-header">
                    <div className="team-card-header__left">
                      <Avatar sx={{ width: 30, height: 30 }} src={teamMember} />
                      <span className="member-profession">Web Development</span>
                    </div>
                    <div className="team-card-header-right">
                      <Button
                        id="basic-button"
                        aria-controls={dropOption ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={dropOption ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <IconContext.Provider
                          value={{ className: "team-option" }}
                        >
                          <BiDotsVerticalRounded size={22} />
                        </IconContext.Provider>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={dropOption}
                        onClose={dropHandleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{ className: "team--edit" }}
                          >
                            <BiEdit size={17} />
                          </IconContext.Provider>
                          <span className="team--edit_option option-font">
                            Edit
                          </span>
                        </MenuItem>
                        <MenuItem onClick={dropHandleClose}>
                          <IconContext.Provider
                            value={{
                              className: "team-delete-option",
                            }}
                          >
                            <MdDelete size={18} />
                          </IconContext.Provider>
                          <span className="option-font">Delete</span>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="team-header__avatar">
                    <Avatar
                      alt="Remy Sharp"
                      src={user1}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src={user2}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src={user3}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src={user4}
                      sx={{ width: 18, height: 18 }}
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src={count}
                      sx={{ width: 18, height: 18 }}
                    />
                  </div>
                  <div className="team-ticket_count">
                    <div className="team-ticket_count__left">
                      <IconContext.Provider
                        value={{ className: "succes_icon" }}
                      >
                        <BsFillCheckCircleFill size={18} />
                      </IconContext.Provider>
                      <span className="team-ticket_count__left--title">
                        Closed Ticket : 4500
                      </span>
                    </div>
                    <div className="team-ticket_count__right">
                      <Button variant="outlined" onClick={handleMember}>
                        <IconContext.Provider
                          value={{ className: "team-member_plus" }}
                        >
                          <BsFillPlusSquareFill size={28} />
                        </IconContext.Provider>
                      </Button>
                      <Dialog
                        open={addMember}
                        onClose={handleMemberClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Add Member"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <label
                              className="search-people"
                              htmlFor="addMember"
                            >
                              Search People
                            </label>
                            <Select
                              // defaultValue={[
                              //   colourOptions[2],
                              //   colourOptions[3],
                              // ]}
                              isMulti
                              name="colors"
                              options={AddMember}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              onChange={(e) => setData(e)}
                            />

                            <div className="member-handle-btn">
                              <button
                                onClick={handleMemberClose}
                                className="member_close"
                              >
                                Close
                              </button>
                              <button
                                onClick={handleMemberClose}
                                className="member_save"
                              >
                                Save
                              </button>
                            </div>
                            <hr />

                            {data.map((user) => (
                              <div className="show_added_member">
                                <img src={addedUser} alt="" />
                                <span className="userName">{user.value}</span>
                              </div>
                            ))}
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="ticket_progress">
                    <div className="progress_content">
                      <p className="progress_content--success">Success Rate</p>
                      <p className="progress_content--count">80%</p>
                    </div>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Team;
