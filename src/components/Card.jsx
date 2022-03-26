import React from 'react'

function Card(props) {
    console.log("Card -> props", props)
    // const {childern,className} = props
    const classes = props.className;
    const childerns = props.children;

    return (
        <div className={classes}>
            {props.children}
       
        </div>
    )
}

export default Card