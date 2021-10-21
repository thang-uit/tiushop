import React from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import "../../assets/fontawesome/css/all.css";
import logo from "../../assets/logo/logo322_116.png";
import avatar from "../../assets/images/avatar.png"

class Home extends React.Component {
    render() {
        return (
            <div className="home overlay-scrollbar light">
                {/* Nav bar */}
                <div className="navbar">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="# " className="nav-link">
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <img src={ logo }  alt="Logo" className="logo" />
                        </li>
                    </ul>

                    <form className="navbar-search">
                        <input type="text" name="search" className="navbar-search-input" placeholder="What are you looking for?" />
                        <i className="fas fa-search"></i>
                    </form>

                    <ul className="navbar-nav nav-right">
                        <li className="nav-item dropdown">
                            <a href="# " className="nav-link">
                                <i className="fas fa-bell"></i>
                                <span className="navbar-badge">1</span>
                            </a>

                            <ul className="dropdown-menu-notification">
                                <div className="dropdown-menu-header">
                                    <span>
                                        Notifications
                                    </span>
                                </div>

                                <div className="dropdown-menu-content overlay-scrollbar">
                                    <li className="dropdown-menu-item">
                                        <a href="# " className="dropdown-menu-link">
                                            <div>
                                                <i className="fas fa-gift"></i>
                                            </div>
                                            <span>
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
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
                                                Trường Đại học Công nghệ thông tin - Đại học Quốc gia TP.HCM
                                                <br/>
                                                <span>21/10/2021</span>
                                            </span>
                                        </a>
                                    </li>
                                </div>

                                <div className="dropdown-menu-footer">
                                    <span>
                                        View all notifications
                                    </span>
                                </div>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <div className="avatar dropdown">
                                <img src={ avatar }  alt="Avatar" />
                                <ul className="dropdown-menu-avatar">
                                    <li  class="dropdown-menu-item">
							            <a class="dropdown-menu-link">
                                            <div>
                                                <i class="fas fa-user-tie"></i>
                                            </div>
								            <span>Profile</span>
							            </a>
						            </li>

                                    <li  class="dropdown-menu-item">
							            <a class="dropdown-menu-link">
                                            <div>
                                                <i class="fas fa-sign-out-alt"></i>
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

                </div>
                {/* End Slide bar */}



                {/* Content */}
                <div className="content">

                </div>
                {/* End Content */}
            </div>
        );
    }
}

export default Home;