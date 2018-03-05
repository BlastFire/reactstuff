import React, { Component } from 'react'
import RPSControlsStream from './RPSControls'
import PlayerBox from './PlayerBox'
import EnemyBox from './EnemyBox'

const RPSEntry = props => {

    let pbbLoading = true

    const handleCounter = (counter) => {
        console.log(counter)
        if (counter === 3) {
            pbbLoading = true
        } else {
            pbbLoading = false
        }
    }


    return (
        [
            <div key="rpscontrols" style={{
                marginTop: 40,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            }}>

                <RPSControlsStream speed={500} handleCounter={handleCounter} />

            </div >,
            <div key="game" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: 40
            }}>

                <PlayerBox pbbLoading={pbbLoading} />
                <EnemyBox />

            </div>
        ]
    )
}

export default RPSEntry