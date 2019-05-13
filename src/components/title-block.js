import PropTypes from "prop-types"
import React from "react"

function TitleBlock() {
    const date = new Date()

    const today = date.getDate()

    return (
        <div>
            <h1 style={{ alignContent: 'center', textAlign: 'center' }}>Hi people</h1>
            <p style={{ alignContent: 'center', textAlign: 'center' }}>Welcome to your new Gatsby site. {today}</p>
            <p style={{ alignContent: 'center', textAlign: 'center' }}>Below you can find clickable lists of clickable lists</p>
        </div>    
    )
}

export default TitleBlock
