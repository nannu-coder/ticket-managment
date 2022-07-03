import React from "react";
import card1 from "../../../../Assets/homeCard/total_tickets.svg";
import card2 from "../../../../Assets/homeCard/open.svg";
import card3 from "../../../../Assets/homeCard/closed.svg";
import card4 from "../../../../Assets/homeCard/current_tickets.svg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const TicketCountCard = () => {
  return (
    <>
      <Grid
        className="animate__animated animate__fadeInUp"
        item
        sm={6}
        xs={12}
        md={3}
      >
        <Paper className="card_paper" elevation={0}>
          <div className="card-content">
            <div className="card_img">
              <img src={card1} alt="" />
            </div>
            <div className="card_content">
              <h3 className="card_title">Total Ticket</h3>
              <h2 className="card_des_bold">1500</h2>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        className="animate__animated animate__fadeInUp"
        item
        sm={6}
        xs={12}
        md={3}
      >
        <Paper className="card_paper" elevation={0}>
          <div className="card-content">
            <div className="card_img">
              <img src={card2} alt="" />
            </div>
            <div className="card_content">
              <h3 className="card_title">Open Ticket</h3>
              <h2 className="card_des_bold">1500</h2>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        className="animate__animated animate__fadeInUp"
        item
        xs={12}
        md={3}
        sm={6}
      >
        <Paper className="card_paper" elevation={0}>
          <div className="card-content">
            <div className="card_img">
              <img src={card3} alt="" />
            </div>
            <div className="card_content">
              <h3 className="card_title">Closed Ticket</h3>
              <h2 className="card_des_bold">1500</h2>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid
        className="animate__animated animate__fadeInUp"
        item
        xs={12}
        md={3}
        sm={6}
      >
        <Paper elevation={0} className="card_paper">
          <div className="card-content">
            <div className="card_img">
              <img src={card4} alt="" />
            </div>
            <div className="card_content">
              <h3 className="card_title">Current Ticket</h3>
              <h2 className="card_des_bold">1500</h2>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default TicketCountCard;
