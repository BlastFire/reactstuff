import React, { cloneElement } from 'react'
import { componentFromStream, createEventHandler } from 'recompose'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/add/operator/switchMap'

export const S1 = props => {
    return (<h1>s1</h1>)
}

export const S2 = componentFromStream(props$ =>
    props$.map(props => <h1>Streaming</h1>)
)

export const S3 = componentFromStream(props$ => {
    return Observable.interval(1000).map(count => <h1>{count}</h1>)
})

//---------------------------

const PureCompMessage = props => (
    <div>
        <h1>{props.message}</h1>
    </div>
)

export const S4 = componentFromStream(props$ => {
    return props$.map(PureCompMessage)
})

//------------------------------

const createTypeWriter = ({ message, speed }) =>
    Observable.zip(
        Observable.from(message),
        Observable.interval(speed),
        letter => letter)
        .scan((acc, cur) => acc + cur)

export const S5TypeWriter = componentFromStream(props$ =>
    props$
        .switchMap(props => createTypeWriter(props))
        .map(message => ({ message }))
        .map(PureCompMessage)
)

//------------------------------------

const personById = id => `https://swapi.co/api/people/${id}`
const loadById = id => {
    return Observable.ajax(personById(id)).pluck('response')
        .switchMap(response =>
            Observable.ajax(response.homeworld).pluck('response').startWith({ name: '' }),
            (person, homeworld) => ({ ...person, homeworld: homeworld.name })
        )
}

const SwapiCoPure = props => (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.homeworld}</h2>
    </div>
)

export const S6SwapiCo = componentFromStream(props$ =>
    props$
        .switchMap(props =>
            loadById(props.id)
                .map(SwapiCoPure)
        )
)

//----------------------------------------------------
const SimpleFormPure = ({ text, onInput }) => (
    <div>
        <input type="text" onInput={onInput} />
        <h2>{text}</h2>
    </div>
)

export const S7SimpleForm = componentFromStream(props$ => {
    const { stream: onInput$, handler: onInput } = createEventHandler()
    const text$ = onInput$.map(e => e.target.value).startWith("")
    return text$.map(text => ({ text, onInput })).map(SimpleFormPure)
})

//--------------------------
export const CounterPure = ({ value, onInc, onDec }) => (
    <div>
        <button onClick={onInc}>+</button>
        <h2>{value}</h2>
        <button onClick={onDec}>-</button>
    </div>
)

export const S8Counter = componentFromStream(props$ => {

    const { stream: onInc$, handler: onInc } = createEventHandler()
    const { stream: onDec$, handler: onDec } = createEventHandler()

    return props$.switchMap(props => {
        return Observable.merge(
            onInc$.mapTo(1),
            onDec$.mapTo(-1))
            .startWith(props.value)
            .scan((acc, cur) => acc + cur)
            .map(value => ({ value, onInc, onDec }))
            .map(CounterPure)
    })
})

export const S9Counter = componentFromStream(props$ => {

    const { stream: onInc$, handler: onInc } = createEventHandler()
    const { stream: onDec$, handler: onDec } = createEventHandler()

    return props$.switchMap(props => {
        return Observable.merge(
            onInc$.mapTo(1),
            onDec$.mapTo(-1))
            .startWith(props.value)
            .scan((acc, cur) => acc + cur)
            .map(value => ({ value, onInc, onDec }))
            .map(newProps => cloneElement(props.children, newProps))
    })
})