import React from 'react'
import Store from './Store'

const AppNew = () => {
  let {storiesState, storiesReducer} = React.useContext(Store)

  return (
    <div name='appNew'>
      {storiesState.search}
    </div>
  )
}

export default AppNew