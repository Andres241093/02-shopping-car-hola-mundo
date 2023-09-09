import { Component } from 'react';
import Products from './components/Products';
import { PRODUCT_LIST } from './const/product-list';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    products: PRODUCT_LIST,
    car: [],
    isCarVisible: false
  };

  addToCar = (product) => {
    const {car} = this.state;
    if(car.find(el => el.name === product.name)){
      const newCar = car.map(el => el.name === product.name 
        ? ({
        ...el,
        quantity: el.quantity + 1
      }) : el);

      return this.setState({car: newCar})
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity: 1
      })
    })
  }

  showCar = () => {
    this.setState({
      isCarVisible: !this.state.isCarVisible
    });
  }

  render() {
    const {isCarVisible} = this.state;
    return (
      <div>
        <NavBar car={this.state.car} isCarVisible={isCarVisible} showCar={this.showCar}/>
        <Layout>
          <Title />
          <Products
            addToCar={this.addToCar}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
