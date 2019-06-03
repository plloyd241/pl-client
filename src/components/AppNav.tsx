import React, { Component }  from 'react'
import { Link } from "react-router-dom"

class AppNav extends Component {

    render() {
        return (
            <div className="app-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
            </div>
        )
    }
}

export default AppNav