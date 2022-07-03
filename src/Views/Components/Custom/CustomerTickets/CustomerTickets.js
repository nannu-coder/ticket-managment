import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import user1 from "../../../../Assets/user/user1.png";
import user2 from "../../../../Assets/user/user2.png";
import user3 from "../../../../Assets/user/user3.png";
import count from "../../../../Assets/user/4+.png";
import { Avatar, AvatarGroup } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "subjects", headerName: "Subjects", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "assigned",
    headerName: "Assigned",
    flex: 1,
    renderCell: (params) => {
      return (
        <AvatarGroup>
          <Avatar alt="Remy Sharp" sx={{ width: 18, height: 18 }} src={user1} />
          <Avatar
            alt="Travis Howard"
            sx={{ width: 18, height: 18 }}
            src={user2}
          />
          <Avatar
            alt="Cindy Baker"
            sx={{ width: 18, height: 18 }}
            src={user3}
          />
          <Avatar
            alt="Agnes Walker"
            sx={{ width: 18, height: 18 }}
            src={count}
          />
        </AvatarGroup>
      );
    },
  },
  {
    field: "createdDate",
    headerName: "Created Date",
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
  },
];

const rows = [
  {
    id: "#2223",
    subjects: "Installation issues",
    status: "Open",
    assigned: "image",
    createdDate: "23/11/2021",
    actions: "dropDown",
  },
  {
    id: "#2243",
    subjects: "Installation issues",
    status: "Open",
    assigned: "image",
    createdDate: "23/11/2021",
    actions: "dropDown",
  },
  {
    id: "#2263",
    subjects: "Installation issues",
    status: "Open",
    assigned: "image",
    createdDate: "23/11/2021",
    actions: "dropDown",
  },
  {
    id: "#8223",
    subjects: "Installation issues",
    status: "Open",
    assigned: "image",
    createdDate: "23/11/2021",
    actions: "dropDown",
  },
];

const CustomerTickets = () => {
  return (
    <div>
      <div
        className="DataTable-container"
        style={{ height: 400, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default CustomerTickets;
