import React from 'react'
import {StoreType} from './types'

let Store = React.createContext<StoreType>({})

// const StoreProvider = (props: any): JSX.Element => {
//   return <Store.Provider value>
//     props.children
//   </Store.Provider>
// }

export default Store