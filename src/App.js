import React, { Component } from 'react';
// import ButtonTestContainer from './Components/ManageStateInContainerUgly/ButtonTestContainer'
import SwitchWrapper from './Components/RenderPropsPattern/SwitchWrapper'
import SwitchWrapper2 from './Components/ControlPropsPattern/SwitchWrapper2'
import Switch from './Components/RenderPropsPattern/Switch'
import StreamAppEntry from './Components/StreamingComponents/StreamAppEntry'
import RPSEntry from './Components/RockPaperScissor/RPSEntry'

class App extends Component {

  swFn = ({ on }) => {
    console.log(on)
  }

  render() {
    return (

      <RPSEntry />

      // <StreamAppEntry />

      // <ButtonTestContainer />

      //Used patterns Render Props and Props Collections
      /*
      <SwitchWrapper toggle={this.swFn} render={({ on, handleToggle, getTogglerProps }) => (
        <div>
          <Switch
            on={on}
            {...getTogglerProps() }
          />
          <hr />
          <button
            {...getTogglerProps({
              onClick: () => alert('hi')
            }) }>
            {on ? 'On' : 'Off'}
          </button>
        </div>
      )} />
      */

      // <SwitchWrapper2 render={({ on, getTogglerProps }) => (
      //   <div>
      //     <Switch on={on} {...getTogglerProps() } />
      //     <hr />
      //     <button {...getTogglerProps() } > {on ? 'on' : 'off'}</button>
      //   </ div>
      // )} />
    )
  }
}

export default App;