import React, { Component } from 'react';
// import ButtonTestContainer from './Components/ManageStateInContainerUgly/ButtonTestContainer'
import SwitchWrapper from './Components/RenderPropsPattern/SwitchWrapper'
import Switch from './Components/RenderPropsPattern/Switch'

class App extends Component {

  swFn = ({ on }) => {
    console.log(on)
  }

  render() {
    return (
      // <ButtonTestContainer />

      //Used patterns Render Props and Props Collections
      <SwitchWrapper toggle={this.swFn} render={({ on, handleToggle, togglerProps }) => (
        <div>
          <Switch
            on={on}
            {...togglerProps}
          />
          <hr />
          <button {...togglerProps} >
            {on ? 'On' : 'Off'}
          </button>
        </div>
      )} />
    )
  }
}

export default App;