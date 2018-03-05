import React from 'react'
import rxjsConfig from 'recompose/rxjsObservableConfig'
import { setObservableConfig } from 'recompose'
import {
    S1, S2, S3, S4, S5TypeWriter, S6SwapiCo,
    S7SimpleForm, S8Counter, S9Counter, CounterPure
} from './SimpleComponents'

setObservableConfig(rxjsConfig)

const StreamAppEntry = props => {
    return (
        <div>
            {/* <S5TypeWriter message="Rxjs Streaming Component" speed={1000} /> */}
            {/* <S6SwapiCo id={1} /> */}
            <S8Counter value={3} />
            {/* <S9Counter value={3}>
                <CounterPure />
                <CounterPure />
            </S9Counter> */}
        </div>
    )
}

export default StreamAppEntry