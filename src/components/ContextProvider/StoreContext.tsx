import React, { createContext } from 'react'
import { UserStore } from '../stores/UserStore'
import { StudentStore } from '../stores/StudentStore'
import { ThemeStore } from '../stores/ThemeStore'


export const StoreContext = React.createContext({
    UserStore: new UserStore(),
    StudentStore: new StudentStore(),
    ThemeStore: new ThemeStore(),
})

