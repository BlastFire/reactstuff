import React from 'react'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import { setObservableConfig, createEventHandler, componentFromStream } from 'recompose'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/add/operator/switchMap'
setObservableConfig(rxjsConfig)

const RPSControls = ({ counter, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>Start</button>
            <br />
            <br />
            <h2>{counter}</h2>
        </div>
    )
}

const RPSControlsStream = componentFromStream(props$ => {
    const { stream: handleClick$, handler: handleClick } = createEventHandler()

    //const wtf$ = handleClick$.map(e => ({ counter: "wtf", handleClick: handleClick })).startWith({ counter: "buh", handleClick: handleClick })
    // return wtf$
    //     .map(RPSControls)

    return props$.switchMap(props => {
        return Observable.interval(1000)
    })
})



export default RPSControlsStream