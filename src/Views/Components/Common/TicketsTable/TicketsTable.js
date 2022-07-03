import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import user from "../../../../Assets/tablePic.png";
import "./TicketsTable.css";

const columns = [
  { field: "id", headerName: "ID Number", width: 70, flex: 1 },
  {
    field: "userName",
    headerName: "User name",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="table-userName">
          <img src={params.value.user} alt="" />
          <span className="table--user">Alexxender Burt</span>
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "createDate",
    headerName: "Created Date",
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
  },
];

const rows = [
  {
    id: "#35423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#352423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#354233",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#3542343",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#353423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#35423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#35423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
  {
    id: "#35423",
    userName: { user },
    email: "Shamimalhasan582@gmail.com",
    createDate: "2 April 2021",
    role: "Graphic Design",
    actions: "actions",
  },
];

const TicketsTable = () => {
  return (
    <div className="tickets-table">
      <div style={{ height: 525, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
};

export default TicketsTable;
