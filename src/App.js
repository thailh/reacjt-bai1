import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Productcontainer from './containers/Productcontainer';
import Cartcontainer from './containers/Cartcontainer';
import Messagecontainer from './containers/Messagecontainer';
class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Productcontainer />
            <Messagecontainer />
            <Cartcontainer />
          </div>
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
