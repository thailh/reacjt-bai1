import React, { Component } from 'react';

import CartItem from './CartItem';
import CardResult from './CardResult';
class Cart extends Component {
  render() {
    var {children}=this.props;
    return (
      <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th />
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th />
            </tr>
          </thead>
          <tbody>
           {children}
            {/* <CardResult/> */}
          </tbody>
        </table>
      </div>
    </section>
    );
  }
}

export default Cart;
