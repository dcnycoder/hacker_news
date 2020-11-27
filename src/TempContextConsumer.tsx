import React from 'react'
import AppContext from './App'
import {AppContextType} from './types'
import AppContextConsumer from './App'

function TempContextConsumer(): JSX.Element {
  const {color, size} = React.useContext(AppContext);
  return (
    <>
      {color}
    </>
  )
}


export default TempContextConsumer