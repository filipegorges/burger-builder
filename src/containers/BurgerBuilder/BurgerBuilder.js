import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    }

    render() {
        return(
            <Auxiliar>
                <Burger ingredients={this.state.ingredients} />
                <div>Basic Controls</div>
            </Auxiliar>    
        );
    }
}

export default BurgerBuilder;