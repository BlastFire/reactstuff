import { Component } from 'react'

class SwitchWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            on: false
        }
    }

    handleToggle = () => {
        this.setState(
            { on: !this.state.on },
            () => this.props.toggle(this.state)
        )
    }

    render() {
        const { render } = this.props
        return render({
            on: this.state.on,
            handleToggle: this.handleToggle,
            togglerProps: {
                'aria-expanded': this.state.on,
                onClick: this.handleToggle
            }
        })
    }
}

export default SwitchWrapper