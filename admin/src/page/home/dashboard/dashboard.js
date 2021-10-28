import React from "react";
import "../../../assets/fontawesome/css/all.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-primary">
              <p>
                <i className="fas fa-cart-plus"></i>
              </p>
              <br />
              <h3>10</h3>
              <br />
              <p>New Order</p>
            </div>
          </div>

          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-danger">
              <p>
                <i className="fas fa-archive"></i>
              </p>
              <br />
              <h3>20</h3>
              <br />
              <p>Package</p>
            </div>
          </div>

          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-warning">
              <p>
                <i className="fas fa-truck"></i>
              </p>
              <br />
              <h3>30</h3>
              <br />
              <p>Delivery</p>
            </div>
          </div>

          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-success">
              <p>
                <i className="fas fa-check-circle"></i>
              </p>
              <br />
              <h3>40</h3>
              <br />
              <p>Order Success</p>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Table</h3>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>

                    <div className="card-content">
                        <table>
							<thead>
								<tr>
									<th>#</th>
									<th>Project</th>
									<th>Manager</th>
									<th>Status</th>
									<th>Due date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>React</td>
									<td>Chu Nam Thang</td>
									<td>
										<span className="dot">
											<i className="bg-success"></i>
											Completed
										</span>
									</td>
									<td>17/07/2021</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Vue</td>
									<td>Bui Nhu Sang</td>
									<td>
										<span className="dot">
											<i className="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>18/07/2020</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Laravel</td>
									<td>Phan Nhat Truong</td>
									<td>
										<span className="dot">
											<i className="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>17/07/2020</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Django</td>
									<td>Le Anh Tuan</td>
									<td>
										<span className="dot">
											<i className="bg-danger"></i>
											Delayed
										</span>
									</td>
									<td>07/07/2020</td>
								</tr>
								<tr>
									<td>5</td>
									<td>MEAN</td>
									<td>John Evan</td>
									<td>
										<span className="dot">
											<i className="bg-primary"></i>
											Pending
										</span>
									</td>
									<td>20/08/2020</td>
								</tr>
								<tr>
									<td>6</td>
									<td>MERN</td>
									<td>Robert</td>
									<td>
										<span className="dot">
											<i className="bg-primary"></i>
											Pending
										</span>
									</td>
									<td>20/08/2020</td>
								</tr>
							</tbody>
						</table>
                            
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
