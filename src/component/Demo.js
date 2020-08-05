import React, { Component } from 'react';

export class Demo extends Component {

  render() {
    let product = {
      id: 1,
      name: 'iphone xs max',
      price: 10000000
    };
    let users = [
      {
        id: 1,
        name: 'Thieu',
        age: 22
      },
      {
        id: 2,
        name: 'superman',
        age: 18
      },
      {
        id: 3,
        name: 'flash',
        age: 30
      }
    ];
    let elements = users.map((user, index) => {
      return <div key= {user.id}>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
      </div>
    });
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-medium-6">
              <header className="App-header">
                <h2>Welcome to Duy Thieu</h2>
                <p>id: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <div>
                  {elements}
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Demo;
