import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiFillPlusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Select from "react-select";
import { GrFormClose } from "react-icons/gr";
import makeAnimated from "react-select/animated";
import Slide from "@mui/material/Slide";
import "./Tickets.css";
import { useState } from "react";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const options = [
  { value: "Departments", label: "Departments" },
  { value: "Departments", label: "Departments" },
  { value: "Departments", label: "Departments" },
];
const options2 = [
  { value: "labels", label: "labels" },
  { value: "labels", label: "labels" },
  { value: "labels", label: "labels" },
];
const options3 = [
  { value: "status", label: "Status" },
  { value: "status", label: "Status" },
  { value: "status", label: "Status" },
];
const options4 = [
  { value: "priority", label: "Priority" },
  { value: "priority", label: "Priority" },
  { value: "priority", label: "Priority" },
];
const ticketsType = [
  { value: "Problem", label: "Problem" },
  { value: "Issues", label: "Issues" },
  { value: "Tpes", label: "Types" },
];
const ticketsStatus = [
  { value: "Open", label: "Open" },
  { value: "Pending", label: "Pending" },
  { value: "Closed", label: "Closed" },
];
const ticketsPriority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

const ticketsTag = [
  { value: "Tag", label: "Tag4" },
  { value: "Tag2", label: "Tag5" },
  { value: "Tag3", label: "Tag6" },
];

const animatedComponents = makeAnimated();

const Tickets = () => {
  const [open, setOpen] = React.useState(false);
  const [ticketModal, setTicketModal] = useState(false);

  const handleTicketCreate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const ticketData = {
      customer: formData.get("customer"),
      subject: formData.get("subject"),
      type: formData.get("type"),
      status: formData.get("status"),
      priority: formData.get("priority"),
      asigne: formData.get("asigne"),
      des: formData.get("des"),
    };

    axios
      .post("http://localhost:5000/ticket", ticketData, {
        withCredentials: true,
      })
      .then((res) => console.log(res));

    event.target.reset();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const createTicketOpen = () => {
    setTicketModal(true);
  };

  const createTicketClose = () => {
    setTicketModal(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let activeClassName = "ticketsActiveTab";

  return (
    <div className="main-tickets">
      <div className="main-Tickets__header">
        <div className="header_left">
          <ul>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Current Ticket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="openTickets"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Open Ticket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="closedTickets"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Closed Ticket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="solvedTickets"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Solved Ticket
              </NavLink>
            </li>
            <li>
              <NavLink
                to="all"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                All
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button
            variant="outlined"
            onClick={createTicketOpen}
            className="create-tickets--btn"
          >
            <IconContext.Provider value={{ className: "plus_icon" }}>
              <AiFillPlusCircle />
            </IconContext.Provider>
            Create-ticket
          </button>
          <div>
            <button
              variant="outlined"
              onClick={handleClickOpen}
              className="filter"
            >
              Filter
            </button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              className="filter__box"
            >
              <DialogTitle id="responsive-dialog-title">{"Filter"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="content_body">
                    <form action="#">
                      <label htmlFor="customer">Customer</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Lara"
                      />
                      <label htmlFor="agent">Agents</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Agent"
                      />
                      <label htmlFor="Departments">Departments</label>
                      <Select
                        defaultValue={options[1]}
                        options={options}
                        // formatGroupLabel={formatGroupLabel}
                      />
                      <label htmlFor="labels">Labels</label>
                      <Select
                        defaultValue={options2[1]}
                        options={options2}
                        // formatGroupLabel={formatGroupLabel}
                      />
                      <label htmlFor="staus">Status</label>
                      <Select
                        defaultValue={options3[1]}
                        options={options3}
                        // formatGroupLabel={formatGroupLabel}
                      />
                      <label htmlFor="priority">Priorities</label>
                      <Select
                        defaultValue={options4[1]}
                        options={options4}
                        // formatGroupLabel={formatGroupLabel}
                      />
                      <label htmlFor="sort">Sort</label>
                      <div className="input-group">
                        <button className="sort-btn" type="button">
                          sort
                        </button>
                        <input type="text" className="sort-item" />
                      </div>
                    </form>
                    <div className="form-buttons">
                      <button onClick={handleClose} className="closeModal">
                        Close
                      </button>
                      <button className="save-form">Save</button>
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Outlet />
      {/* <Menu onOpen={handleOpen}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu> */}

      {/* Modal */}
      <Dialog
        open={ticketModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={createTicketClose}
        className="createTicket__modal"
      >
        {/* <DialogTitle>{"Create Ticket"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <div className="create-tickets__content">
              <div className="create-tickets__header">
                <h3>Create Tickets</h3>
              </div>
              <div className="tickets-body">
                <form onSubmit={handleTicketCreate}>
                  <label className="form-label" htmlFor="customer">
                    Find Customer
                  </label>
                  <input
                    className="form-control"
                    placeholder="Customer"
                    name="customer"
                    type="text"
                    required
                  />
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="form-control"
                    placeholder="subject"
                    name="subject"
                    type="text"
                    required
                  />
                  <label className="form-label" htmlFor="type">
                    Type
                  </label>
                  <Select
                    name="type"
                    placeholder="Type"
                    options={ticketsType}
                    required
                  />
                  <label className="form-label" htmlFor="status">
                    Status
                  </label>
                  <Select
                    name="status"
                    defaultValue={ticketsStatus[1]}
                    options={ticketsStatus}
                    required
                  />
                  <label className="form-label" htmlFor="ticketPriority">
                    Priority
                  </label>
                  <Select
                    name="priority"
                    defaultValue={ticketsPriority[1]}
                    options={ticketsPriority}
                    required
                  />
                  <label className="form-label" htmlFor="asignePeople">
                    Asigne People
                  </label>
                  <input
                    placeholder="Asignee People"
                    name="asigne"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label className="form-label" htmlFor="des">
                    Description
                  </label>
                  <textarea
                    placeholder="Text Here..."
                    name="des"
                    className="form-control"
                  ></textarea>
                  {/* <label className="form-label" htmlFor="tag">
                    Tag
                  </label>
                  <Select
                    name="tag"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[ticketsTag[1]]}
                    isMulti
                    options={ticketsTag}
                  /> */}
                  <button className="createTicket">Create Ticket</button>
                </form>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tickets;
