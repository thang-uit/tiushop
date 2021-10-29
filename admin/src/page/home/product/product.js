import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        {/* --------- Table --------- */}
        <div className="col-12 col-m-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Product</h3>
              <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className="card-content">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
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
    );
  }
}

export default Product;
