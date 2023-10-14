
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { logoutUser } from "../actions/auth";

import { searchUsers } from "../actions/search";

import ListAltIcon from "@material-ui/icons/ListAlt";


import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import InventoryIcon from '@material-ui/icons/InsertDriveFile';
import TimelineIcon from '@material-ui/icons/Timeline';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

let firstLetter = '';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };

  handleSearch = (e) => {
    const searchText = e.target.value;

    this.props.dispatch(searchUsers(searchText));
  };

  render() {
    const { auth } = this.props;
    const { user } = this.props.auth;
    firstLetter = user && user.name ? user.name.charAt(0).toUpperCase() : '';

    return (
      <nav className="header">
        <div
          className="header__left"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Link to="/">
            <img
              
              alt="logo"
              src="/images/WhatsApp Image 2021-12-04 at 4.31.50 PM.jpeg"
              style={{ height: "50px" }}
            />
          </Link>

          
        </div>
        {auth.isLoggedIn && (
          <div className="header__middle" style={{ marginLeft: "20px" }}>
            <div className="header__option ">
              <Link to="/menu">
                <RestaurantMenuIcon fontSize="large" />
              </Link>
            </div>
            
              <div className="header__option ">
                <Link to="/goal">
                  <ListAltIcon fontSize="large" />
                </Link>
              </div>
            
           
              <div className="header__option ">
                <Link to="/update">
                  <InventoryIcon fontSize="large" />
                </Link>
              </div>
            
            
              <div className="header__option ">
                <Link to="/order">
                  <TimelineIcon fontSize="large" />
                </Link>
              </div>

              <div className="header__option ">
                <Link to="/notification">
                  <NotificationsActiveIcon fontSize="large" />
                </Link>
              </div>
            

          </div>
        )}
        <div className="header__right">
          <div className="header__info">
            {auth.isLoggedIn && (
              <div className="user">
                <Link to="/settings">
                  <img
                    // src="https://cdn-icons.flaticon.com/png/512/668/premium/668709.png?token=exp=1636045281~hmac=01dc4c9a3c91ca3c5bae9c160e2fb7c6"
                    src={`https://ui-avatars.com/api/?name=${firstLetter}`}
                    alt="user-dp"
                    id="user-dp"
                    style={{ marginLeft: "0px" }}
                  />
                </Link>
                <span
                  style={{
                    color: "gray",
                    marginLeft: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  {auth.user.name}
                </span>
                
              </div>
            )}

            <div className="nav-links">
              <ul>
                {!auth.isLoggedIn && (
                  <li>
                    <Link
                      to="/login"
                      style={{
                        color: "gray",
                        marginLeft: "10px",
                        fontWeight: "bolder",
                      }}
                    >
                      Login
                    </Link>
                  </li>
                )}

                {auth.isLoggedIn && (
                  <li
                    onClick={this.logOut}
                    style={{
                      color: "gray",
                      marginLeft: "0px",
                      fontWeight: "bolder",
                    }}
                  >
                    Logout
                  </li>
                )}
                {!auth.isLoggedIn && (
                  <li>
                    <Link
                      to="/signup"
                      style={{
                        color: "gray",
                        marginLeft: "10px",
                        fontWeight: "bolder",
                      }}
                    >
                      Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export { firstLetter };

function mapStateToProps(state) {
  return {
    auth: state.auth,
  
  };
}

export default connect(mapStateToProps)(Navbar);



