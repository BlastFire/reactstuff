import React, { Component } from 'react'

class AugmentedButton extends Component {

    handleChange = (e) => {
        console.log(`${e.target.value} ${e.target.checked}`)
    }

    render() {

        const { btnVal } = this.props

        return (
            <input type="checkbox" value={btnVal} onChange={this.handleChange} />
        )
    }
}

export default AugmentedButton