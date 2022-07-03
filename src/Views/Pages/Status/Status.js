import React from "react";
import { IconContext } from "react-icons";
import { BsPlusCircleFill } from "react-icons/bs";
import "./Status.css";
import PriStatus from "./../Common/Pristatus/PriStatus";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Input from "../Common/Input/Input";
import FormButton from "../Common/FormButtom/FormButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Status = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      status: data.get("status"),
    };
  };

  return (
    <div>
      <div className="status-part">
        <h3 className="status-part--heading">Status</h3>
        <button onClick={handleClickOpen} className="status-part__header-btn">
          <IconContext.Provider
            value={{ className: "status-part--heading_icon" }}
          >
            <BsPlusCircleFill color="white" size={16} />
          </IconContext.Provider>
          Create Status
        </button>
      </div>
      <div className="status-body animate__animated animate__fadeInUp">
        <PriStatus title="Open" />
        <PriStatus title="Pending" />
        <PriStatus title="Resolved" />
        <PriStatus title="Closed" />
      </div>

      {/*======Modal======*/}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className="statusModal"
            id="alert-dialog-slide-description"
          >
            <form onSubmit={handleForm}>
              <Input name="status" placeholder="Add Status" />
              <FormButton type="submit">add Status</FormButton>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Status;
