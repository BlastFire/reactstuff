import React, { Component } from 'react'


class PlayerBox extends Component {

    constructor(props) {
        super(props)
        this.state = { user: '' }
    }

    handleClick = (e) => {
        this.setState({ user: e.target.value })
    }

    render() {

        const { pbbLoading } = this.props

        return (
            <div style={{
                width: '100%',
                height: '400px',
                border: '1px solid black'
            }}>
                <h1>PlayerBox</h1>
                <button disabled={pbbLoading} value="rock" onClick={this.handleClick}>Rock</button>
                <button disabled={pbbLoading} value="paper" onClick={this.handleClick}>Paper</button>
                <button disabled={pbbLoading} value="scissors" onClick={this.handleClick}>Scissors</button>
                <h2>{this.state.user}</h2>

            </div>
        )
    }
}

export default PlayerBox