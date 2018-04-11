import React from 'react'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import { setObservableConfig, createEventHandler, componentFromStream, withState } from 'recompose'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/add/operator/switchMap'
setObservableConfig(rxjsConfig)


const TestingUI = ({ counter, handleClick, handleReset, handleChoice }) => {

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleClick}>Start</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleChoice}>Choice</button>
        </div>
    )

}

const TestingStream = componentFromStream(props$ => {

    const { stream: handleClick$, handler: handleClick } = createEventHandler()
    const { stream: handleReset$, handler: handleReset } = createEventHandler()
    const { stream: handleChoice$, handler: handleChoice } = createEventHandler()

    return props$.switchMap(props =>
        handleClick$.switchMap(e => Observable.interval(1000)
            .map(counter => ({ ...props, counter, handleClick, handleReset, handleChoice }))
        )).startWith({ counter: 0, handleClick, handleReset, handleChoice })
        .take(3)
            .map(TestingUI)

})

export default TestingStream