import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import "../../assets/fontawesome/css/all.css";
import logo from "../../assets/logo/logo322_116.png";
import avatar from "../../assets/images/avatar.png";
import Dashboard from "./dashboard/dashboard";
import Product from "./product/product";
import NewOrder from "./order/neworder";

class Home extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  // openMenu = (event) => {
  //     console.log(event.target.className);
  // }

  swithTheme = (event) => {
    console.log(event.target.className);
  };

  render() {
    const linkDashboard = "/dashboard";
    const linkProduct = "/product";
    const linkNewOrder = "/neworder";

    // window.addEventListener("click", (event) => {
    //     const className1 = "dropdown-menu-expand";

    //     var toggle = event.target.dataset.toggle;
    //     var content = document.getElementById(toggle);

    //     if(content.classList.contains(className1)){
    //         content.classList.remove(className1);
    //     } else {
    //         content.classList.add(className1);
    //     }
    // });

    return (
      <Router>
        <div>
          {/* Nav bar */}
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="# " className="nav-link">
                  <i className="fas fa-bars"></i>
                </a>
              </li>

              <li className="nav-item">
                <img src={logo} alt="Logo" className="logo" />
              </li>
            </ul>

            <form className="navbar-search">
              <input
                type="text"
                name="search"
                className="navbar-search-input"
                placeholder="What are you looking for?"
              />
              <i className="fas fa-search"></i>
            </form>

            <ul className="navbar-nav nav-right">
              <li className="nav-item">
                <a className="nav-link" href="# " onClick={this.swithTheme}>
                  <i className="fas fa-moon"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="# " className="nav-link">
                  <i
                    className="fas fa-bell dropdown-toggle"
                    data-toggle="notification-menu"
                    onClick={this.openMenu}
                  ></i>
                  <span className="navbar-badge">7</span>
                </a>

                <ul
                  id="notification-menu"
                  className="dropdown-menu-notification"
                >
                  <div className="dropdown-menu-header">
                    <span>Notifications</span>
                  </div>

                  <div className="dropdown-menu-content overlay-scrollbar">
                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-gift"></i>
                        </div>
                        <span>
                          Trường Đại học Công nghệ thông tin - Đại học Quốc gia
                          TP.HCM
                          <br />
                          <span>21/10/2021</span>
                        </span>
                      </a>
                    </li>
                  </div>

                  <div className="dropdown-menu-footer">
                    <span>View all notifications</span>
                  </div>
                </ul>
              </li>

              <li className="nav-item">
                <div className="avatar dropdown">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="dropdown-toggle"
                    data-toggle="user-menu"
                  />
                  <ul id="user-menu" className="dropdown-menu-avatar">
                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-user-tie"></i>
                        </div>
                        <span>Profile</span>
                      </a>
                    </li>

                    <li className="dropdown-menu-item">
                      <a href="# " className="dropdown-menu-link">
                        <div>
                          <i className="fas fa-sign-out-alt"></i>
                        </div>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* End Nav bar */}

          {/* Slide bar */}
          <div className="slidebar">
            <ul className="slidebar-nav">
              <li className="slidebar-nav-item">
                <Link
                  to={linkDashboard}
                  style={{ textDecoration: "none" }}
                  className="slidebar-nav-link active"
                >
                  <div>
                    <i className="fas fa-home"></i>
                  </div>
                  <span>Dashboard</span>
                </Link>
              </li>

              <h4>Account</h4>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <span>Admin Account</span>
                </a>
              </li>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-user"></i>
                  </div>
                  <span>Customer Account</span>
                </a>
              </li>

              <h4>Customer</h4>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-user"></i>
                  </div>
                  <span>Customer Information</span>
                </a>
              </li>

              <h4>Product</h4>

              <li className="slidebar-nav-item">
                <Link
                  to={linkProduct}
                  style={{ textDecoration: "none" }}
                  className="slidebar-nav-link"
                >
                  <div>
                    <i className="fab fa-product-hunt"></i>
                  </div>
                  <span>Product</span>
                </Link>
              </li>

              <h4>Order</h4>

              <li className="slidebar-nav-item">
                <Link
                  to={linkNewOrder}
                  style={{ textDecoration: "none" }}
                  className="slidebar-nav-link"
                >
                  <div>
                    <i className="fas fa-cart-plus"></i>
                  </div>
                  <span>New Order</span>
                </Link>
              </li>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <span>Order Confirmed</span>
                </a>
              </li>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-archive"></i>
                  </div>
                  <span>Package</span>
                </a>
              </li>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-truck"></i>
                  </div>
                  <span>Delivery</span>
                </a>
              </li>

              <li className="slidebar-nav-item">
                <a href="# " className="slidebar-nav-link">
                  <div>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <span>Order Success</span>
                </a>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          {/* End Slide bar */}

          {/* Content */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>

              <Route path="/product">
                <Product />
              </Route>

              <Route path="/neworder">
                <NewOrder />
              </Route>
            </Switch>
          </div>
          {/* End Content */}
        </div>
      </Router>
    );
  }
}

export default Home;
