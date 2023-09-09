import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import CarDetails from './CarDetails';

const styles = {
    bubble: {
        position:'relative',
        left: 6,
        top: 65
    },
    car: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    shoppingCarImg: {
        width: '30px'
    }
}

class Car extends Component{
    render(){
        const {car,isCarVisible,showCar} = this.props;
        const quantity = car.reduce((acc,el)=> acc + el.quantity,0);
        return(
            <div>
                <span style={styles.bubble}>
                    {quantity !==0 ? <BubbleAlert value={quantity} /> : null}
                </span>
                <button onClick={showCar} style={styles.car}>
                <img alt="shopping-car" src='shopping-car.png' style={styles.shoppingCarImg}/> 
                Car
                </button>
                {
                    isCarVisible ?  <CarDetails car={car} /> : null
                }
            </div>
        )
    }
}

export default Car;