import React, { Component } from 'react'
import Link1 from './Link1'

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

    getdata = (state) => {
        this.setState(prevState => {
            return { ...prevState, link1: state }
        });
    }

    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={e => this.handleClick("nav1")}>Comp1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={e => this.handleClick("nav2")}>Comp2</a>
                    </li>
                </ul>
                {this.state.link === 'nav1' ? <Link1 localState={this.state.link1} propagateState={this.getdata} /> : ''}
            </div>
        )
    }
}

{/* <AugmentedButton btnVal="A1" />
        <AugmentedButton btnVal="B1" /> */}

export default ButtonTestContainer