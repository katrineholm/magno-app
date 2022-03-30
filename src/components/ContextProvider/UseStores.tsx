import React from 'react'
import { StoreContext } from './StoreContext'

export const useStores = () => React.useContext(StoreContext)