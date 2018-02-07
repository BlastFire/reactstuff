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

    getTogglerProps = ({ onClick, ...props } = {}) => {
        return {
            'aria-expanded': this.state.on,
            onClick: (...args) => {
                onClick && onClick(...args)
                this.handleToggle(...args)
            },
            ...props
        }
    }

    render() {
        const { render } = this.props
        return render({
            on: this.state.on,
            handleToggle: this.handleToggle,
            getTogglerProps: this.getTogglerProps
        })
    }
}

export default SwitchWrapper