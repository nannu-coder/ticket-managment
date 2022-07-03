import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import PriStatus from "../Common/Pristatus/PriStatus";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./Priorities.css";
import Input from "../Common/Input/Input";
import FormButton from "../Common/FormButtom/FormButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Priorities = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="priorities--header">
        <h3 className="priorities--header--heading">Priorities</h3>
        <button onClick={handleClickOpen} className="priorities--header--btn">
          <IconContext.Provider
            value={{ className: "priorities--header--btn--icon" }}
          >
            <BsPlusCircleFill color="white" size={16} />
          </IconContext.Provider>
          Create Priority
        </button>
      </div>
      <div className="priorities--options animate__animated animate__fadeInUp">
        <PriStatus title="Low" />
        <PriStatus title="Medium" />
        <PriStatus title="High" />
        <PriStatus title="Urgent" />
      </div>

      {/*=====Modal ======*/}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Priority"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className="priorityModal"
            id="alert-dialog-slide-description"
          >
            <form action="#">
              <label htmlFor="#">Add Priority</label>
              <Input name="priority" placeholder="Priority" />
              <FormButton type="submit">Add Priority</FormButton>
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

export default Priorities;
