import React, { Component } from 'react'

class ButtonTestContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            link: ""
        }

    }

    handleClick = (val) => {
        this.setState({
            link: val
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={e => this.handleClick("nav1")}>Comp1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={e => this.handleClick("nav2")}>Comp1</a>
                    </li>
                </ul>
                
            </div>
        )
    }
}

{/* <AugmentedButton btnVal="A1" />
        <AugmentedButton btnVal="B1" /> */}

export default ButtonTestContainer