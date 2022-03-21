import React from 'react'

const HelloWithoutJSX = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello, Pratyush Mani Manav')
    )
}

export default HelloWithoutJSX