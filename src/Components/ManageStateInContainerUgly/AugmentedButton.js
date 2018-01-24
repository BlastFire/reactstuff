import React, { Component } from 'react'

class AugmentedButton extends Component {

    render() {

        const { btnVal, handleChange, checked } = this.props

        return (
            <div>
                <input id={btnVal} type="checkbox" defaultChecked={checked} value={btnVal} onChange={handleChange} />
                <label htmlFor={btnVal}>{btnVal}</label>
            </div>
        )
    }
}

export default AugmentedButton