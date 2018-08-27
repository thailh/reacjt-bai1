
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import * as actions from './../actions/index'
import PropTypes from 'prop-types';
class Productcontainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.getData(products)}
      </Products>
    );
  }
  getData(products) {
    var result = null;
    if( products!=null)
    {
      result=products.map(
        (product,index)=>{
          return <ProductItem key={product.id} product={product} onAddCart={this.props.AddCart} ChangeMessage={this.props.ChangeMessage}/>
        }
      )
    }
    return result;
  }

}
Productcontainer.propTypes={
  products:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    AddCart: (cart, quantity) => {
      dispatch(actions.actAddToCart(cart, quantity))
    },
    ChangeMessage:(mes)=>{
      dispatch(actions.ChangeMessage(mes))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Productcontainer);
