import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Home.css";
import BarChart from "../../Components/Common/BarChart/BarChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SmallTable from "../../Components/Custom/SmallTable/SmallTable";
import { VectorMap } from "@south-paw/react-vector-maps";
import world from "../../../MapData/world.json";
import DataTable from "../../Components/Common/DataTable/DataTable";
import AgentMessage from "../../Components/Custom/AgentMessage/AgentMessage";
import TicketCountCard from "../../Components/Common/TicketCountCard/TicketCountCard";

const Home = () => {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div>
      <div className="home_top">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <TicketCountCard />
            <Grid
              className="animate__animated animate__fadeInUp"
              item
              xs={12}
              md={8}
              sm={12}
            >
              <Paper
                className="matchHeight"
                elevation={0}
                style={{ height: "100%" }}
              >
                <div className="header--oprions">
                  <h4 className="header--oprions__title">Ticket Analytics</h4>
                  <div className="chartDropdown">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Filter</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={select}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Yearly</MenuItem>
                        <MenuItem value={20}>Monthly</MenuItem>
                        <MenuItem value={30}>Weekly</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <BarChart />
              </Paper>
            </Grid>
            <Grid
              className="animate__animated animate__fadeInUp"
              item
              xs={12}
              md={4}
              sm={12}
            >
              <Paper elevation={0} sx={{ height: "100%" }}>
                {/* <AdminChart /> */}
                <AgentMessage />
              </Paper>
            </Grid>
          </Grid>
          <Grid
            className="animate__animated animate__fadeInUp"
            container
            spacing={0}
            style={{ marginTop: "15px" }}
          >
            <Grid item md={8} sm={12}>
              <Paper elevation={0} sx={{ height: "100%" }}>
                <SmallTable />
              </Paper>
            </Grid>
            <Grid item md={4} sm={12}>
              <Paper elevation={0} sx={{ height: "100%" }}>
                <div className="vectorMap_header">
                  <div className="vectorMap_header__top">
                    <div className="vectorMap__top__part">
                      <p className="vectorMap_header__title">China</p>
                      <h3 className="vector--map__count-top">55</h3>
                    </div>
                    <div className="vectorMap__bottom__part">
                      <div className="vectorMap__bottom__part--left">
                        <p className="vectorMap__bottom__part--title">
                          Total Customer
                        </p>
                        <h4 className="vectorMap__bottom__part--count vectorMap-count-left">
                          2548
                        </h4>
                      </div>
                      <div className="vectorMap__bottom__part--right">
                        <p className="vectorMap__bottom__part--title">
                          Active Customer
                        </p>
                        <h4 className="vectorMap__bottom__part--count vectorMap-count-right">
                          1600
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <VectorMap
                  layerProps={{ fill: "#DADFE2" }}
                  currentLayers={["nz-wgn"]}
                  {...world}
                />
              </Paper>
            </Grid>
            <Grid style={{ marginTop: "15px" }} item md={12} sm={12}>
              <div className="table_heading">
                <h2 className="table_heading--title">All Support Tickets</h2>
                <span className="table_heading--sub">
                  List of ticket open by customers
                </span>
              </div>
              <DataTable />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
