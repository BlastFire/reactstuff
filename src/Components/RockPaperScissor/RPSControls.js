import React from 'react'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import { setObservableConfig, createEventHandler, componentFromStream } from 'recompose'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/add/operator/switchMap'
setObservableConfig(rxjsConfig)

const RPSControls = ({ counter, loadingClick, loadingReset, handleClick, handleReset, handleCounter }) => {

    // const handleMyClick = e => {
    //     console.log(e.target.value)
    //     pSelect(e.target.value)

    //     //this will start the observable, wired in the stream wrapper component
    //     handleClick()
    // }


    handleCounter(counter)


    return (
        <div>
            <button disabled={loadingClick} onClick={handleClick}>Start</button>
            <br />
            <br />
            <h2>{counter}</h2>
            <button disabled={loadingReset} onClick={handleReset}>Reset</button>
        </div>
    )
}

const RPSControlsStream = componentFromStream(props$ => {
    const { stream: handleClick$, handler: handleClick } = createEventHandler()
    const { stream: handleReset$, handler: handleReset } = createEventHandler()
    let internalCounter = 0
    let loadingClick = false
    let loadingReset = false

    const start = (props) => Observable.interval(props.speed).startWith(0).map(counter => {
        internalCounter += 1
        loadingReset = internalCounter === 3 ? false : true
        return ({ counter: internalCounter, loadingClick: true, loadingReset, handleClick, handleReset, ...props })
    }).take(3)
    return props$.switchMap((props) => {
        return Observable.merge(
            handleClick$
                .switchMap(e => start(props))
                .startWith({ counter: 0, loadingClick, loadingReset, handleClick, handleReset, ...props }),
            handleReset$
                .map(e => {
                    internalCounter = 0
                    return ({ counter: 0, loadingClick: false, loadingReset: false, handleClick, handleReset, ...props })
                })
        )
    }).map(RPSControls)
})

export default RPSControlsStream