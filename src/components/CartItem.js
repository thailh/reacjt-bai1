import React, { Component } from 'react';
import  * as Mes from './../constants/Message';
class CartItem extends Component {
  render() {
    var {Item}=this.props;
    return (
      
      <tr>
      <th scope="row">
        <img src={Item.product.image}  className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{Item.product.name}</strong>
        </h5>
      </td>
      <td>{Item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{Item.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
            <a onClick={()=>this.AddOrRemove(Item,-1)}>—</a>
          </label>
          <label className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
            <a onClick={()=>this.AddOrRemove(Item,1)} >+</a>
          </label>
        </div>
      </td>
      <td>{Item.product.price*Item.quantity}$</td>
      <td>
        <button onClick={()=>this.DeleteItem(Item.product.id)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"   data-original-title="Remove item">
          X
        </button>
      </td>
    </tr>
    );
  }
  DeleteItem(d)
  {
    let mes=Mes.DELETE_CARD_SUCESS;
    this.props.DeleteItem(d);
    this.props.ChangeMessage(mes)
   
  }
  AddOrRemove(item,d)
  {
    let mes=Mes.ADD_QUANTITY;
    this.props.AddOrRemove(item,d);
    this.props.ChangeMessage(mes)
  }
 
}

export default CartItem;
