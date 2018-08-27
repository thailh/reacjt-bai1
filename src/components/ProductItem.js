import React, { Component } from 'react';
import  * as Mes from './../constants/Message';

class ProductItem extends Component {
  render() {
    var { product } = this.props;
    let url = product.image;

    return (

      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={url} className="img-fluid" />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRating(product.rating)}
              </li>

            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a className="btn-floating blue-gradient" onClick={() => this.AddCart(product)} data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating(d) {
    let htm = [];
    for (var i = 1; i <= d; i++) {
      htm.push(<i key={i} className="fa fa-star" />)
    }
    for (var j = 1; j <= (5 - d); j++) {
      htm.push(<i key={j + 20000} className="fa fa-star-o" />)
    }
    return htm;
  }
  AddCart(card) {
    console.log(card);
    this.props.onAddCart(card, 1);
    let mes=Mes.MSG_ADD_TO_CARD_SUCESS+": "+card.name;
    this.props.ChangeMessage(mes)
  }
}
export default  ProductItem;
