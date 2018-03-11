import React from 'react'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import { setObservableConfig, createEventHandler, componentFromStream, withState } from 'recompose'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/add/operator/switchMap'
setObservableConfig(rxjsConfig)




const RPSControls = ({ counter, loadingClick, loadingReset, handleClick, handleReset, choiceHandler, choice }) => {
    
    let pbbLoading = !loadingClick

    if (counter === 3) {
        pbbLoading = true
    }

    return (
        <div>
            <div style={{
                marginTop: 40,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            }}>
                <div>
                    <button disabled={loadingClick} onClick={handleClick}>Start</button>
                    <br />
                    <br />
                    <h2>{counter}</h2>
                    <button disabled={loadingReset} onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: 40
            }}>
                <div style={{
                    width: '100%',
                    border: '1px solid black'
                }}>
                    <h1>PlayerBox</h1>
                    <button disabled={pbbLoading} value="rock" onClick={choiceHandler}>Rock</button>
                    <button disabled={pbbLoading} value="paper" onClick={choiceHandler}> Paper</button>
                    <button disabled={pbbLoading} value="scissors" onClick={choiceHandler}>Scissors</button>
                    <h2>PLayer pick: {choice ? choice : ''}</h2>
                </div>
                <div style={{
                    width: '100%',
                    border: '1px solid black'
                }}>
                    <h1>EnemyBox</h1>
                </div>

            </div>
        </div>
    )
}

const RPSControlsStream = componentFromStream(props$ => {
    const { stream: handleClick$, handler: handleClick } = createEventHandler()
    const { stream: handleReset$, handler: handleReset } = createEventHandler()
    const { stream: choiceHandler$, handler: choiceHandler } = createEventHandler()
    let internalCounter = 0
    let loadingClick = false
    let loadingReset = false

    const interval = (props) => Observable.interval(props.speed).startWith(0).map(counter => {
        internalCounter += 1
        loadingReset = internalCounter === 3 ? false : true
        return ({ counter: internalCounter, loadingClick: true, loadingReset, handleClick, handleReset, choiceHandler, ...props })
    }).take(3)
    return props$.switchMap((props) => {
        return Observable.merge(
            handleClick$
                .switchMap(e => interval(props))
                .startWith({ counter: 0, loadingClick, loadingReset, handleClick, handleReset, choiceHandler, ...props })
                .takeUntil(choiceHandler$),
            handleReset$
                .map(e => {
                    internalCounter = 0
                    return ({ counter: 0, loadingClick: false, loadingReset: false, handleClick, handleReset, choiceHandler, ...props })
                }),
            choiceHandler$
                .map(e => ({ ...props, counter: 0, loadingClick: true, loadingReset: true, choice: e.target.value, choiceHandler }))
        )
    }).map(RPSControls)
})

export default RPSControlsStream