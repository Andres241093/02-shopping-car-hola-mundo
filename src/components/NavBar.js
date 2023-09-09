import { Component } from "react";
import Logo from './Logo';
import Car from './Car';

const styles = {
    navBar: {
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class NavBar extends Component {
    render() {
        const {car,isCarVisible,showCar} = this.props;
        return (
            <nav style={styles.navBar}>
               <Logo />
               <Car 
               isCarVisible={isCarVisible}
               showCar={showCar}
               car={car}/>
            </nav>
        )
    }
}

export default NavBar;