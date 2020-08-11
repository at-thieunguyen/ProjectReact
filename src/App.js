import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
// import Demo from './component/Demo';
// import Product from './component/product';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple watch series 5',
          img: 'https://cdn.tgdd.vn/Products/Images/7077/212770/apple-watch-s5-44mm-vien-nhom-day-cao-su-ava-1-600x600.jpg',
          price: 100000000,
          status: true
        },
        {
          id: 2,
          name: 'Iphone 7 plus',
          img: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460-400x460.png',
          price: 900000000,
          status: true
        },
        {
          id: 3,
          name: 'Iphone xsmax',
          img: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
          price: 550000000,
          status: true
        }
      ],
      isActive: true
    }
    // this.onAddProduct = this.onAddProduct.bind(this)
    this.onSetActive = this.onSetActive.bind(this);
  };
  // onAddProduct() {
  //   console.log(this.refs.keyname.value);

  // }
  onSetActive() {
    if (this.state.isActive === true) {
      this.setState({
        isActive: false
      })
    } else {
      this.setState({
        isActive: true
      });
    }
  }
  render() {
    // let elements = products.map((product, index) => {
    //   let results = '';
    //   if (product.status) {
    //     results = <Product
    //       key={product.id}
    //       price={product.price}
    //       img={product.img}
    //     >
    //       {product.name}
    //     </Product>
    //   }
    //   return results;
    // })
    let elements = this.state.products.map((product, index) => {
      let results = '';
      if (product.status) {
        results = <tr key={index}>
          <th>{index}</th>
          <th>{product.name}</th>
          <th>{product.price}</th>
        </tr>
      }
      return results;
    })
    return (
      <div className="App">
        <Header />
        {/* <div>
          <label htmlFor="">Name</label>
          <input type="text" ref="keyname" />
        </div>
        <button onClick={this.onAddProduct}>Add</button> */}
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {elements}
            </tbody>
          </table>
          <button className="btn btn-success" type="button" onClick={this.onSetActive}>Active: {this.state.isActive === true ? 'true' : 'false'}</button>
        </div>
        {/* <Demo /> */}
        {/* sử dụng this.props.key để truyền dữ liệu */}
        {/* <Product
          name="Apple watch series 5"
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/7077/212770/apple-watch-s5-44mm-vien-nhom-day-cao-su-ava-1-600x600.jpg"
        />
        <Product
          name="Iphone 7 plus"
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460-400x460.png"
        />
        <Product
          name="Iphone xsmax"
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png"
        /> */}

        { /* sử dụng this.props.children để truyền dữ liệu */}
        {/* <Product
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/7077/212770/apple-watch-s5-44mm-vien-nhom-day-cao-su-ava-1-600x600.jpg"
        >Apple watch series 5</Product>
        <Product
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460-400x460.png"
        >Iphone 7 plus</Product>
        <Product
          price="10000000"
          img="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png"
        >Iphone xsmax</Product> */}
      </div>
    );
  }

}

export default App;
