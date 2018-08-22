import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
    return (
        <Auxiliar>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
        </Auxiliar>
    );
};

export default OrderSummary;