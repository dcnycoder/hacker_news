import React from 'react'
import Store from './Store'

const AppNew = () => {
  let {Store, storiesReducer} = React.useContext(Store)
  return (
    <div name='appNew'>
      {Store.search}
    </div>
  )
}

export default AppNew