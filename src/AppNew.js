import React from 'react'
import {Store} from './Store'

const AppNew = () => {
  let {state} = React.useContext(Store)
  React.useEffect()

  return (

    <div name='appNew'>
      {state.search}
    </div>
  )
}

export default AppNew