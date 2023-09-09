import { Component } from "react";

const styles = {
    carDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '15px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA'
    }
}

class CarDetails extends Component {
    render(){
        const {car} = this.props;
        return (
            <div style={styles.carDetails}>
                <ul style={styles.ul}>
                    {car.map(el => 
                    <li key={el.name} style={styles.product}>
                        <img alt={el.name} src={el.img} width='50' height='32'/>
                        {el.name}
                        <span>{el.quantity}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default CarDetails;