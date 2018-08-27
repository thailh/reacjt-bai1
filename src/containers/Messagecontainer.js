
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Messega'
class Messagecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <Message message={this.props.message} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}


export default connect(mapStateToProps, null)(Messagecontainer);
