import React, { Component } from 'react'

class SwitchWrapper2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            on: false
        }
    }

    getTogglerProps = props => {
        return {
            'aria-expanded': this.state.on,
        }
    }

    render() {
        const { render } = this.props
        return render({
            on: this.state.on,
            getTogglerProps: this.getTogglerProps
        })
    }
}

export default SwitchWrapper2