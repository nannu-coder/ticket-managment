import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Views/Pages/Layout/Layout";
import Home from "./Views/Pages/Home/Home";
import Tickets from "./Views/Pages/Tickets/Tickets";
import Team from "./Views/Pages/Team/Team";
import User from "./Views/Pages/User/User";
import Setting from "./Views/Pages/Setting/Setting";
import AccessPermission from "./Views/Pages/AccessPermission/AccessPermission";
import OpenTickets from "./Views/Pages/Tickets/openTickets/OpenTickets";
import ClosedTickets from "./Views/Pages/Tickets/ClosedTickets/ClosedTickets";
import SolvedTickets from "./Views/Pages/Tickets/SolvedTickets/SolvedTickets";
import All from "./Views/Pages/Tickets/All/All";
import CurrentTickets from "./Views/Pages/Tickets/CurrentTickets/CurrentTickets";
import Messages from "./Views/Pages/Messages/Messages";
import Profile from "./Views/Pages/Profile/Profile";
import ProfileIndex from "./Views/Pages/ProfileIndex/ProfileIndex";
import Notification from "./Views/Pages/Notification/Notification";
import Priorities from "./Views/Pages/Priorities/Priorities";
import Status from "./Views/Pages/Status/Status";
import CreatePassword from "./Views/Pages/CreatePassword/CreatePassword";
import Signup from "./Views/Pages/Signup/Signup";
import Signin from "./Views/Pages/Signin/Signin";
import CustomerMessage from "./Views/Pages/CustomerMessage/CustomerMessage";
import CustomerHome from "./Views/Pages/CustomerHome/CustomerHome";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Views/PrivateRoute/PrivateRoute";
import UseAuthentication from "./Hooks/UseAuthentication";
import { useEffect } from "react";
import MakeAdmin from "./Views/Pages/makeAdmin/MakeAdmin";

function App() {
  const { loggedIn, getLoggedIn } = UseAuthentication();
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="tickets"
                element={
                  <PrivateRoute>
                    <Tickets />
                  </PrivateRoute>
                }
              >
                <Route index element={<CurrentTickets />} />
                <Route path="openTickets" element={<OpenTickets />}></Route>
                <Route path="closedTickets" element={<ClosedTickets />} />
                <Route path="solvedTickets" element={<SolvedTickets />} />
                <Route path="all" element={<All />} />
              </Route>
              <Route path="team" element={<Team />} />
              <Route path="user" element={<User />} />
              <Route path="messages" element={<Messages />} />
              <Route path="setting" element={<Setting />} />
              <Route path="accessPermission" element={<AccessPermission />} />
              <Route path="profile" element={<Profile />}>
                <Route index element={<ProfileIndex />} />
                <Route path="notification" element={<Notification />} />
                <Route path="priorities" element={<Priorities />} />
                <Route path="status" element={<Status />} />
                <Route path="createPassword" element={<CreatePassword />} />
              </Route>
              <Route path="customerMessage" element={<CustomerMessage />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
              <Route path="cutomerhome" element={<CustomerHome />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
