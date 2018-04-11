import React, { Component } from 'react'
import RPSControlsStream from './RPSControls'
import PlayerBox from './PlayerBox'
import EnemyBox from './EnemyBox'
import TestingStream from './Testing'

class RPSEntry extends Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (
            // <RPSControlsStream speed={1000} />
            <TestingStream />
        )
    }
}

export default RPSEntry