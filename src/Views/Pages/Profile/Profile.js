import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Profile.css";



const Profile = () => {
  let activeClassName = "nav-active";


  return (
    <div>
      <div className="profile__header">
        <div className="profile__header-tab">
          <ul>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notification"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Notification
              </NavLink>
            </li>
            <li>
              <NavLink
                to="priorities"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Priorities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="status"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Status
              </NavLink>
            </li>
            <li>
              <NavLink
                to="createPassword"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Create Password
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
