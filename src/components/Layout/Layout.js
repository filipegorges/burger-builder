import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxiliar>
        <Toolbar />
        <div>SideDrawer</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;