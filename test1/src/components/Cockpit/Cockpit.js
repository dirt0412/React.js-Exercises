import * as React from 'react'
import './Cockpit.scss'

const cockpit = (props) => {
    let classes = [props.products.length <= 1 ? 'red' : 'green']
    return (
        <div>
            <h1 className={classes.join(' ')}> {(props.products.length <= 1) ? 'End of resources' : 'Resources'} </h1>
        </div>
    );
}

export default cockpit;