import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import icon from "../../../../Assets/flag/four.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import user1 from "../../../../Assets/user/user1.png";
import user2 from "../../../../Assets/user/user2.png";
import user3 from "../../../../Assets/user/user3.png";
import count from "../../../../Assets/user/4+.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./DataTable.css";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const handleClick = () => {
  return alert("Clicked");
};

const DataTable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "RequestName", headerName: "Request Name", flex: 1 },
    { field: "subjects", headerName: "Subjects", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "priority", headerName: "Priority", flex: 1 },
    {
      field: "assignee",
      headerName: "Assignee",
      flex: 1,
      renderCell: (params) => {
        return (
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 18, height: 18 }}
              src={user1}
            />
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
    { field: "createdDate", headerName: "Created Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: () => {
        return (
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      subjects: "Installation issues",
      RequestName: "William Carey",
      status: "Open",
      priority: "High",
      assignee: { AvatarGroup },
      createdDate: "23/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 2,
      subjects: "Update issues",
      RequestName: "John Mark ",
      status: "Open",
      priority: "Medium",
      assignee: { icon },
      createdDate: "25/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 3,
      subjects: "Difficulties in..",
      RequestName: "Claudia Brown",
      status: "Closed",
      priority: "Low",
      assignee: { icon },
      createdDate: "26/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 4,
      subjects: "Installation..",
      RequestName: "Alexa  Brown",
      status: "Pending",
      priority: "High",
      assignee: { icon },
      createdDate: "29/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 5,
      subjects: "New update..",
      RequestName: "John Doo",
      status: "Pending",
      priority: "High",
      assignee: { icon },
      createdDate: "29/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 6,
      subjects: "Update issues",
      RequestName: "Clara Jonas",
      status: "Open",
      priority: "Medium",
      assignee: { icon },
      createdDate: "11/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 7,
      subjects: "Update issues",
      RequestName: "Laura Smith",
      status: "Closed",
      priority: "Low",
      assignee: { icon },
      createdDate: "09/11/2021",
      actions: { BsThreeDotsVertical },
    },
    {
      id: 8,
      subjects: "Installation...",
      RequestName: "Anne Khoaz",
      status: "Open",
      priority: "Medium",
      assignee: { icon },
      createdDate: "05/11/2021",
      actions: { BsThreeDotsVertical },
    },
  ];

  return (
    <div className="DataTable-container" style={{ height: 610, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
