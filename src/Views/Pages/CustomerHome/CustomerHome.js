import { Grid, Paper } from "@mui/material";
import React from "react";
import TicketCountCard from "../../Components/Common/TicketCountCard/TicketCountCard";
import CustomerTickets from "../../Components/Custom/CustomerTickets/CustomerTickets";
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./CustomerHome.css";
import Input from "./../Common/Input/Input";
import FormButton from "../Common/FormButtom/FormButton";
import agent from "../../../Assets/agent.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomerHome = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      subject: data.get("subject"),
      des: data.get("des"),
    });
  };

  return (
    <div>
      <div className="customer__home">
        <Grid container spacing={2}>
          <TicketCountCard />
          <Grid className="animate__animated animate__fadeInUp" item md={12}>
            <div className="tickets__header">
              <div
                className="tickets__header-title"
                style={{ margin: "5px 0" }}
              >
                <h3 className="tickets__header-title--head">My Tickets</h3>
                <h6
                  className="tickets__header-title--sub"
                  style={{ marginTop: "3px" }}
                >
                  List of ticket open by customers
                </h6>
              </div>
              <div className="tickets__header-btn">
                <button
                  onClick={handleClickOpen}
                  className="tickets__header-btn__ticket"
                >
                  <IconContext.Provider
                    value={{ className: "create_ticklet-plus__icon" }}
                  >
                    <AiFillPlusCircle size={16} />
                  </IconContext.Provider>
                  Request for Tickect
                </button>
              </div>
            </div>
          </Grid>
          <Grid className="animate__animated animate__fadeInUp" item md={12}>
            <CustomerTickets />
          </Grid>
          <Grid item md={12}>
            <div className="customer__message--header animate__animated animate__fadeInUp">
              <div
                style={{ marginBottom: "28px" }}
                className="customer__message--header-title"
              >
                <h1 className="customer__message--header-title--h1">Message</h1>
                <p className="customer__message--header-title--sub">
                  List of ticket open by customers
                </p>
              </div>
              <Paper
                sx={{
                  padding: "14px",
                  marginTop: "12px",
                  borderRadius: "15px",
                }}
                elevation={0}
              >
                <div className="customer_message--container">
                  <div
                    style={{ display: "flex" }}
                    className="customer_message--container--header"
                  >
                    <div className="customer_message--container--header_img">
                      <img src={agent} alt="" />
                    </div>
                    <div className="customer_message--container--header_content">
                      <h3 className="customer_message_h3">Michel Smith Burt</h3>
                      <p className="customer_msg--sub">Ticket ID: #587</p>
                    </div>
                  </div>
                  <div className="customer__msg_des">
                    <p className="customer__msg_des--para">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </Paper>
              <Paper
                sx={{
                  padding: "14px",
                  marginTop: "12px",
                  borderRadius: "15px",
                }}
                elevation={0}
              >
                <div className="customer_message--container">
                  <div
                    style={{ display: "flex" }}
                    className="customer_message--container--header"
                  >
                    <div className="customer_message--container--header_img">
                      <img src={agent} alt="" />
                    </div>
                    <div className="customer_message--container--header_content">
                      <h3 className="customer_message_h3">Michel Smith Burt</h3>
                      <p className="customer_msg--sub">Ticket ID: #587</p>
                    </div>
                  </div>
                  <div className="customer__msg_des">
                    <p className="customer__msg_des--para">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words consectetur, from a Lorem Ipsum passage, and
                      going through the cites
                    </p>
                  </div>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* modal */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ color: "#6C7BFF" }}>
          {"Request For Ticket"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form
              className="request--tickets--form"
              onSubmit={handleSubmit}
              action="#"
            >
              <label htmlFor="#">Subject</label>
              <Input type="text" placeholder="Subject" name="subject" />
              <label htmlFor="#">Description</label>
              <textArea
                className="form-control"
                placeholder="write here"
                rows="4"
                cols="45"
                name="des"
              ></textArea>
              <FormButton type="submit">Save</FormButton>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerHome;
