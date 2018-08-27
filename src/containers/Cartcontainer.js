
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as mg from './../constants/Message';
import CartItem from './../components/CartItem';
import CardResult from './../components/CardResult';
import * as actions from './../actions/index'
class Cartcontainer extends Component {
  constructor(props)
	{
		super(props);
		this.state={
        total:0
		};
		
		//onClickSearchGo
	}
  render() {
    var { cart } = this.props;
  
    return (
      <Cart>
        {this.ShowCartItem(cart)}
        {this.TotalCardResults(cart)}
      </Cart>

    );
  }
  
  ShowCartItem = (cart) => {
    var result = mg.MSG_ADD_TO_CARD_SUCESS;
    if (cart != null) {
      
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            Item={item}
            index={index}
            DeleteItem={this.props.DeleteItem}
            AddOrRemove={this.props.AddOrRemove}
            ChangeMessage={this.props.ChangeMessage}
          />
        )
      })
    }
    return result;
  }
  TotalCardResults = (cart) => {
    var result = null;
    if (cart != null) {
      result = <CardResult cart={cart} />
    }
    return result;
  
  }
}

Cartcontainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
const mapDispathToProps=(dispatch,props)=>{
  return{
    AddOrRemove:(cart,d)=>{
      dispatch(actions.AddorRemove(cart, d))
    },
    DeleteItem:(itemid)=>{
      dispatch(actions.DeleteItem(itemid))
    },
    ChangeMessage:(mes)=>{
      dispatch(actions.ChangeMessage(mes))
    }
  }
 
}

export default connect(mapStateToProps, mapDispathToProps)(Cartcontainer);
