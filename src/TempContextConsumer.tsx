import React from 'react'
import AppContext from './App'
import {AppContextType} from './types'
import AppContextConsumer from './App'

const TempContextConsumer = () => {
  //const value = React.useContext(AppContext);
  return (
    <AppContextConsumer>
      {(AppContext: AppContextType) => {
        <div>
          color: {AppContext.color}
        </div>
      }}
    </AppContextConsumer>
  )

}

export default TempContextConsumer