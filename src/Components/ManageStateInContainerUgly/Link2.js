import React, { Component } from 'react'
import AugmentedButton from './AugmentedButton'

class Link2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentWillMount() {
        const { localState } = this.props
        this.setState(localState)
    }

    componentWillUnmount() {
        this.props.propagateState(this.state)
    }

    handleChange = (e) => {
        const key = e.target.value
        const val = e.target.checked
        this.setState(prevState => {
            return {
                ...prevState, [key]: val
            }
        });
    }

    render() {

        return (
            <div>
                <AugmentedButton btnVal="CB1" checked={this.state['CB1']} handleChange={this.handleChange} />
                <AugmentedButton btnVal="CB2" checked={this.state['CB2']} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default Link2