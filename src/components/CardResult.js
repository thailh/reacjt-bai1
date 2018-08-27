import React, { Component } from 'react';
class CardResult extends Component {
  render() {
    var { cart } = this.props;

    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.ShowTotal(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
          <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>

    );
    
  }
  ShowTotal = (cart) => {
    let total = 0;
      cart.map((item, index) => {
      total += item.product.price * item.quantity
    })
    return total;
  }
}

export default CardResult;
