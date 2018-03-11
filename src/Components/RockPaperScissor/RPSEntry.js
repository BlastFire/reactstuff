import React, { Component } from 'react'
import RPSControlsStream from './RPSControls'
import PlayerBox from './PlayerBox'
import EnemyBox from './EnemyBox'

class RPSEntry extends Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (
            <RPSControlsStream speed={5000} />
        )
    }
}

export default RPSEntry