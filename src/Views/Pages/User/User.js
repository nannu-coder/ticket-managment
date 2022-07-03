import React from "react";
import { IconContext } from "react-icons";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import TicketsTable from "../../Components/Common/TicketsTable/TicketsTable";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import "./User.css";
import SearchBar from "./../../Components/Common/SearchBar/SearchBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const User = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="tickets__part">
        <div className="tickets__part__top">
          <div className="tickets__part__top-left">
            <div className="search-input">
              <SearchBar />
              <button className="searchBtn">Done</button>
            </div>
          </div>
          <div className="tickets__part__top-right">
            <div>
              <Button
                className="tickets__part__top-right--btn"
                variant="outlined"
                onClick={handleClickOpen}
              >
                <IconContext.Provider value={{ className: "create-icon" }}>
                  <BsFillPlusCircleFill />
                </IconContext.Provider>
                Create User
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle className="create-team-header">
                  <div className="create-team-modal--title">
                    {"Create User"}
                  </div>
                  <IconContext.Provider
                    value={{ className: "modal-close-icon" }}
                  >
                    <AiFillCloseCircle size={28} onClick={handleClose} />
                  </IconContext.Provider>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    className="create-user__inputs"
                    id="alert-dialog-slide-description"
                  >
                    <form action="#">
                      <label htmlFor="name">User Name</label>
                      <input
                        className="custom-input"
                        id="name"
                        type="text"
                        placeholder="Enter User Name"
                      />

                      <label htmlFor="email">Email</label>
                      <input
                        className="custom-input"
                        id="email"
                        type="email"
                        placeholder="Shamimalhasan582@gmail.com"
                      />

                      <label htmlFor="role">Select Role</label>
                      <select className="custom-select" name="select" id="role">
                        <option value="#">Admin</option>
                        <option value="#">Modaretor</option>
                      </select>

                      <button className="create-btn">Create User</button>
                    </form>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </div>
            <Link className="permission_link-btn" to="/accessPermission">
              Access and Permission
            </Link>
          </div>
        </div>
        <div className="tickets--part__table animate__animated animate__fadeInUp">
          <div className="tickets-part">
            <TicketsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
