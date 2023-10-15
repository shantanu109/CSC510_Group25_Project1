
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
import ReceiptIcon from '@material-ui/icons/Receipt';
import { fetchJobs } from "../actions/job";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pop:false,
    };
  }
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };

  handleSearch = (e) => {
    const searchText = e.target.value;

    this.props.dispatch(searchUsers(searchText));
  };

  componentDidUpdate(prevProps){
    const {job} = this.props;
    console.log(job)
    if (this.props.job !== prevProps.job) {
      const {job} = this.props;
      
      if(job){
        for (const jb of job) {
          console.log("Runnign")
          const utc2 = new Date();
          const jobExpiredDate = new Date(jb.dateexpired);
          const twoDaysBefore = new Date(jobExpiredDate);
          
          twoDaysBefore.setDate(jobExpiredDate.getDate() - 2);
        
          if (twoDaysBefore.getTime() <= utc2.getTime() || jb.quantity < 10) {
            this.setState({
              pop:true
            })
            break; // Exit the loop when the condition is met
          }
        }
      }
    }
  }

  render() {
    const { auth } = this.props;
    const { user } = this.props.auth;
    const {job} = this.props;

    let utc2 = new Date();

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
              <Link to="/menu" title="Menu">
                <RestaurantMenuIcon fontSize="large"/>
              </Link>
            </div>
            
              <div className="header__option ">
                <Link to="/goal" title="Inventory">
                  <ListAltIcon fontSize="large" />
                </Link>
              </div>
            
           
              <div className="header__option ">
                <Link to="/update" title="Inventory List">
                  <InventoryIcon fontSize="large" />
                </Link>
              </div>
            
            
              <div className="header__option ">
                <Link to="/order" title="Order">
                  <ReceiptIcon fontSize="large" />
                </Link>
              </div>

              <div className="header__option ">
                <Link to="/history" title="Analytics">
                  <TimelineIcon fontSize="large" />
                </Link>
              </div>

              <div className="header__option ">
                <Link to="/notification" title="Notification">
                  <NotificationsActiveIcon fontSize="large" color={this.state.pop?"secondary":""} className={this.state.pop?`constant-tilt-shake`:""}/>
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



