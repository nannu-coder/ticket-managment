import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import four from "../../../../Assets/flag/four.png";
import five from "../../../../Assets/flag/five.png";
import six from "../../../../Assets/flag/six.png";
import three from "../../../../Assets/flag/three.png";
import india from "../../../../Assets/flag/india.png";

const columns = [
  { field: "customerName", headerName: "Customers Name", flex: 1 },
  {
    field: "tickets",
    headerName: "Tickets",
    // type: "number",
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.value.four} alt="" />
          <img src={params.value.three} alt="" />
          <img src={params.value.five} alt="" />
          <img src={params.value.six} alt="" />
          <img src={params.value.india} alt="" />
          <img src={params.value.france} alt="" />
        </div>
      );
    },
  },
  {
    field: "lastReply",
    headerName: "Last Reply",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    customerName: "Ashley Donald Mortez",
    tickets: 17,
    // location: "four",
    location: { four },
    lastReply: "12:30 P:M",
  },
  {
    id: 2,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { three },
    lastReply: "12:30 P:M",
  },
  {
    id: 3,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { five },
    lastReply: "12:30 P:M",
  },
  {
    id: 4,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { six },
    lastReply: "12:30 P:M",
  },
  {
    id: 5,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { india },
    lastReply: "12:30 P:M",
  },
  {
    id: 6,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { india },
    lastReply: "12:30 P:M",
  },
  {
    id: 7,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { four },
    lastReply: "12:30 P:M",
  },
  {
    id: 8,
    customerName: "Ashley Donald",
    tickets: 17,
    location: { six },
    lastReply: "12:30 P:M",
  },
  {
    id: 9,
    customerName: "Harvey",
    tickets: 17,
    location: { three },
    lastReply: "12:30 P:M",
  },
];

const SmallTable = () => {
  return (
    <div style={{ height: 371, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default SmallTable;
