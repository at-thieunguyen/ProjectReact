import React, { Component } from 'react';

export class Product extends Component {
  /* cách 1 */

  // constructor(props) {
  //   super(props);
  //   this.addToCard = this.addToCard.bind(this);
  // }

  // addToCard() {
  //   alert( 'Successfully purchase' + ' ' +  this.props.children)
  // }

  addToCard2 = () => {
    alert(this.props.children)
  }
  render() {
    return (
      <section>
        <div>
          <img src={this.props.img} alt={this.props.children} />
          {/* truyền bằng key*/}
          <h1>{this.props.name}</h1>
          {/* truyền bằng children*/}
          <h1>{this.props.children}</h1>
          <p>{this.props.price}</p>
        </div>
        <div>
          {/* <button onClick={this.addToCard}>Buy</button> */}
          <button onClick={this.addToCard2}>Buy2</button>
        </div>
      </section>
    );

  }

}

export default Product;
